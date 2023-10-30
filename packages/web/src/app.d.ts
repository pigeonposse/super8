// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	declare const MAIN_PKG: typeof import('../../../package.json');
	declare const PKG: typeof import('../package.json');
}

export {};
