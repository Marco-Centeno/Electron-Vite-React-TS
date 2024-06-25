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
   git clone https://github.com/Marco-Centeno/Electron-Vite-React-TS.git
   

2. Install the dependencies

   ```sh
    npm install

## How to use

- Test in a development mode

  Use the command
   ```sh
   npm run dev
   ```
  For runing the programm in a developnet mode non-production

  
  
- Build Project
  
  `You can add other command of Electron-Builder before the command of build`
  - Building for different OS
     - Windows
       ```sh
       npm run build:win
       ```

      - Mac
         ```sh
         npm run build:mac
         ```

      - Linux
         ```sh
         npm run build:lin
         ```

![Imagen no encontrada](https://user-images.githubusercontent.com/46914545/159979537-7116a826-212c-45f4-a393-4abeabeabd07.jpg)
