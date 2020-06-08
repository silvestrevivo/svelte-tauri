# svelte-tauri

This is a project template for [Svelte](https://svelte.dev) apps mounted in Tauri and based on [Svelte-HMR](https://github.com/rixo/svelte-template-hot). It lives at https://github.com/silvestrevivo/svelte-tauri

To create a new project based on this template, ensure you have **RUST** and **CARGO** installed locally. Then download or clone the repo and intall the **cargo tauri blunder**:

```bash
cargo install tauri-bundler
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies...

```bash
cd svelte-tauri
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
tauri dev
```

Navigate to [localhost:8000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build && tauri build
```
