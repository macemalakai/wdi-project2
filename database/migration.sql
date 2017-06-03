DROP TABLE IF EXISTS  slams;

CREATE TABLE slams (
  id BIGSERIAL PRIMARY KEY,
  slam_name VARCHAR(64) NOT NULL,
  slam_location VARCHAR(128)  NOT NULL,
  slam_image_url VARCHAR(255) NOT NULL,
  surface_type VARCHAR(20) NOT NULL
);


DROP TABLE questions CASCADE;

CREATE TABLE questions (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(100),
  description VARCHAR(255),
  grand_slam_id INTEGER references slams(id)
);


DROP TABLE IF EXISTS  responses;

CREATE TABLE responses (
  id BIGSERIAL PRIMARY KEY,
  response VARCHAR(255),
  question_id INTEGER references questions(id)
);
