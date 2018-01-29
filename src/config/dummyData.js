import Survey from '../models/survey';
import User from '../models/user';


const survey = {
  "_id": "7eabe468-9c66-494c-9d72-650f8526a671",
  "__v": 0,
  "name": "Developer survey",
  "description": "Survey representing developer occupation, experience and projects",
  "questions": [
    {
      "_id": "d557d5a5-9731-40b0-ad6a-393a542e0854",
      "title": "What industry are you working in?",
      "type": 3,
      "answers": [
        {
          "answerText": "Software",
          "_id": "23392ce9-f4cb-4c9d-a47f-f90ff2737aab"
        },
        {
          "answerText": "Finances",
          "_id": "551ce648-81f2-4e4e-9f52-b5492450f018"
        },
        {
          "answerText": "Public sector",
          "_id": "b92e54fb-f429-4a30-944b-c737fe1929ce"
        },
        {
          "answerText": "Finances",
          "_id": "3081dfa1-0f24-4bc3-a1e8-ccdb6ca82b87"
        },
        {
          "answerText": "Consulting",
          "_id": "aecb12b2-cb8b-4ec0-ba09-e865ba72ed73"
        },
        {
          "answerText": "Software",
          "_id": "973fce65-fc6b-4266-b36e-4c7208b5d615"
        },
        {
          "_id": "8214d0b9-073e-42c5-828e-32fc5a27c5f2",
          "answerText": "Finances"
        },
        {
          "_id": "b51a18b7-4620-4f2d-b55b-6b515f273dd5",
          "answerText": "Advetising"
        },
        {
          "_id": "268ef56d-7b3a-46dc-b4fc-afd6e0b62fc0",
          "answerText": "Consulting"
        }
      ],
      "answerOptions": [
        {
          "_id": "6472e469-abd0-4acc-a014-6304da75935b",
          "title": "Software"
        },
        {
          "_id": "8f43b216-4cb5-4053-996e-8b5702137347",
          "title": "Finances"
        },
        {
          "_id": "f5d49b8d-0a8c-4102-aab3-0f7927f07cdb",
          "title": "Advetising"
        },
        {
          "_id": "c384d072-aadf-47cf-bab9-a8a9ad8308b8",
          "title": "Consulting"
        },
        {
          "_id": "9b431f41-ac7c-49aa-b408-eb98fbb06b3a",
          "title": "Public sector"
        }
      ]
    },
    {
      "type": 1,
      "title": "Project description you are currently working with",
      "_id": "ff4f18bb-d044-4b31-9a81-5a8d0e7c4686",
      "answers": [
        {
          "answerText": "Developing Gamut e-commerce platform for US market",
          "_id": "8f95c37d-09a4-4f02-b5ad-bce4ef0d3ddf"
        },
        {
          "answerText": "Creating NASA Shuttle AI navigation module",
          "_id": "f0a1d356-749c-4486-9bb2-61be9bbf3945"
        },
        {
          "answerText": "Developing E-voting platform for Estonian goverment",
          "_id": "79aa9546-5744-4831-a4cc-f005a77a870a"
        },
        {
          "answerText": "Working with bitcoin services integration for a local bank unit",
          "_id": "a40b716e-cf32-4ff3-8bee-3f35991d34af"
        },
        {
          "answerText": "Consulting private sector on how to scale their e-commerce platform",
          "_id": "9faaa965-1ff8-46ec-801b-bfd5917a2606"
        },
        {
          "answerText": "Cannot share due to confidentiality reasons",
          "_id": "e64b071e-17a5-450f-a5c3-e618e4eff2b9"
        },
        {
          "_id": "acd5a3d7-6b1c-4407-8042-010dbad83277",
          "answerText": "Working on stock-exchange banking services integration"
        },
        {
          "_id": "b97bb3fa-34f7-4896-bf7f-6d0a2b1491cb",
          "answerText": "Working with development of small brand related web sites"
        },
        {
          "_id": "3bb29633-4645-487c-b064-dda8f201438d",
          "answerText": "Working with governmental institutions as a internet security based contractor"
        }
      ],
      "answerOptions": []
    },
    {
      "_id": "b8272637-a531-487e-98b3-5ea5d4d5c918",
      "title": "What is your education?",
      "type": 3,
      "answers": [
        {
          "answerText": "Masters's degree",
          "_id": "06509d11-9334-4282-b986-a76642a48321"
        },
        {
          "answerText": "Doctoral degree",
          "_id": "cbab4bd3-44c4-42fd-9d0c-efcd7fc7110a"
        },
        {
          "answerText": "Masters's degree",
          "_id": "78a88d5e-f4e5-4159-88f1-0e71c9720bb9"
        },
        {
          "answerText": "Bachelour's degree",
          "_id": "9b0057f7-a974-460c-bcc8-f7b51b5f5b77"
        },
        {
          "answerText": "Masters's degree",
          "_id": "a52d4107-84b1-439e-8245-b49674ea293a"
        },
        {
          "answerText": "College",
          "_id": "5cde5123-f4bd-4bde-81d0-f6e88d3f214b"
        },
        {
          "_id": "917a3c8e-d988-44c5-aab4-c4c063922a19",
          "answerText": "College"
        },
        {
          "_id": "4e12d7f1-0d4e-4581-b463-e5f5a4409366",
          "answerText": "School"
        },
        {
          "_id": "fd37a53b-fdeb-4c6a-b0c4-32acb2820ec9",
          "answerText": "Masters's degree"
        }
      ],
      "answerOptions": [
        {
          "_id": "a2053879-5ae8-4614-958b-7d2f959c84ff",
          "title": "School"
        },
        {
          "_id": "0124c5a8-a8c0-4989-b5be-9058d534b220",
          "title": "College"
        },
        {
          "_id": "97ab066c-53ee-487a-8f9d-140bf9e9e2b5",
          "title": "Bachelour's degree"
        },
        {
          "_id": "097bad4a-1af0-4105-8104-965fa59f0865",
          "title": "Masters's degree"
        },
        {
          "_id": "a9810ab6-eeb6-499f-bda5-f23d6737ab22",
          "title": "Doctoral degree"
        }
      ]
    },
    {
      "type": 1,
      "title": "What are areas of interest you would like to work with?",
      "_id": "8891ebbc-2a97-496a-848b-fb119fd2f59d",
      "answers": [
        {
          "answerText": "Would like to work with startups based on social responsibilities",
          "_id": "229b9b03-4078-4fb8-94b0-08a778de52d1"
        },
        {
          "answerText": "Work with AI projects in open source community ",
          "_id": "ec71cffb-23c7-49c2-ac3d-dafa10f3363f"
        },
        {
          "answerText": "Would like to work on open source projects related with big data",
          "_id": "92808c9f-9754-4060-83a0-d6971d173ed9"
        },
        {
          "answerText": "Work with React.js based front-end on progressive web apps",
          "_id": "63fede48-a773-473e-8563-831791ce9f9f"
        },
        {
          "answerText": "Consult private and public sector on developing SaaS applications",
          "_id": "e94b9548-68f1-4c88-bc71-22d6465ee004"
        },
        {
          "answerText": "Would like to develop iOS applications for game companies ",
          "_id": "edc33467-319d-40b4-8190-7d63254ff691"
        },
        {
          "_id": "90a6eaf7-5cc9-4f60-a6bb-61f6cecac06d",
          "answerText": "Would like to further work with financial services"
        },
        {
          "_id": "82ad20db-b7d5-4462-85ec-bd50c17329ae",
          "answerText": "Would like to work with small entertainment based web and app development"
        },
        {
          "_id": "8e313ff8-d042-4992-a367-c81e9cc7c3f1",
          "answerText": "Don't have any preferences"
        }
      ],
      "answerOptions": []
    },
    {
      "_id": "4eda9151-53c3-437b-97aa-d76c628afcbb",
      "title": "What is your employment status?",
      "type": 3,
      "answers": [
        {
          "answerText": "Full-time",
          "_id": "920fff0e-5d44-4af6-a43f-69c80d3c8980"
        },
        {
          "answerText": "Part-time",
          "_id": "215585fb-1e4b-4ac9-861c-a04f8e4d9d65"
        },
        {
          "answerText": "Contractor",
          "_id": "ecdad6e8-4ba4-45bb-bcb3-fd2db7d4c448"
        },
        {
          "answerText": "Full-time",
          "_id": "ee308947-670c-4026-b0cf-2e7f00bfdf69"
        },
        {
          "answerText": "Contractor",
          "_id": "f3d5fb9a-031a-421d-80ff-8f6611b9fa36"
        },
        {
          "answerText": "Full-time",
          "_id": "15064fc1-fcde-469e-a15c-fe997e0fc4ad"
        },
        {
          "_id": "e07db647-3eb5-4849-b253-58d50938638e",
          "answerText": "Full-time"
        },
        {
          "_id": "5c9a3f0d-f3cf-4329-9c71-8877a83f7e86",
          "answerText": "Not employed"
        },
        {
          "_id": "d94ef854-a9cd-4f8c-9928-57ff964f11b3",
          "answerText": "Contractor"
        }
      ],
      "answerOptions": [
        {
          "_id": "a0c246d6-6934-4156-96bb-d166fd97159e",
          "title": "Full-time"
        },
        {
          "_id": "1038b73e-e073-4822-94f6-a07ad5fa7acf",
          "title": "Part-time"
        },
        {
          "_id": "86b627e2-eae3-4d98-b2f2-aecf0e46a379",
          "title": "Contractor"
        },
        {
          "_id": "14559966-3b8b-4c14-acfe-a156cd1e4710",
          "title": "Not employed"
        },
        {
          "title": "Retired",
          "_id": "ad4219b4-e1ad-412d-97bd-9ef1caab49e3"
        }
      ]
    }
  ],
  "userId": "6d96dd50-d8c5-11e7-af12-137c45c9ba6d"
};

const user = {
  "_id" : "6d96dd50-d8c5-11e7-af12-137c45c9ba6d",
  "email" : "demo@demo.com",
  "password" : "demo",
  "__v" : 0
};

const init = async () => {
  try {
    const count = await Survey.count();

    if (count > 0) {
      return;
    }

    await Survey.create(survey);
    await User.create(user);

    console.log('Dummy data added successfully');

  } catch (error) {
    console.log('error', error);
  }
};


export default {
  survey,
  user,
  init
}
