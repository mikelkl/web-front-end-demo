var box1Div, msgDiv, img1, box2Div;

// 在页面加载时执行方法
window.onload = function () {
	box1Div=document.getElementById('box1');
	box2Div=document.getElementById('box2');
	msgDiv=document.getElementById("msg");
	img1=document.getElementById("img1");

	/*
	 * ondragover - 当某被拖动的对象在另一对象容器范围内拖动时触发此事件 
	 * 阻止其默认事件
	 */
	box1Div.ondragover = function(e) {
		e.preventDefault();
	}

	box2Div.ondragover = function(e) {
		e.preventDefault();
	}

	/*
	 * ondragstart - 用户开始拖动元素时触发
	 * 
	 * dataTransfer对象是事件对象的一个属性，
	 * 用于从被拖拽元素相放置目标传递字符串
	 * 格式的数据。因为它是事件对象的属性，
	 * 所以只能在拖放事件的事件处理程序中访
	 * 问dataTransfer对象。在事件处理程序中，
	 * 可以使用这个对象的属性和方法来完善拖
	 * 放功能。
	 * dataTransfer对象有两个主要的方法：
	 * getData()方法和setData()方法。从这两
	 * 个方法的英文字面意思上就能大概猜出来
	 * 其用途。getData()方法可以取得由
	 * setData()方法保存的值。setData()方法
	 * 的第一个参数，也是getData()方法唯一的
	 * 一个参数，是用来保存数据类型的字符串，
	 * 取值是”text”或”URL”。
	 */
	img1.ondragstart = function(e) {
		e.dataTransfer.setData("imgId", "img1");
	}

	/*
	 * ondrop - 在一个拖动过程中，释放鼠标键时触发此事件
	 * 监听拖拽事件
	 */
    box1Div.ondrop = dropImghandler;
    box2Div.ondrop = dropImghandler;
}
 
// 实现多个目标源之间的拖动
function dropImghandler(e) {
	// 得到事件的信息
    showObj(e.dataTransfer);
	e.preventDefault();

	var img = document.getElementById(e.dataTransfer.getData("imgId"));
	e.target.appendChild(img);
}

// 得到对象的信息
function showObj(obj) {
    var s = "";
    for (var k in obj) {
        s+=k+":"+obj[k]+"<br/>";
    }
    msgDiv.innerHTML=s;
}