import { registerPlugin } from '@capacitor/core';

import type { PlayAudioFromUrlPlugin } from './definitions';
import { PlayAudioFromUrlWeb } from './web';

const PlayAudioFromUrl = registerPlugin<PlayAudioFromUrlPlugin>(
  'PlayAudioFromUrl',
  {
    // Cannot use dynamic import here because the mobile browsers disallow then playing the audio.
    web: () => new PlayAudioFromUrlWeb(),
  },
);

export * from './definitions';
export { PlayAudioFromUrl };
