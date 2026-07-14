create table if not exists public.lesson_progress (
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  lesson_id text not null check (char_length(lesson_id) between 2 and 120),
  score smallint not null check (score >= 0),
  max_score smallint not null check (max_score > 0 and score <= max_score),
  completed_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_id)
);

alter table public.lesson_progress enable row level security;

create policy "Students can read their own progress"
on public.lesson_progress
for select
to authenticated
using (auth.uid() = user_id);

create policy "Students can create their own progress"
on public.lesson_progress
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Students can update their own progress"
on public.lesson_progress
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create index if not exists lesson_progress_user_updated_idx
on public.lesson_progress (user_id, updated_at desc);
