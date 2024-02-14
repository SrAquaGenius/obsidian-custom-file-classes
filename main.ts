import { Notice, Plugin } from 'obsidian';

export default class CustomFileClass extends Plugin {

	async onload(): Promise<void>
	{
		console.log("---------- Custom File Classes Obsidian loading ----------");
		
		if (!this.app.plugins.enabledPlugins.has("dataview") || (
			//@ts-ignore
			this.app.plugins.plugins["dataview"] && !this.app.plugins.plugins["dataview"].settings.enableDataviewJs)
		) {
			new Notice(
				`------------------------------------------\n` +
				`(!) INFO (!) \n` +
				`Install and enable dataview and dataviewJS for extra Metadata Menu features\n` +
				`------------------------------------------`, 60000)
		}
	}

	/*
	------------
	Settings
	------------
	*/

	async loadSettings() {};

	async saveSettings() {};

	onunload() {};
}
