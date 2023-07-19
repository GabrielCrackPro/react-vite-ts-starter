# React + Vite + TS Template

Start your next project easily

## Features

### Import aliases support

Default aliases:

- <code>@ -> src/</code>
- <code>@components -> src/components</code> - Custom components
- <code>@assets -> src/assets</code> - App assests
- <code>@routes -> src/routes</code> - App routes

### Packages

The following packages / files are included

- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [EsLint](https://eslint.org/)
- [typescript-eslint](https://typescript-eslint.io/)
- [react-router v6](https://reactrouter.com/en/main)
- A preconfigured
  [.eslintrc](https://github.com/GabrielCrackPro/react-vite-ts-starter/blob/main/.eslintrc.cjs)
  file

## Install

Clone this repository

```
npx degit GabrielCrackPro/react-vite-ts-starter <app_name>
```

Run this command in the root directory

- Install with npm

```
mpm install
```

- Install with yarn

```
yarn
```

## Available commands

- Start your project: <code>yarn dev</code> or <code>npm run dev</code>
- Show all eslint problems <code>yarn lint</code> or <code>npm run lint</code>
- Fix eslint problems <code>yarn lint:fix</code> or <code>npm run
  lint:fix</code>

For other commands see the
[package.json](https://github.com/GabrielCrackPro/react-vite-ts-starter/blob/main/package.json)
file

## Add more import aliases

1. Go to the
   [tsconfig.json](https://github.com/GabrielCrackPro/react-vite-ts-starter/blob/main/tsconfig.json)
   file and add this

```jsonc
"paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@assets/*": ["./src/assets/*"],
      "@routes/*": ["./src/routes/*"],
      // "@example/*": ["./src/example/*"] Alias example
    }
```

2. Go to the
   [vite.config.ts](https://github.com/GabrielCrackPro/react-vite-ts-starter/blob/main/vite.config.ts)
   file and add this

```ts
plugins: [
react(),
alias({
  entries: [
    { find: "@", replacement: path.resolve(__dirname, "src") },
    { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
    { find: "@components", replacement: path.resolve(__dirname, "src/components") },
    { find: "@routes", replacement: path.resolve(__dirname, "src/routes") },
    /*
    Alias example:
    { find: "@example", replacement: path.resolve(__dirname, "src/example") },
    */
  ],
});
]
```
