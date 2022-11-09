\c qa

DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS answers CASCADE;
DROP TABLE IF EXISTS answers_photos CASCADE;

CREATE TABLE questions (
    "id" SERIAL NOT NULL PRIMARY KEY,
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
    "id" SERIAL NOT NULL PRIMARY KEY,
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

DROP SEQUENCE IF EXISTS answers_id_seq CASCADE;
CREATE SEQUENCE answers_id_seq;
ALTER TABLE answers
ALTER id
SET DEFAULT NEXTVAL('answers_id_seq');
SELECT SETVAL('answers_id_seq', (SELECT MAX(id) FROM answers));

CREATE TABLE answers_photos (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "answer_id" INT NOT NULL,
    "url" TEXT NOT NULL,
    FOREIGN KEY ("answer_id") REFERENCES answers("id")
);

COPY answers_photos
FROM '/Users/jake-manning/SDC_Data/answers_photos.csv'
DELIMITER ','
CSV HEADER;

DROP SEQUENCE IF EXISTS answers_photos_id_seq CASCADE;
CREATE SEQUENCE answers_photos_id_seq;
ALTER TABLE answers_photos
ALTER id
SET DEFAULT NEXTVAL('answers_photos_id_seq');
SELECT SETVAL('answers_photos_id_seq', (SELECT MAX(id) FROM answers_photos));

CREATE INDEX product_id_index
ON questions(product_id);

CREATE INDEX question_id_index
ON answers(question_id);

CREATE INDEX answer_id_index
ON answers_photos(answer_id);
