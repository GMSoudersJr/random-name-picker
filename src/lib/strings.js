import { thisYear } from '$lib/utils.js';

export const STRINGS = {
	appTitle: "Random Name Picker",
	textarea: {
		label: "Enter one name per line",
		placeholder: "Alex\nJordan\nSam\n...",
	},
	buttonText: {
		clearNames: "Clear Names 🗑",
		setList: "Set List 📋",
		resetList: "Reset List 🔄",
		reloadList: "Reload the list 🔁",
		listFinished: "All Done!",
		chooseName: "CLICK FOR A RANDOM NAME! 📛",
	},
	exhaustedList: 'The list is finished.  Click "Reload the list" to start over.',
	copyright: `© ${thisYear()} by Gerald M. Souders Jr.`
};
