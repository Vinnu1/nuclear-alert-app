## Nuclear Alert App  

A react native app which plays your_alert_song and show reminders(kind of your last todos/wishes), when a nuclear alert(background push notification) comes from OneSignal platform. It is currently coded considering android only.

# Screenshots

![Settings Screen](https://imgur.com/B2bOcnd) ![Alert Screen](https://imgur.com/Z4PfatX)

# Steps

* Install node modules: `npm install`

* Create a folder 'raw' at `android/app/src/main/res/` , add the music you want to play at the alert screen and rename it to 'song.mp3'.

* Create and add your OneSignal ID in App.js

* Cut/Copy OverrideAlert.java file from override_alert_class folder and place it inside this directory: `node_modules\react-native-onesignal\android\src\main\java\com\geektime\rnonesignalandroid`

* Install app: `react-native run-android`


