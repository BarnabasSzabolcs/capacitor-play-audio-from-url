import {WebPlugin} from '@capacitor/core';

import type {PlayAudioFromUrlPlugin, PlayOptions} from './definitions';

export class PlayAudioFromUrlWeb
    extends WebPlugin
    implements PlayAudioFromUrlPlugin {
    async echo(options: { value: string }): Promise<{ value: string }> {
        console.log('ECHO', options);
        return options;
    }

    async play(options: PlayOptions): Promise<void> {
        console.log('play', options);

        const audioFileName = options.url.split('/').pop();
        if (!audioFileName) return Promise.reject();
        const audio = new Audio(options.url);
        return audio.play();
    }
}
