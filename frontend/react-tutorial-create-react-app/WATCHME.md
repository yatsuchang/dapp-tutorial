## 為了解 create-react-app 指令運作
- nvm use 16 確保使用 node v16
- npx create-react-app ./
  - 可看它安裝 react, react-dom, react-scripts with cra-template...
  - 裝完它會告訴你有幾個指令可用, 最重要的就是 `npm start` 及 `npm run build`
- `tree -I 'node_modules|cache|test_*'` 看一下它產生了什麼檔案
  - `tree -L 2 --dirsfirst` 優先

thomaschang@SBPUS-LT06 react-tutorial-create-react-app % tree -I 'node_modules|cache|test_*'
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js

2 directories, 17 files

## 分析
- 首頁 public/index.html 的 body 裡只有 `<div id="root"></div>`
- src/index.js 會先得到這個 root 並用 ReactDOM.render() 將 App 元件畫在真正的 DOM 上

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
- App 元件定義在 src/App.js, 它以 functional 元件的型式定義, 回傳一個 html (必須用個 <div> 裝起來)
- 使用 useState() hook 要注意
```js
const [value, setValue] = useState({foo: "bar", test: {example: "demo"}});
setValue({foo: "foobar"});
// Results in {foo: "foobar"} 完全被取代, 原本的 test 不見了

// using multiple state values 在更新的時後要使用 ...
const [user, setUser] = useState({id: 1, username: "foobar"});
setUser({...user, username: "example"});// OK!
```

以下介紹幾個有用的套件
- file-saver

如果要作一個簡易版的 web server
- mkdir server && cd server && touch index.js && npm init
- npm i --save express body-parser cors html-pdf
- index.js 會用來跑 Express server
- 在 client 端的 package.json 中新增 "proxy":"http://localhost:5000/"
- 執行 nodemon index.js
