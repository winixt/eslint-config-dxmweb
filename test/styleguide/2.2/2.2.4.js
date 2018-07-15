/**
 * 2.2.4 语句
 */

/**
 * ·[强制] [RULE021] 不得省略语句结束的分号。
 * ·[强制] [RULE022] 在 if / else / for / do / while 语句中，即使只有一行，也不得省略块 {...}。
 */

// define
let condition = true;
function callFunc() {
    //
}

// good
if (condition) {
    callFunc();
}

// bad
if (condition) console.log(8);
if (condition)
    callFunc();

/**
 * [强制] [RULE023] 函数定义结束不允许添加分号。
 */

// good
function funcName() {
    //
}

// bad
function funcName() {
    //
};

// 如果是函数表达式，分号是不允许省略的。
let funcName2 = function () {
    //
};

console.log(funcName2);

/**
 * ·[强制] [RULE024] IIFE 必须在函数表达式外添加 (，非 IIFE 不得在函数表达式外添加 ( 。
 * @解析 额外的 ( 能够让代码在阅读的一开始就能判断函数是否立即被调用，进而明白接下来代码的用途。而不是一直拖到底部才恍然大悟。
 */

// good
let task1 = (function () {
    let result = 0;
    // Code
    return result;
})();

let func34 = function () {
};


// bad
let task2 = function () {
    // Code
    return result;
}();

let func2332 = (function () {
});

console.log(task1, func34, task2, func2332);