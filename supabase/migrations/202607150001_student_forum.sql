create table if not exists public.forum_threads (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  author_name text not null check (char_length(author_name) between 2 and 80),
  title text not null check (char_length(title) between 5 and 120),
  body text not null check (char_length(body) between 10 and 4000),
  category text not null check (category in ('presentaciones', 'estudio', 'practica', 'encuentros', 'biblioteca')),
  status text not null default 'published' check (status in ('published', 'hidden', 'closed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.forum_posts (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid not null references public.forum_threads(id) on delete cascade,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  author_name text not null check (char_length(author_name) between 2 and 80),
  body text not null check (char_length(body) between 1 and 3000),
  attachment_path text,
  attachment_name text check (attachment_name is null or char_length(attachment_name) between 1 and 180),
  attachment_type text,
  attachment_size integer check (attachment_size is null or attachment_size between 1 and 5242880),
  status text not null default 'published' check (status in ('published', 'hidden')),
  created_at timestamptz not null default now()
);

alter table public.forum_threads enable row level security;
alter table public.forum_posts enable row level security;

create policy "Published forum threads are readable"
on public.forum_threads
for select
using (status in ('published', 'closed'));

create policy "Students can create forum threads"
on public.forum_threads
for insert
to authenticated
with check (auth.uid() = user_id and status = 'published');

create policy "Authors can update their forum threads"
on public.forum_threads
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Published forum posts are readable"
on public.forum_posts
for select
using (status = 'published');

create policy "Students can reply to published threads"
on public.forum_posts
for insert
to authenticated
with check (
  auth.uid() = user_id
  and status = 'published'
  and exists (
    select 1 from public.forum_threads
    where forum_threads.id = thread_id
      and forum_threads.status = 'published'
  )
);

create policy "Authors can delete their forum posts"
on public.forum_posts
for delete
to authenticated
using (auth.uid() = user_id);

create index if not exists forum_threads_updated_idx
on public.forum_threads (updated_at desc)
where status in ('published', 'closed');

create index if not exists forum_posts_thread_created_idx
on public.forum_posts (thread_id, created_at asc)
where status = 'published';

create or replace function public.touch_forum_thread_after_reply()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.forum_threads
  set updated_at = new.created_at
  where id = new.thread_id;
  return new;
end;
$$;

revoke all on function public.touch_forum_thread_after_reply() from public;

drop trigger if exists forum_posts_touch_thread on public.forum_posts;

create trigger forum_posts_touch_thread
after insert on public.forum_posts
for each row execute function public.touch_forum_thread_after_reply();

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'forum-attachments',
  'forum-attachments',
  true,
  5242880,
  array['application/pdf', 'text/plain', 'image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

create policy "Forum attachments are publicly readable"
on storage.objects
for select
using (bucket_id = 'forum-attachments');

create policy "Students can upload forum attachments"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'forum-attachments'
  and (storage.foldername(name))[1] = auth.uid()::text
);

create policy "Students can delete their forum attachments"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'forum-attachments'
  and owner_id = auth.uid()::text
);
