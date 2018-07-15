/**
 * 本测试标准借鉴于百度 js 代码规范
 *
 * @注意：由于百度 js 代码规范过于老旧，这里的测试仅截取部分实用有效的规则
 */
/**
 * ·[强制] [RULE086] 使用 parseInt 时，必须指定进制。
 */

let str = '2';
// good
parseInt(str, 10);

// bad
parseInt(str);

/**
 * ·[强制] [RULE089] 字符串开头和结束使用单引号 ' 。
 */
str = '我是一个字符串';
let html = "我是一个双引号";
console.log(html);

/**
 * ·[建议] 转换成 boolean 时，使用 !! 。
 * ·[建议] 转换成 string 时，使用 + '' 。
 * ·[建议] 转换成 number 时，通常使用 + 。
 */