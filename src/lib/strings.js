import { thisYear } from '$lib/utils.js';

export const STRINGS = {
	appTitle: 'RANDOM NAME PICKER',
	textarea: {
		label: '📝 Names ⬇',
		placeholder: 'ENTER NAMES HERE'
	},
	buttonText: {
		clearNames: 'CLEAR NAMES',
		setList: 'SET LIST',
		refreshList: 'REFRESH LIST',
		reloadList: 'REPEAT LIST',
		listFinished: 'All Done!',
		chooseName: 'CLICK FOR A RANDOM NAME!'
	},
	exhaustedList: 'The list is finished.  Click "REPEAT LIST" to start over.',
	copyright: `© ${thisYear()} by Gerald M. Souders Jr.`
};
