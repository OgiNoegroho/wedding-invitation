-- Create RSVPs table and policies
create table if not exists rsvps (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  attendance text not null,
  message text,
  created_at timestamp with time zone default now()
);

alter table rsvps enable row level security;

create policy "Public can insert rsvp"
on rsvps
for insert
to public
with check (true);

create policy "Public can read rsvp"
on rsvps
for select
to public
using (true);
