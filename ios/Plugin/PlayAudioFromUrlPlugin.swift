import Foundation
import Capacitor
import AVFoundation

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(PlayAudioFromUrlPlugin)
public class PlayAudioFromUrlPlugin: CAPPlugin {
    private let implementation = PlayAudioFromUrl()

    @objc func play(_ call: CAPPluginCall) {
        let url = call.getString("url") ?? ""
        print("PlayAudioFromUrlPlugin.swift play: \(url)")
        implementation.play(url) { success, error in
            if success {
                call.resolve()
            } else {
                call.reject("play_error", error?.localizedDescription, error)
            }
        }
    }

//     @objc override public func checkPermissions(_ call: CAPPluginCall) {
//         // TODO
//     }
//
//     @objc override public func requestPermissions(_ call: CAPPluginCall) {
//         // TODO
//     }
}
