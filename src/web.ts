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
        if (!audioFileName) return;
        const audio = new Audio();
        audio.addEventListener('canplaythrough', () => {
            audio.play();
        });
        audio.src = options.url;

        return new Promise((resolve, reject) => {
            audio.onended = () => {
                resolve();
            }
            audio.onerror = (error) => {
                reject(error);
            }
        });
    }
}
