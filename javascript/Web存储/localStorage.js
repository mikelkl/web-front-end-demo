/**
 * Created by Administrator on 4/10/2016.
 *
 * 存储特点：
 *      localStorage方法存储的数据没有时间限制。
 */

var ta;
var btn;
window.onload = function () {
    ta = document.getElementById("ta");
    if (localStorage.text) {
        ta.value = localStorage.text;
    }

    btn = document.getElementById("btn");
    btn.onclick = function () {
        localStorage.text = ta.value;
    }
}