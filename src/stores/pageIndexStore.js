import { writable } from 'svelte/store';

function isContentPage() {
    const { subscribe, set, update } = writable(false);

    return {
        subscribe,
        update: (newValue) => update((value) => {
            value = newValue;
            return value;
        })
    };
}

function isGiftPage() {
    const { subscribe, set, update } = writable(false);

    return {
        subscribe,
        update: (newValue) => update((value) => {
            value = newValue;
            return value;
        })
    };
}

function isVideoPage() {
    const { subscribe, set, update } = writable(false);

    return {
        subscribe,
        update: (newValue) => update((value) => {
            value = newValue;
            return value;
        })
    };
}

export const contentPageVisible = isContentPage();
export const giftPageVisible = isGiftPage();
export const videoPageVisible = isVideoPage();