/**
 * 2.4 注释汇总
 * 1. @description
 * 类型： @type
 * 默认值：@default
 * 私有属性：@private
 * 静态属性: @static
 * 作者：@author
 * 文件：@file
 * 事件：@event
 *
 * 类型描述：{string}, {number}, {boolean}
 */


/**
 * ·[强制] [RULE038] 必须独占一行。// 后跟一个空格，缩进与下一行被注释说明的代码一致
 * ·[强制] 文档注释前必须空一行。
 * ·[建议] 自文档化的文档说明 what，而不是 how。
 */

/**
 * 值变更时触发
 *
 * @event
 * @param {Object} e e描述
 * @param {string} e.before before描述
 * @param {string} e.after after描述
 */

let obj = {
    onchange: function (e) {
    }
};

console.log(obj);


/**
 * 2.4.8 函数/方法注释
 *
 * ·[强制] 函数/方法注释必须包含函数说明，有参数和返回值时必须使用注释标识。
 * ·[强制] 参数和返回值注释必须包含类型信息和说明。
 * ·[建议] 当函数是内部函数，外部不可访问时，可以使用 @inner 标识。
 */

/**
 * 函数描述
 *
 * @param {string} p1 参数1的说明
 * @param {string} p2 参数2的说明，比较长
 *     那就换行了.
 * @param {number=} p3 参数3的说明（可选）
 * @return {Object} 返回值描述
 */
function foo(p1, p2, p3) {
    let p4 = p3 || 10;
    return {
        p1: p1,
        p2: p2,
        p3: p3,
        p4,
    };
}

foo();

/**
 * ·[强制] 对 Object 中各项的描述， 必须使用 @param 标识。
 */
/**
 * 函数描述
 *
 * @param {Object} option 参数描述
 * @param {string} option.url option项描述
 * @param {string=} option.method option项描述，可选参数
 */
function foo3(option) {
    //
}

foo3();
