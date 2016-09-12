/**
 * Created by Administrator on 4/10/2016.
 *
 * 什么是Web Worker？
 *      web worker是运行在后台的javascript，独立于其他脚本，不会影响页面的性能
 *
 * 方法：
 *      postMessage()-它用于向HTML页面传回一段消息
 *      terminate()-终止web worker，并释放浏览器/计算机资源
 *
 * 事件：
 *      onmessage
 */

var numDiv;
var work;

window.onload = function () {
    numDiv = document.getElementById("numDiv");

    document.getElementById("start").onclick = startWorker;
    document.getElementById("stop").onclick = function () {
        if (work) {
            work.terminate();
            work = null;
        }
    };
}

function startWorker() {
    if (work) {
        return;
    }

    work = new Worker("count.js");
    work.onmessage = function (e) {
        numDiv.innerHTML = e.data;
    }
}