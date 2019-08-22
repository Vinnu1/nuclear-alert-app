/*
IMPORTANT

Put this file in this directory after installing react-native-onesignal:
node_modules\react-native-onesignal\android\src\main\java\com\geektime\rnonesignalandroid
*/

//This will override the notification and start MainActivity class

/*
I don't know much about JAVA, this class is basically modified scrapped code from stackoverflow
and docs to fulfill my purpose due to lack of time. If you're using this, please consider optimizing
the code. 
*/
package com.geektime.rnonesignalandroid;

import com.onesignal.OSNotificationPayload;
import android.content.Intent;
import com.onesignal.NotificationExtenderService;
import com.onesignal.OSNotificationReceivedResult;
import android.util.Log;
import android.database.sqlite.SQLiteDatabase;
import com.facebook.react.modules.storage.ReactDatabaseSupplier;
import com.facebook.react.modules.storage.AsyncLocalStorageUtil;
import java.lang.*;


public class OverrideAlert extends NotificationExtenderService {

   private static final String TAG = "OverrideAlert";
   @Override
   protected boolean onNotificationProcessing(OSNotificationReceivedResult receivedResult) {
 
String countryRecieved = receivedResult.payload.title;
String activityToStart = "com.nuclearalertapp.MainActivity";

//getDB
SQLiteDatabase readableDatabase = null;

//for every country
String country = "";
readableDatabase = ReactDatabaseSupplier.getInstance(this.getApplicationContext()).getReadableDatabase();
if (readableDatabase != null) {
   String impl = AsyncLocalStorageUtil.getItemImpl(readableDatabase, "country");
   country = impl.replaceAll("\"", "");
}

if(!country.equals("") && !country.equals(countryRecieved)){
   System.exit(0);
}

try {
    Class<?> c = Class.forName(activityToStart);
    Intent intent = new Intent(this, c);
    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    intent.putExtra("data", countryRecieved);
    startActivity(intent);
} catch (ClassNotFoundException ignored) {
}
      // Return true to stop the notification from displaying.
      return true;
   }
}
