![Imagen no encontrada](https://user-images.githubusercontent.com/46914545/159979537-7116a826-212c-45f4-a393-4abeabeabd07.jpg)

# Electron-Vite-React-TS
This is a template for creating cross-platform desktop applications (Windows, macOS, and Linux) using Electron, Vite, React, and TypeScript. This project allows transforming React web applications into desktop applications while maintaining compatibility with all React libraries and frameworks.


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


## Requirements

- Node.js (v21.5.0 or higher)
- npm ( v10.8.1 or higher)

## Installation

1. Clone the repository:

   ```sh
   `git clone https://github.com/Marco-Centeno/Electron-Vite-React-TS.git`
   
   `cd Electron-Vite-React-TS`

2. Install the dependencies

   ```sh
    `npm install`

## How to use

You can use this as a common React-Vite development like `npm run dev` etc.

![Imagen no encontrada](https://user-images.githubusercontent.com/46914545/159979537-7116a826-212c-45f4-a393-4abeabeabd07.jpg)
