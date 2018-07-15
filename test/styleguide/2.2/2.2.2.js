/**
 * 2.2.2 空格
 */

/**
 * ·[强制] [RULE005] 二元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格。
 */
let arr = [1, 2, 3];

let a = !arr.length;
a++;
a = 1 + 3;

console.log(a);

/**
 * ·[强制] [RULE006] 用作代码块起始的左花括号 { 前必须有一个空格。
 */

let condition = true;

// good
if (condition) {
    console.log('hello spaces');
}

while (false) {
    console.log('hello spaces');
}

function funcName() {
    console.log('hello spaces');
}
funcName();

const foo = function () {

};

// bad
if (condition){
    console.log('hello spaces');
}

while (false){
    console.log('hello spaces');
}

function funcName(){
    console.log('hello spaces');
}

funcName();

/**
 * ·[强制] [RULE007] if / else / for / while / function / switch / do / try / catch / finally 关键字后，必须有一个空格。
 */

// good
if (condition) {
    console.log('hello spaces');
}

while (false) {
    console.log('hello spaces');
}

(function () {
})();

// bad
if(condition) {
    console.log('hello spaces');
}

while (false) {
    console.log('hello spaces');
}

(function() {
})();

/**
 * ·[强制] [RULE008] 在对象创建时，属性中的 : 之后必须有空格，: 之前不允许有空格。
 */
// good
let obj1 = {
    a: 1,
    b: 2,
    c: 3
};

// bad
let obj2 = {
    a : 1,
    b:2,
    c :3
};

console.log(obj1, obj2);

/**
 * [强制] [RULE009] 函数声明、具名函数表达式、函数调用中，函数名和 ( 之间不允许有空格。
 */
// good
function func1() {
}

let func2 = function func2() {
};

func1();
func2();

// bad
function func3 () {
}

var func4 = function func4 () {
};

func3 ();
func4 ();

/**
 * ·[强制] , 和 ; 前不允许有空格。
 */

function callFunc() {
    //
}
let a1 = 1;
let b1 = 2;
// good
callFunc(a1, b1);

// bad
callFunc(a1 , b1) ;

/**
 *·[强制] 在函数调用、函数声明、括号表达式、属性访问、if / for / while / switch / catch 等语句中，() 和 [] 内紧贴括号部分不允许有空格。
 */

let param1 = 1;
let param2 = 2;
let param3 = 3;
let i = 0;
let needIncream = true;
let variable = false;
let increament =  false;
let num = 9;
let list = [];
let len = 0;
function save() {
    //
}
// good

callFunc(param1, param2, param3);

save(this.list[this.indexes[i]]);

needIncream && (variable += increament);

if (num > list.length) {
    //
}

while (len--) {
    //
}


// bad

callFunc( param1, param2, param3 );

save( this.list[ this.indexes[ i ] ] );

needIncreament && ( variable += increament );

if ( num > list.length ) {
    //
}

while ( len-- ) {
    //
}

/**
 * ·[强制] [RULE012] 单行声明的数组与对象，如果包含元素，{} 和 [] 内紧贴括号部分不允许包含空格。
 *
 * ·[强制] [RULE013] 行尾不得有多余的空格。
 */


// good
let arr12 = [];
let arr23 = [1, 2, 3];
let obj12 = {};
let obj23 = {name: 'obj'};
let obj34 = {
    name: 'obj',
    age: 20,
    sex: 1
};

// bad
let arr11 = [ ];
let arr22 = [ 1, 2, 3 ];
let obj11 = { };
let obj22 = { name: 'obj' };
let obj33 = {name: 'obj', age: 20, sex: 1};

// use
console.log(arr12, arr23, obj12, obj23, obj34);
console.log(arr11, arr22, obj11, obj22, obj33);

