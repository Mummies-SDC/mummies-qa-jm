import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/questions', { useNewUrlParser: true });

const questionSchema = new Schema({
  id: { type: Number, index: true, unique: true },
  product_id: { type: Number },
  asker_name: { type: String },
  asker_email: { type: String },
  body: { type: String },
  date_written: { type: Date },
  helpfulness: { type: Number, default: 0 },
  reported: { type: Boolean, default: 0 },
  answers: {
    type: Schema.Types.ObjectId,
    ref: 'Answer',
  },
});

const Question = mongoose.model('Question', questionSchema);

const answerSchema = new Schema({
  id: { type: Number, index: true, unique: true },
  answerer_name: { type: String },
  answerer_email: { type: String },
  body: { type: String },
  helpulness: { type: Number, default: 0 },
  reported: { type: Boolean, default: false },
  photos: {
    type: Schema.Types.ObjectId,
    ref: 'Photo',
  },
});

const Answer = mongoose.model('Answer', answerSchema);

const photoSchema = new Schema({
  id: { type: Number, index: true, unique: true },
  url: { type: String },
});

const Photo = mongoose.model('Photo', photoSchema);
