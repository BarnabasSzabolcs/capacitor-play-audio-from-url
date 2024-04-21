package com.pplninja.plugins.capacitorplayaudiofromurl;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "PlayAudioFromUrl")
public class PlayAudioFromUrlPlugin extends Plugin {

    private PlayAudioFromUrl implementation = new PlayAudioFromUrl();

    @PluginMethod
    public void play(PluginCall call) {
        implementation.play(call);
    }
}
