export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'Tg92YxmXpndN19rRIRkzRwvRCJ82',
        username: 'wanda',
        fullName: 'Wanda Vision',
        emailAddress: 'wandavision@gmail.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'batgirl',
        fullName: 'Barbara',
        emailAddress: 'batgirl@gmail.com',
        following: [],
        followers: ['Tg92YxmXpndN19rRIRkzRwvRCJ82'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'raider',
        fullName: 'Tomb Raider',
        emailAddress: 'Raider@gmail.com',
        following: [],
        followers: ['Tg92YxmXpndN19rRIRkzRwvRCJ82'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'wolverine',
        fullName: 'Logan X',
        emailAddress: 'wolverine@gmail.com',
        following: [],
        followers: ['Tg92YxmXpndN19rRIRkzRwvRCJ82'],
        dateCreated: Date.now()
      }
    ];
  
   
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/batgirl/${i}.jpg`,
          caption: 'i dont hate pain ,i hate the static version of it',
          likes: [],
          comments: [
            {
              displayName: 'raider',
              comment: 'most of me is always in love with the idea of death as i dont belong here'
            },
            {
              displayName: 'wolverine',
              comment: 'pain makes you stronger but not the static pain'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }