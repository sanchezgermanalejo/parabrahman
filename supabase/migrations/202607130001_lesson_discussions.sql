create table if not exists public.lesson_discussions (
  id uuid primary key default gen_random_uuid(),
  lesson_id text not null check (char_length(lesson_id) between 2 and 120),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  author_name text not null check (char_length(author_name) between 2 and 80),
  kind text not null check (kind in ('comment', 'question')),
  rating smallint not null check (rating between 1 and 5),
  body text not null check (char_length(body) between 3 and 2000),
  status text not null default 'published' check (status in ('published', 'hidden')),
  created_at timestamptz not null default now()
);

alter table public.lesson_discussions enable row level security;

create policy "Public discussions are readable"
on public.lesson_discussions
for select
using (status = 'published');

create policy "Authenticated students can publish"
on public.lesson_discussions
for insert
to authenticated
with check (auth.uid() = user_id and status = 'published');

create policy "Authors can delete their contributions"
on public.lesson_discussions
for delete
to authenticated
using (auth.uid() = user_id);

create index if not exists lesson_discussions_lesson_created_idx
on public.lesson_discussions (lesson_id, created_at desc)
where status = 'published';
