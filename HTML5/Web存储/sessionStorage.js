/**
 * Created by Administrator on 4/10/2016.
 *
 * 存储特点：
 *      sessionStorage方法针对一个session进行数据存储。
 *      当用户关闭浏览器窗口后，数据会被删除
 */

var num = 0;
var txt;
var btn;

window.onload = function () {
    txt = document.getElementById("txt");
    btn = document.getElementById("addbtn");
    if (sessionStorage.num) {
        num = sessionStorage.num;
        txt.innerHTML = sessionStorage.num;
    }

    btn.onclick = function () {
        num++;
        sessionStorage.num = num;
        showNum();
    }
}

function showNum() {
    txt.innerHTML = num;
}
