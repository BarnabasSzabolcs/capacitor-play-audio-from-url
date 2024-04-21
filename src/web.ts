import {WebPlugin} from '@capacitor/core';

import type {PlayAudioFromUrlPlugin, PlayOptions} from './definitions';

export class PlayAudioFromUrlWeb
    extends WebPlugin
    implements PlayAudioFromUrlPlugin {
    private audioCache = new AudioCache();

    async play(options: PlayOptions): Promise<void> {
        console.log('play', options);

        const audioFileName = options.url.split('/').pop();
        if (!audioFileName) return Promise.reject();
        const audio = this.audioCache.getAudio(options.url);
        return audio.play();
    }
}

/**
 * AudioCache is a class that caches audio objects
 * It is an LRU cache with 256 entries.
 * It is used to help avoid getting audio play rejected by mobile browsers when playing many audios.
 */
class AudioCache {
    private maxEntries = 256;
    private cache: { [url: string]: HTMLAudioElement } = {};
    private keys: string[] = [];

    /**
     * Retrieves an audio object from the cache.
     * If the audio object is not in the cache, it is created, added to the cache, and then returned.
     * If the cache is full, the oldest entry is removed before a new entry is added.
     * @param url - The URL of the audio file.
     * @returns The audio object.
     */
    getAudio(url: string): HTMLAudioElement {
        // If the audio is already in the cache, return it
        if (this.cache[url]) {
            return this.cache[url];
        }

        // If the cache is full, remove the oldest entry
        if (this.keys.length >= this.maxEntries) {
            const oldestKey = this.keys.shift();
            if (oldestKey) {
                delete this.cache[oldestKey];
            }
        }

        // Create a new Audio object, store it in the cache, and return it
        const audio = new Audio(url);
        this.cache[url] = audio;
        this.keys.push(url);
        return audio;
    }
}
