import Foundation
import AVFoundation

@objc public class PlayAudioFromUrl: NSObject {
    var player: AVPlayer?
    var playerItem: AVPlayerItem?
    var playPromise: ((Result<Bool, Error>) -> Void)?

    @objc public func play(_ url: String, completion: @escaping (Bool, Error?) -> Void) {
        print("PlayAudioFromUrl.swift play: \(url)")
        guard let audioUrl = URL(string: url) else {
            completion(false, NSError(domain: "", code: -1, userInfo: [NSLocalizedDescriptionKey: "Invalid URL"]))
            return
        }

        playerItem = AVPlayerItem(url: audioUrl)
        player = AVPlayer(playerItem: playerItem)

        // Observe the status property of AVPlayerItem
        playerItem?.addObserver(self, forKeyPath: "status", options: [.new, .initial], context: nil)

        self.playPromise = { result in
            switch result {
            case .success(let success):
                completion(success, nil)
            case .failure(let error):
                completion(false, error)
            }
        }
    }

    // Observe Value Changes
    override public func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey : Any]?, context: UnsafeMutableRawPointer?) {
        if keyPath == "status" {
            switch playerItem?.status {
            case .readyToPlay:
                print("AVPlayerItem is ready to play.")
                player?.play()
                print("play succeeded")
                playPromise?(.success(true))
            case .failed:
                print("AVPlayerItem failed to load.")
                let error = NSError(domain: "", code: -1, userInfo: [NSLocalizedDescriptionKey: "Failed to load"])
                playPromise?(.failure(error))
            case .unknown:
                print("AVPlayerItem status is unknown.")
            case .none:
                break
            @unknown default:
                print("Unknown status.")
            }
        }
    }
}