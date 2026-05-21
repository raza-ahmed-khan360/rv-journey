-- Seed data for posts
INSERT INTO posts (title, slug, excerpt, content, author, image_url, published)
VALUES 
(
  'Surviving Our First Winter Storm in the Rockies',
  'surviving-winter-storm',
  'We thought we were prepared. The Airstream''s furnace thought otherwise. Here''s what happened when temperatures dropped to -10°F.',
  '<p>We thought we were prepared. The Airstream''s furnace thought otherwise. Here''s what happened when temperatures dropped to -10°F.</p><p>It was a quiet Tuesday when the weather alert came through. A polar vortex was sweeping down from Canada, and we were parked just outside of Estes Park. We had full propane tanks, our skirts were attached, and we felt invincible.</p><h2>The First Night</h2><p>By 8 PM, the condensation on the inside of the windows had frozen solid. Captain (our cat) decided that sleeping on our faces was his only chance of survival. Then, at 2 AM, the furnace made a terrible grinding noise and shut down.</p><p>This is the reality of RV life. The Instagram photos show you the golden hour light spilling across the dinette, but they don''t show you huddled under three sleeping bags wearing a beanie, trying to restart a finicky Dometic furnace with freezing fingers.</p><blockquote>"The best part about things going wrong is that it makes a great story later. At the time, it just makes you question all your life choices."</blockquote><h2>The Fix</h2><p>It turned out the sail switch was jammed with dog hair (we don''t even own a dog, so that''s a mystery). A quick clean, and we had heat again. But those four hours of freezing temperatures taught us a valuable lesson about redundancy.</p>',
  'Captain the Cat',
  '/placeholder-gallery-1.jpg',
  TRUE
),
(
  'The Ultimate Guide to Boondocking Connectivity',
  'boondocking-connectivity',
  'How we manage to work full-time while parked miles away from the nearest cell tower using Starlink and cellular bonding.',
  '<p>Working from the road sounds like a dream, until you have a Zoom call with your boss and your connection drops because a stiff breeze hit your RV.</p><h2>Our Setup</h2><p>We run a bonded setup combining Starlink with two cellular connections (AT&T and Verizon). This ensures that if we lose line-of-sight to the satellites due to trees, the cellular connections pick up the slack without dropping the packet flow.</p>',
  'The Crew',
  '/placeholder-video-thumb.jpg',
  TRUE
),
(
  'Meeting the Locals: A Grizzly Encounter',
  'grizzly-encounter',
  'A quiet morning hike turned into an adrenaline-pumping standoff with a massive grizzly bear in Glacier National Park.',
  '<p>We always carry bear spray, but you never actually expect to use it.</p><h2>The Encounter</h2><p>We were about two miles up the Highline Trail in Glacier National Park. The sun had just cleared the peaks, casting long shadows across the valley. As we rounded a blind corner, we stopped dead in our tracks.</p><p>About fifty yards ahead, right on the trail, was a massive grizzly digging for roots. Time seemed to slow down. We slowly backed away, speaking in calm, firm voices.</p>',
  'The Crew',
  '/placeholder-gallery-3.jpg',
  TRUE
);

-- Seed data for map points
INSERT INTO map_points (latitude, longitude, location_name, notes, visited_date)
VALUES 
(39.3722, -105.5255, 'Estes Park, CO', 'Survived the winter storm here.', '2024-12-12'),
(48.6967, -113.7183, 'Glacier National Park, MT', 'Grizzly encounter on the Highline Trail.', '2024-09-28'),
(44.4280, -110.5885, 'Yellowstone National Park, WY', 'Boondocking off the grid for a week.', '2024-08-15');
