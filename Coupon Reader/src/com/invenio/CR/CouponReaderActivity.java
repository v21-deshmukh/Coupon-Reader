package com.invenio.CR;
import com.invenio.CR.R;
import org.apache.cordova.Config;
import org.apache.cordova.DroidGap;
import android.os.Bundle;

public class CouponReaderActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.setIntegerProperty("splashscreen", R.drawable.abp);
        super.loadUrl(Config.getStartUrl(), 5000);
        super.loadUrl("file:///android_asset/www/index.html");
    }
}
