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

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }

    @PluginMethod()
    public void play(PluginCall call) {
        String url = call.getString("url");
        Log.i("PlayAudioFromUrl", url);
        if (url == null) {
            call.reject("Must provide a URL");
            return;
        }

        try {
            mediaPlayer.setDataSource(this.bridge.getContext(), Uri.parse(url));
            mediaPlayer.prepareAsync();
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