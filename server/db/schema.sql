\c qa

DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS answers CASCADE;
DROP TABLE IF EXISTS answers_photos CASCADE;

CREATE TABLE questions (
    "id" INT NOT NULL PRIMARY KEY,
    "product_id" INT NOT NULL,
    "body" VARCHAR(1000) NOT NULL,
    "date_written" BIGINT NOT NULL,
    "asker_name" VARCHAR(60) NOT NULL,
    "asker_email" VARCHAR(60) NOT NULL,
    "reported" BOOLEAN NOT NULL DEFAULT false,
    "helpfulness" INT NOT NULL DEFAULT 0
  );

COPY questions
FROM '/Users/jake-manning/SDC_Data/questions.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE answers (
    "id" INT NOT NULL PRIMARY KEY,
    "question_id" INT NOT NULL,
    "body" VARCHAR(1000) NOT NULL,
    "date_written" BIGINT NOT NULL,
    "answerer_name" VARCHAR(60) NOT NULL,
    "answerer_email" VARCHAR(60) NOT NULL,
    "reported" BOOLEAN NOT NULL DEFAULT '0',
    "helpfulness" INT NOT NULL DEFAULT 0,
    FOREIGN KEY ("question_id") REFERENCES questions("id")
  );

COPY answers
FROM '/Users/jake-manning/SDC_Data/answers.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE answers_photos (
    "id" INT NOT NULL PRIMARY KEY,
    "answer_id" INT NOT NULL,
    "url" TEXT NOT NULL,
    FOREIGN KEY ("answer_id") REFERENCES answers("id")
);

COPY answers_photos
FROM '/Users/jake-manning/SDC_Data/answers_photos.csv'
DELIMITER ','
CSV HEADER;