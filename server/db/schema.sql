\c qa

DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS answers;
DROP TABLE IF EXISTS photos;

CREATE TABLE 
  questions (
    id INT(11) AUTO_INCREMENT,
    product_id INT(11) NOT NULL,
    body TEXT(1000) NOT NULL,
    date_written DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    asker_name TEXT(60) NOT NULL,
    asker_email TEXT(60) NOT NULL,
    reported BOOLEAN NOT NULL DEFAULT 0,
    helpfulness INT(11) NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
  );

CREATE TABLE 
  answers (
    id INT(11) AUTO_INCREMENT,
    question_id INT(11) NOT NULL REFERENCES questions(id),
    body TEXT(60) NOT NULL,
    date_written DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    answerer_name TEXT(60) NOT NULL,
    answerer_email TEXT(60) NOT NULL,
    reported BOOLEAN NOT NULL DEFAULT 0,
    helpfulness INT(11) NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
  );

CREATE TABLE 
  answers_photos (
    id INT(11) AUTO_INCREMENT,
    url TEXT(500) NOT NULL,
    answer_id INT(11) NOT NULL REFERENCES answers(id),
    PRIMARY KEY (id)
);