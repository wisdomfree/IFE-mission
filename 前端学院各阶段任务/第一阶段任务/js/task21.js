function $(id){
	return document.getElementById(id);
}

var text = $("text");
var submit = $("submit");
var searchText = $("searchText");
var searchbtn = $("searchBtn");
var ulList1 = $("list1");
var ulList2 = $("list2");

var data = new Array();

function addEvent(element, eventName, listener) {
    if (element.addEventListener) {
        element.addEventListener(eventName, listener, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + eventName, listener);
    } else {
        element["on" + eventName] = listener;
    }
}

function getText(){
	var content = text.value.trim();
	if(!content.match(/^[,，、\s0-9a-zA-Z\u4e00-\u9fa5]+$/)){
		alert("输入不合法！");
		text.value="";
		text.focus();
		return;
	}
	else{
		insert = content.split(/[,，、\s\n]+/);
		return insert;
	}
}

//在数组末尾添加一个元素
function push(){
	var content = getText();
	var tag=0;
	content.forEach(function(i){
		if(i){
			if(data.length==0)
				data.push(i);
			else{
			     for(var j=0;j<data.length;j++){
			     if(i===data[j]){
				      tag++;
				      break;
			        }			
		          }
		         if(tag==0){
			         data.push(i);
			         if(data.length>10)
				     data.shift();
		           }
		         tag=0;
		        }
		}
	})
	render();
}

//点击删除元素
function del(id){
	data.splice(id, 1);
	//console.log(data);
	render();
}

function render(){
	var content = "";
	var count = 0;
	data.forEach(function(ele){
		content += "<li id=" + count +">" + ele + "</li>";
		count++;
	})
	ulList2.innerHTML = content;
	text.value="";
}


function init(){
	addEvent(submit, 'click', push);
	addEvent(ulList2, 'click', function(event){
		event = event || window.event;
		var target = event.target || event.srcElement;
		if(target && target.tagName === "li".toUpperCase()){
			del(target.id);
		}
	});
	addEvent(ulList2, 'mouseover', function(event){
		event = event || window.event;
		var target = event.target || event.srcElement;
		if(target && target.tagName === "li".toUpperCase()){
			target.innerHTML="点击删除"+target.innerHTML;
			target.style.backgroundColor="red";
		}
	});
	addEvent(ulList2, 'mouseout', function(event){
		event = event || window.event;
		var target = event.target || event.srcElement;
		if(target && target.tagName === "li".toUpperCase()){
			target.innerHTML = target.innerHTML.split("点击删除")[1];
			target.style.backgroundColor="#FFCA8A";
		}
	});
}

init();
