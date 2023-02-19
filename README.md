# tutorial-js-typescript

## 簡介

**The goal of TypeScript is to be a static typechecker for JavaScript programs - in other words, a tool that runs before your code runs (static) and ensures that the types of the program are correct (typechecked).**
> from [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

**If you find yourself searching for something like “how to sort a list in TypeScript”, remember: TypeScript is JavaScript’s runtime with a compile-time type checker.**
> from [TypeScript for the New Programmer](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)

**TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.**
> from [Let's Gear Up for TypeScript](https://gist.github.com/ekas/5a094a1b5f78298489fc6beee4654259)

TypeScript 是由 Microsoft 開發與維護的開源軟體，其主要功能就如前簡述，是一套 JavaScript 的強型態語法，在編譯期檢查其形態並避免執行期因型態的執行錯誤，但並不會改變多數 JavaScript 的運作邏輯。

## 執行

本專案使用的命令介面僅適用 Windows 環境且運行於 Docker 環境。

+ 進入 TypeScript 開發環境，使用的[項目專案](./app/ts)
```
dev ts
```

+ 進入 Babel 運用 TyepScript 開發環境，使用的[項目專案](./app/babel)
```
dev babel
```

## 安裝

### TypeScript

+ 利用 npm 安裝 TypeScript 至專案目錄
```
npm install --save-dev typescript
```

+ 執行定義於 package.json 中的腳本 ```npm run helloworld```

此腳本執行兩個步驟
```
tsc ./src/main.ts --outDir ./dist
node ./dist/main.js
```

1. 透過 typescript 轉換 main.ts 為 main.js 到 dist 目錄下
2. 透過 node.js 執行 dist 目錄下的 main.js

### Babel

+ [Babel vs. TypeScript: Choosing the right compiler for your project](https://blog.logrocket.com/babel-vs-typescript/)
+ [@babel/preset-typescript](https://babeljs.io/docs/babel-preset-typescript)

TypeScript 第一版於 2012 年釋出，相較於 ESMAScript 2015 早瞭三年，但實際運用上兩者針對內容有著明顯不同

1. No type checking in Babel；Babel 設計上更關注在如何編譯，而 ECMAScript 則是提供符合程式語言泛型的規範，TypeScript 則是著重在各種型態檢查。
2. Babel couldn’t do const enums；Babel 增加的範型並沒有改善 JavaScript 在弱型態的規劃，自然也沒有諸如 const、enum、interface 這些進階的物件型態，或說 Babel 保持 JavaScript 在 Functional Programing 的設計原則。
3. Decorators and metadata: TypeScript has an edge；使用這介面的架構多數遵守物件導向原則，自然會使用 Decorators，因此，Babel 也有自己的 Plugin 可用，但整體設計上 TypeScript 更加優異。
4. Babel excels at custom transformations；Babel 設計上更關注在如何編譯，這也體現在整合不同外部轉換服務的 Plugin 與 Preset，而 TypeScript 雖然也有但更像是定義在其命令介面的規範內。
5. TypeScript and Babel have similar performance；原則上兩者都是 JavaScript 的語法轉換，若是互相轉換雙方內容，其效能差異不大。

若考量日後擴展與其他框架整合，應使用 Babel 融合 TypeScript 的方向考慮。

+ 安裝 babel core for compiler
```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

+ 安裝 node.js babel runner
```
npm install --save-dev @babel/node
```

+ 安裝 TypeScript
```
npm install --save-dev typescript
```

+ 安裝 TypeScript plugin and preset
```
npm install --save-dev @babel/preset-typescript @babel/plugin-transform-typescript
```

+ 設定 Preset
```
"babel": {
  "presets": [
    "@babel/env",
    "@babel/preset-typescript"
  ]
}
```
+ 執行定義於 package.json 中的腳本 ```npm run helloworld```

此腳本執行步驟為 ```babel-node --extensions '.ts' ./src/main.ts```

## 文獻

+ [TypeScript](https://www.typescriptlang.org/)
    - [TypeScript - wiki](https://zh.wikipedia.org/zh-tw/TypeScript)
    - [TypeScript in Visual Studio Code](https://code.visualstudio.com/docs/languages/typescript)
    - [React - TypeScript](https://www.typescriptlang.org/docs/handbook/react.html)
    - [Using Vue with TypeScript](https://vuejs.org/guide/typescript/overview.html)
    - [Angular - TypeScript configuration](https://angular.io/guide/typescript-configuration)
+ 導覽
    - [TypeScript Tutorial - w3schools](https://www.w3schools.com/typescript/)
    - [TypeScript 新手指南](https://willh.gitbook.io/typescript-tutorial/)
    - [TypeScript 中文手冊](https://typescript.bootcss.com/)
    - [Let's Gear Up for TypeScript](https://gist.github.com/ekas/5a094a1b5f78298489fc6beee4654259)
