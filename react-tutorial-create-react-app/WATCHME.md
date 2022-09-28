## 為了解 create-react-app 指令運作
- nvm use 16 確保使用 node v16
- npx create-react-app ./
  - 可看它安裝 react, react-dom, react-scripts with cra-template...
  - 裝完它會告訴你有幾個指令可用, 最重要的就是 `npm start` 及 `npm run build`
- `tree -I 'node_modules|cache|test_*'` 看一下它產生了什麼檔案

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