# How to create this project

Use `npx create-react-app ./ --template typescript`
Add web3 dependencies 
```js
npm install ethers @web3-react/core
//npm install @web3-react/core@8.0.22-beta.0 // 它原本裝 6.X 但不支援 initializeConnector
//錢包整合 https://docs.cloud.coinbase.com/wallet-sdk/docs/web3-react
//要裝的就是
npm install @web3-react/walletlink-connector // Coinbase Wallet(web3-react v6仍使用舊名, 目前v6是正式版)
npm install @web3-react/walletconnect-connector // Wallet Connect
npm install @web3-react/injected-connector // Injected (e.g. Metamask)
//參考 https://dev.to/yakult/how-to-use-web3-react-to-develop-dapp-1cgn
```
Add bootstrape
```js
npm install react-bootstrap bootstrap
//參考一下用法: https://react-bootstrap.github.io/getting-started/introduction
//使用時只載入要用的元件
import { Button } from 'react-bootstrap';
//因 React-Bootstrap 沒特定依賴某個 Bootstrap 版本, 故並無包含 CSS, 需要自行新增
{/* The following line can be included in your src/index.js or App.js file*/}
import 'bootstrap/dist/css/bootstrap.min.css';
//若想要更多風格安裝 Bootswatch 並替換上面的 css
//import "bootswatch/dist/[theme]/bootstrap.min.css"; 這裡的 theme 換成想要的風格
import "bootswatch/dist/cyborg/bootstrap.min.css";
// dropdown list => https://www.pluralsight.com/guides/how-to-capture-the-value-of-dropdown-lists-with-react-bootstrap
```
Support process.env usage
```js
//https://stackoverflow.com/questions/49579028/adding-an-env-file-to-react-project
// because we use create-react-app, only need to create a .env and add it to .gitignore
// 但記住變數需以 REACT_APP_ 開頭才行

```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
