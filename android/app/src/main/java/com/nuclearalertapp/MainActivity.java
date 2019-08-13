package com.nuclearalertapp;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import android.os.Bundle;
import java.util.*;
import android.content.Intent;
import android.view.WindowManager; 

public class MainActivity extends ReactActivity {
  
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
     
      return "nuclearAlertApp";
    }
    @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    
    return new ReactActivityDelegate(this, getMainComponentName()) {
      
      @Override
      protected Bundle getLaunchOptions() {
        Intent intent = getIntent();
        Bundle extras = intent.getExtras();
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED
        | WindowManager.LayoutParams.FLAG_DISMISS_KEYGUARD
        | WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON
        | WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON);  
        return extras;
      }
    };
}
}


      
      
