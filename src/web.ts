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
        const audio = document.createElement('audio');
        audio.src = options.url;
        audio.autoplay = true;

        // Append the audio element to the body of the document
        document.body.appendChild(audio);

        return new Promise((resolve, reject) => {
            // Remove the audio element from the document when it finishes playing
            audio.onended = () => {
                document.body.removeChild(audio);
                resolve();
            }
            audio.onerror = (error) => {
                document.body.removeChild(audio);
                reject(error);
            }
        });
    }
}
