/*addHandler和removeHandler两个方法首先都会检测传入的元素中是否存在DOM2 级方法。如果存在DOM2 级方法，则使用
 该方法：传入事件类型、事件处理程序函数和第三个参数false（表示冒泡阶段）。如果存在的是IE 的
 方法，则采取第二种方案。注意，为了在IE8 及更早版本中运行，此时的事件类型必须加上"on"前缀。
 最后一种可能就是使用DOM0 级方法（在现代浏览器中，应该不会执行这里的代码）。此时，我们使用
 的是方括号语法来将属性名指定为事件处理程序，或者将属性设置为null。*/
var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler);
        } else if (element.attachEvent) {
            element.attachEvent(type, handler);
        } else {
            element['on' + type] = handler;
        }
    },
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler);
        } else if (element.detachEvent) {
            element.detachEvent(type, handler);
        } else {
            element['on' + type] = null;
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    getRelatedTarget: function (event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    },
    getButton: function (event) {
        if (document.implementation.hasFeature("MouseEvents", "2.0")) {
            return event.button;
        } else {
            switch (event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
};