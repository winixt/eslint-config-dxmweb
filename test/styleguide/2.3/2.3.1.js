/**
 * 2.3 命名
 */

/**
 * ·[强制] 变量 使用 Camel命名法 。
 * TODO
 */
let loadingModules = 1;

console.log(loadingModules);

/**
 * ·[强制] 常量 使用 全部字母大写，单词间下划线分隔 的命名方式。
 * TODO
 */

let HTML_ENTITY = {};
console.log(HTML_ENTITY);

/**
 * [强制] 函数 使用 Camel命名法 。
 * TODO
 */

function stringFormat(source) {
    //
}

stringFormat(1);


/**
 * ·[强制] 函数的 参数 使用 Camel命名法 。
 * TODO
 */
function hear(theBells) {
}
hear(0);

/**
 * ·[强制] [RULE029] 类 使用 Pascal命名法 。
 * TODO
 */
function TextNode(options) {
}

TextNode();

/**
 * [强制] [RULE025] 类的 方法 / 属性 使用 Camel命名法 。
 * TODO
 */

function TextNode2(value, engine) {
    this.value = value;
    this.engine = engine;
}

TextNode.prototype.clone = function () {
    return this;
};

console.log(TextNode2(0));

/**
 * ·[强制] 枚举变量 使用 Pascal命名法 ，枚举的属性 使用 全部字母大写，单词间下划线分隔 的命名方式
 * TODO
 */

let TargetState = {
    READING: 1,
    READED: 2,
    APPLIED: 3,
    READY: 4
};

console.log(TargetState);

/**
 * ·[强制] 命名空间 使用 Camel命名法 。
 * TODO
 */

let ipments = {};
ipments.heavyWeapons = {};

/**
 * ·[强制] 由多个单词组成的缩写词，在命名中，根据当前命名法和出现的位置，所有字母的大小写与首字母的大小写保持一致。
 * TODO
 */

function XMLParser() {
    //
}

function insertHTML(element, html) {
}

let httpRequest = new XMLParser();

XMLDocument();
insertHTML();
console.log(httpRequest);

/**
 * ·[强制] 类名 使用 名词 。
 * TODO
 */

function Engine(options) {
    //
}

Engine();

/**
 * ·[建议] 函数名 使用 动宾短语 。
 * ·[建议] boolean 类型的变量使用 is 或 has 开头。
 * .[建议] Promise对象 用 动宾短语的进行时 表达。
 */