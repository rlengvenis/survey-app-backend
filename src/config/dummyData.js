import Survey from '../models/survey';

export default () => {
  Survey.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const data = {
      name: 'Apklausa',
      description: 'Apie save patį',
      questions: [{
        title: 'Kokia mano lytis?',
        type: 1,
        options: []
      }, {
        title: 'Kiek man metų?',
        type: 3,
        answerOptions: [{
          title: '2 metai'
        }, {
          title: '3 metai'
        }],
        answers: [{
          answerText: 'Vyras'
        }]
      }]
    };

    Survey.create(data, (error) => {
      console.log('error', error);
      if (!error) {
        console.log('ready to go....');
      }
    });
  });
}
