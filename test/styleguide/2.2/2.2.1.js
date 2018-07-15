/**
 * 2.2.1 缩进
 */

/**
 * ·[强制] [RULE003] 使用 4 个空格做为一个缩进层级，不允许使用 2 个空格 或 tab 字符。

·[强制] switch 下的 case 和 default 必须增加一个缩进层级。
 */

let variable = true;
// good
switch (variable) {

    case '1':
        // do...
        break;

    case '2':
        // do...
        break;

    default:
        // do...

}

// bad
switch (variable) {

case '1':
    // do...
    break;

case '2':
    // do...
    break;

default:
    // do...

}