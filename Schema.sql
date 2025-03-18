CREATE DATABASE schoolapi;
USE schoolapi;

CREATE TABLE schools (
  id integer PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  lat FLOAT(8,6) NOT NULL,
  long FLOAT(9,6) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO schools (name, address, latitude, longitude )
VALUES 
('The Asian School', 'Asian Acres, Vasant Vihar, Indra Nagar Colony, Dehradun, Uttarakhand 248006, India',  30.3225598, 78.0064419),
('St. Xaviers Collegiate School', '30, Park St, Mullick Bazar, Park Street area, Kolkata, West Bengal 700016, India', 22.5492, 88.3561);