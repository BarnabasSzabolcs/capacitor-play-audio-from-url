export interface PlayAudioFromUrlPlugin {
  /**
    * Plays an audio file from a given URL.
    * In web mode, to avoid getting audio play rejected by mobile browsers when playing many audios,
    * the audio sources are cached in an LRU cache with 256 entries.
    * @param options - The options for playing the audio. Must include a `url` property with the URL of the audio file.
    * @returns A Promise that resolves when the audio finishes playing, or rejects if there was an error.
    */
  play(options: PlayOptions): Promise<void>;
}

export interface PlayOptions {
  url: string;
}
