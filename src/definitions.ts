export interface PlayAudioFromUrlPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
