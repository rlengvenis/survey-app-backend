import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const survey = new Schema({
  name: {type: 'String', required: true},
  description: {type: 'String', required: true},
  questions: [
    {
      title: {type: 'String', required: true},
      type: {type: 'Number', required: true},
      options: [
        {
          title: {type: 'String', required: false}
        }
      ],
      answer: {
        type: {
          text: {type: 'String', required: true}
        },
        required: false
      }
    }
  ]
});

export default mongoose.model('Survey', survey);


