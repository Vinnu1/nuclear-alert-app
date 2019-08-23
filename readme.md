## Nuclear Alert App  

A react native app which plays your_alert_song and show reminders(kind of your last todos/wishes), when a nuclear alert(background push notification) comes from OneSignal platform. It is currently coded considering android only.

# Steps

* Install node modules: `code(npm install)`

* Create a folder 'raw' at `code(android/app/src/main/res/)` , add the music you want to play at the alert screen and rename it to 'song.mp3'.

* Create and add your OneSignal ID in App.js

* Cut/Copy OverrideAlert.java file from override_alert_class folder and place it inside this directory: `code(node_modules\react-native-onesignal\android\src\main\java\com\geektime\rnonesignalandroid)`

* Install app: `code(react-native run-android)`


