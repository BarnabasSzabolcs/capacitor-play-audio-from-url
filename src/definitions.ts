export interface PlayAudioFromUrlPlugin {
  play(options: PlayOptions): Promise<void>;
}

export interface PlayOptions {
  url: string;
}
