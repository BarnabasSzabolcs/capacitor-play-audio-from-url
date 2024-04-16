export interface PlayAudioFromUrlPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  play(options: PlayOptions): Promise<void>;
}

export interface PlayOptions {
  url: string;
}
