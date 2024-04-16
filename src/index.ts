import { registerPlugin } from '@capacitor/core';

import type { PlayAudioFromUrlPlugin } from './definitions';

const PlayAudioFromUrl = registerPlugin<PlayAudioFromUrlPlugin>(
  'PlayAudioFromUrl',
  {
    web: () => import('./web').then(m => new m.PlayAudioFromUrlWeb()),
  },
);

export * from './definitions';
export { PlayAudioFromUrl };
