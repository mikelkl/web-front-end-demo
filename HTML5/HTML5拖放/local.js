var imgContainer, msgDiv;

// 在页面加载时执行方法
window.onload = function () {
	imgContainer = document.getElementById('imgContainer');
	msgDiv=document.getElementById("msg");

	/*
	 * ondragover - 当某被拖动的对象在另一对象容器范围内拖动时触发此事件 
	 * 阻止其默认事件
	 */
	imgContainer.ondragover = function(e) {
		e.preventDefault();
	}
	
	/*
	 * ondrop - 在一个拖动过程中，释放鼠标键时触发此事件
	 * 监听拖拽事件
	 */
	imgContainer.ondrop = function (e) {
		e.preventDefault();

		/*
		 * 一篇讲解FileReader接口的博文
		 * http://blog.csdn.net/zk437092645/article/details/8745647
		 */
		var f = e.dataTransfer.files[0];
		var fileReader = new FileReader();
		fileReader.onload = function (e) {
			imgContainer.innerHTML = "<img src=\""+fileReader.result+"\">";
		}
		fileReader.readAsDataURL(f);
	}
}

// 得到对象的信息
function showObj(obj) {
    var s = "";
    for (var k in obj) {
        s+=k+":"+obj[k]+"<br/>";
    }
    msgDiv.innerHTML=s;
}