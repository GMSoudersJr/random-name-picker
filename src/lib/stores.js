import { writable } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';

export const arrayOfNames = writable([]);

export const currentName = writable('');

export const stringOfNames = writable('');

export const numberOfNames = writable(0);

export const numberOfNamesDrawn = writable(0);

export const progress = tweened(0, {
	duration: 400,
	easing: cubicOut
});
