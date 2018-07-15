/**
 * 2.2.3 换行
 */

/**
 * ·[强制] 每个独立语句结束后必须换行。
 * ·[强制] [RULE015] 每行不得超过 120 个字符。
 *
 * @解析
 * 超长的不可分割的代码允许例外，比如复杂的正则表达式。长字符串不在例外之列。
 *
 * ·[强制] 运算符处换行时，运算符必须在新行的行首
 */

// define
let user = {};
let number1 = 1;
let number2 = 2;
let number3 = 3;
let number4 = 4;
let number5 = 5;

// good
if (user.isAuthenticated()
    && user.isInRole('admin')
    && user.hasAuthority('add-admin')
    || user.hasAuthority('delete-admin')
) {
    // Code
}

const result1 = number1 + number2 + number3
    + number4 + number5;


// bad
if (user.isAuthenticated() &&
    user.isInRole('admin') &&
    user.hasAuthority('add-admin') ||
    user.hasAuthority('delete-admin')) {
    // Code
}

let result2 = number1 + number2 + number3 + 
 number4 + number5;

// use
console.log(result1, result2);


/**
 * ·[强制] [RULE017] 在函数声明、函数表达式、函数调用、对象创建、数组创建、for语句等场景中，不允许在 , 或 ; 前换行。
 * TODO
 */

// define
let aVeryVeryLongArgument = 0;
let anotherVeryLongArgument = 1;
let callback = 2;

// good
let obja = {
    a: 1,
    b: 2,
    c: 3
};

function foo() {
    //
}

foo(
    aVeryVeryLongArgument,
    anotherVeryLongArgument,
    callback
);


// bad
let objb = {
    a: 1
    , b: 2
    , c: 3
};

foo(
    aVeryVeryLongArgument
    , anotherVeryLongArgument
    , callback
);

console.log(obja, objb);

/**
 * ·[建议] 不同行为或逻辑的语句集，使用空行隔开，更易阅读。
 */