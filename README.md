## After new repo on github, in local, open VSC
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/yatsuchang/dapp-tutorial.git
git push -u origin main

## Web 3.0 概述
- 封裝 JSON-RPC API，用於 Dapp 網站前端，它不像 Geth 或 Parity 本身有 JSON-RPC Server，故需用其它 JSON-RPC Server 跟乙太坊通訊
- 要用 web3.js 連上區塊鍊有兩種方法: Infura 或透過 Metamask
- 四大模組 eth, shh, bzz, utils，其中 eth

## React 重點
- Class 元件已被 functional 元件取代
- React 環境的設置有兩法，一種是手動設置 webpack 及 babel；另一種是用 `create-react-app` 指令

## 想法
- 會先建幾個資料夾來學習 React, 這些資料夾都是一個獨立專案

## Dapp 概述
- 後端為區塊鍊，瀏覽器需用支援 Dapp 的像 Mist 或透過 Metamask 插件讓 Chrome 支援 Dapp
- 需知道非同步 API 使用方式，前端透過 ABI 與智能合約通訊並配合 web3.js 或 ethjs 或 ether.js
- 若用 Metamask 會在網頁中自動嵌入 web3.js

## Effect Hook
- 在 React 16.8 後才有
- 有兩種 effects, 需要 cleanup 的與不需要的
- useEffect() 第二個參數有沒有給不一樣滴
- 不需要 cleanup 的像是有時想在 React 更新完 DOM 後執行一些程式
  - Network請求, 手動處理 DOM, 記錄 log 等
- 需要 cleanup 的情況發生在若 effect 裡面有使用資源必須釋放
  - 會在 useEffect() 裡面多一個 return function cleanup() {...}
- 每個 effect 都是獨立的(arrow function), 每當要執行新的 effect 時 React 都會將上次的 effect 清除(因為上面可看它回傳一個 cleanup 函式)