# HRNext

## Description

HRNext is an internal web application of the fake society WealthHealth which allows you to manage employee.

Coded with NextJs, and store data in Redux.
Test with Jest.

### Demo

<https://hrnext.vercel.app/>

## Getting Started

### Dependencies

**dependencies**

- @reduxjs/toolkit: ^1.8.5
- next: 12.3.1
- plaid-components: ^1.1.2
- react: 18.2.0
- react-dom: 18.2.0
- react-redux: ^8.0.4
- sass: ^1.55.0

**devDependencies**

- @testing-library/jest-dom: ^5.16.5
- @testing-library/react: ^13.4.0
- @types/node: 18.7.23
- @types/react: 18.0.21
- @types/react-dom: 18.0.6
- eslint: 8.24.0
- eslint-config-next: 12.3.1
- jest: ^29.1.1
- jest-environment-jsdom: ^29.1.1
- typescript: 4.8.3

You need **NodeJs and PNPM**

This app uses plaid-components, you can find more information on : <https://www.npmjs.com/package/plaid-components>

### Installing

1. **Clone this repo** with the command

```
git clone https://github.com/valent1618/HRNext.git
```

2. **Install** all the dependencies with **PNPM**

```
pnpm install
```

## RUN

In the project directory, you can run:

### `pnpm dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `pnpm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `pnpm run start`

Runs the app in the production mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `pnpm test`

Launches the test runner in the interactive watch mode.\
