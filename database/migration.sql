DROP TABLE IF EXISTS  slams;

CREATE TABLE slams (
  id BIGSERIAL PRIMARY KEY,
  slam_name VARCHAR(64) NOT NULL,
  slam_location VARCHAR(128)  NOT NULL,
  slam_image_url VARCHAR(255) NOT NULL,
  surface_type VARCHAR(20) NOT NULL,
);
