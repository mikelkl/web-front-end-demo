/**
 * Created by Administrator on 4/8/2016.
 *
 * 参考文章：
 * https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
 */
var serverData, statusDiv;
var SERVER_URL = "http://localhost:5000/";

window.onload = function () {
    serverData = document.getElementById("serverData");
    statusDiv = document.getElementById("statusDiv");
    startlistenServer();
}

function startlistenServer() {
    statusDiv.innerHTML = "start Connect Server...";
    var es = new EventSource(SERVER_URL);
    es.addEventListener("newData", newDataHandler);
    es.onopen = openHandler;
    es.onerror = errorHandler;
    es.onmessage = messageHandler;

}

function openHandler(e) {
    statusDiv.innerHTML = "Server open";
}

function errorHandler(e) {
    statusDiv.innerHTML = "Error";
}

function messageHandler(e) {
    serverData.innerHTML = e.data;
}

function newDataHandler(e) {
    serverData.innerHTML = e.data;
}