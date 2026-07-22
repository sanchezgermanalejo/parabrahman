alter table public.lesson_discussions
add column if not exists parent_id uuid references public.lesson_discussions(id) on delete cascade;

create index if not exists lesson_discussions_parent_created_idx
on public.lesson_discussions (parent_id, created_at asc)
where parent_id is not null and status = 'published';

create table if not exists public.student_activity_state (
  user_id uuid primary key default auth.uid() references auth.users(id) on delete cascade,
  last_seen_at timestamptz not null default now()
);

alter table public.student_activity_state enable row level security;

create policy "Students can read their activity state"
on public.student_activity_state
for select
to authenticated
using (auth.uid() = user_id);

create policy "Students can create their activity state"
on public.student_activity_state
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Students can update their activity state"
on public.student_activity_state
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
