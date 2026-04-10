import { Tween } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';

class AppState {
	/** @type {string[]} */
	arrayOfNames = $state([]);
	/** @type {string} */
	currentName = $state('');
	/** @type {string} */
	stringOfNames = $state('');
	/** @type {number | null} */
	numberOfNames = $state(null);
	/** @type {number} */
	numberOfNamesDrawn = $state(0);
	progress = new Tween(0, { duration: 400, easing: cubicOut });
}

export const appState = new AppState();
