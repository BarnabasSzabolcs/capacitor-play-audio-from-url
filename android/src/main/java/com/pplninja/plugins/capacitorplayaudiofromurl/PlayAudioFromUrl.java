package com.pplninja.plugins.capacitorplayaudiofromurl;

import android.media.MediaPlayer;
import android.net.Uri;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import android.util.Log;
import java.io.IOException;

public class PlayAudioFromUrl extends Plugin {
    private MediaPlayer mediaPlayer = new MediaPlayer();

    @PluginMethod()
    public void play(PluginCall call) {
        String url = call.getString("url");
        Log.i("PlayAudioFromUrl", url);
        if (url == null) {
            call.reject("Must provide a URL");
            return;
        }

        try {
            mediaPlayer.reset(); // Reset the MediaPlayer to its uninitialized state
            mediaPlayer.setDataSource(url);
            mediaPlayer.prepareAsync(); // Prepare the MediaPlayer asynchronously
            mediaPlayer.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
                @Override
                public void onPrepared(MediaPlayer mp) {
                    mp.start();
                    call.resolve();
                }
            });
        } catch (IOException e) {
            call.reject("Error playing audio", e);
        }
    }
}