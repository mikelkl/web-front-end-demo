/**
 * Created by Administrator on 4/10/2016.
 */

var countNum = 0;

function count() {
    postMessage(countNum);
    countNum++;
    setTimeout(count, 1000);
}

count();


