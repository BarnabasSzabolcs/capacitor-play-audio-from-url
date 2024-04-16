import { WebPlugin } from '@capacitor/core';

import type { PlayAudioFromUrlPlugin } from './definitions';

export class PlayAudioFromUrlWeb
  extends WebPlugin
  implements PlayAudioFromUrlPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
