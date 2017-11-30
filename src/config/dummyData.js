import Survey from '../models/survey';
import User from '../models/user';

export default async () => {
  try {
    const count = await Survey.count();

    if (count > 0) {
      return;
    }

    const survey = {
      name: 'Test survey',
      description: 'Survey for test purposes',
      questions: [{
        title: 'What is your name?',
        type: 1,
        answerOptions: [],
        answers: [{
          answerText: 'Rokas'
        }]
      }, {
        title: 'Experience with react?',
        type: 3,
        answerOptions: [{
          title: '1 years'
        }, {
          title: '2 years'
        }, {
          title: '3 years'
        }],
        answers: [{
          answerText: '2 years'
        }]
      }],
      userId: '5691ecd0-d5aa-11e7-8331-037cdb37e4f2'
    };

    const user = {
      _id : '5691ecd0-d5aa-11e7-8331-037cdb37e4f2',
      email: 'test@test.com',
      password: 'test'
    };

    await Survey.create(survey);
    await User.create(user);

    console.log('Dummy data added successfully');

  } catch (error) {
    console.log('error', error);
  }
}
