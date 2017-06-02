INSERT INTO slams (
  slam_name,
  slam_location,
  slam_image_url,
  surface_type
) VALUES
('The Australian Open', 'Melbourne, Australia', 'http://i.imgur.com/qV74gFc.jpg', 'Hard Court');

INSERT INTO slams (
  slam_name,
  slam_location,
  slam_image_url,
  surface_type
) VALUES
('The French Open', 'Paris, France', 'http://i.imgur.com/RjiNdUC.jpg', 'Clay Court');

INSERT INTO slams (
  slam_name,
  slam_location,
  slam_image_url,
  surface_type
) VALUES
('Wimbledon', 'London, England', 'http://i.imgur.com/mnVcP5N.png', 'Grass Court');

INSERT INTO slams (
  slam_name,
  slam_location,
  slam_image_url,
  surface_type
) VALUES
('The U.S. Open', 'New York City, New York, The United States', 'http://i.imgur.com/YBbv3gY.jpg', 'Hard Court');


INSERT INTO questions (
  title,
  description,
  grand_slam_id
) VALUES
('Question regarding The Australian Open', 'Does anyone know the greatest Australian Open champ of all time?', 1);

INSERT INTO questions (
  title,
  description,
  grand_slam_id
) VALUES
('Question regarding The French Open', 'Would you consider this playing surface harder or easier to play on, and why?', 1);

INSERT INTO responses (
  response,
  question_id
) VALUES
('The greatest champ off all time of The Australian Open? I''d have to go with Rod Laver. The main stadium is named after him for god''s sake. I''m wearing a pair of Addidas Rod Lavers as we speak.', 1);

INSERT INTO responses (
  response,
  question_id
) VALUES
('Playing on clay? I''m not quite sure. It plays slower for sure, so some balls can be easier to get to, but the surface can get a little more uneven with skidding and marks on the clay itself.', 1);
