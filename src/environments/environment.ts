// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  /*
  const firebaseConfig = {
    apiKey: "AIzaSyA7LWOySd9IcIo2n5lzOyN3mQ-dQLKRWC8",
    authDomain: "news-app-28ba3.firebaseapp.com",
    databaseURL: "https://news-app-28ba3.firebaseio.com",
    projectId: "news-app-28ba3",
    storageBucket: "news-app-28ba3.appspot.com",
    messagingSenderId: "723224809935",
    appId: "1:723224809935:web:801359de6b356c4a7582ba",
    measurementId: "G-EWY9JMD6DE"
  };
  */
  url : 'https://identitytoolkit.googleapis.com/v1/accounts:',
  apiKey: 'AIzaSyA7LWOySd9IcIo2n5lzOyN3mQ-dQLKRWC8',
  urlNews: 'https://newsapi.org/v2/top-headlines?',
  apikeyNews: '90c1281cdc624318a5411c01e7a22e1c'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
