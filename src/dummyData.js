import Survey from './models/survey';

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
        optionIds: []
      }, {
        title: 'Kiek man metų?',
        type: 3,
        options: [{
          title: '2 metai'
        }, {
          title: '3 metai'
        }],
        answer: {
          text: 'Vyras'
        }
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
