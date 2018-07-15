# DXM ESLint 规则


[![GitHub issues](https://img.shields.io/github/issues/winixt/eslint-config-dxmweb.svg)](https://github.com/winixt/eslint-config-dxmweb/issues) [![npm package](https://img.shields.io/npm/v/eslint-config-dxmweb.svg)](https://www.npmjs.org/package/eslint-config-dxmweb) [![npm downloads](http://img.shields.io/npm/dm/eslint-config-dxmweb.svg)](https://www.npmjs.org/package/eslint-config-dxmweb)

在线浏览规则描述及示例：https://cloud.tencent.com/developer/section/1135602


## 使用方法

### 标准规则

安装：

```bash
npm i -D eslint babel-eslint eslint-config-dxmweb
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'eslint-config-dxmweb',
    ],
    globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        //
        // jQuery: false,
        // $: false
    },
    rules: {
        // 这里填入你的项目需要的个性化配置，比如：
        //
        // // @fixable 一个缩进必须用两个空格替代
        // 'indent': [
        //     'error',
        //     2,
        //     {
        //         SwitchCase: 1,
        //         flatTernaryExpressions: true
        //     }
        // ]
    }
};
```

### Vue

安装：

```bash
npm i -D eslint babel-eslint vue-eslint-parser  eslint-plugin-vue eslint-config-dxmweb
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'eslint-config-dxmweb/vue',
    ],
    globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        //
        // Vue: false
    },
    rules: {
        // 这里填入你的项目需要的个性化配置，比如：
        //
        // // @fixable 一个缩进必须用两个空格替代
        // 'indent': [
        //     'error',
        //     2,
        //     {
        //         SwitchCase: 1,
        //         flatTernaryExpressions: true
        //     }
        // ]
    }
};
```



## Troubleshootings

### VSCode install eslint

VSCode 对扩展（插件）的支持非常友好，在 VSCode 中使用 eslint 需要 「扩展 > 搜索eslint >  安装」，按照提示重新加载窗口即可以使用

### 在 VSCode 中使用

在 VSCode 中，默认 ESLint 并不能识别 `.vue`、`.ts` 或 `.tsx` 文件，需要在「文件 => 首选项 => 设置」里做如下配置：

```json
{
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        "vue"
    ]
}
```

### VSCode 中的 autoFixOnSave 没有效果

如果需要针对 `.vue`、`.ts` 和 `.tsx` 文件开启 ESLint 的 autoFix，则需要配置成：

```json
{
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        {
            "language": "vue",
            "autoFix": true
        }
    ]
}
```


## 参考

- [Alloyteam ESlint Config](https://github.com/AlloyTeam/eslint-config-alloy/blob/master/README.md)
- [ESlint Code Guide](http://eslint.org/docs/user-guide/configuring)
- [ESlint Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)