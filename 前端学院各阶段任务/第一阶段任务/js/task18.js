// var nums=new Array();

var btn=document.getElementsByClassName('buttons');
for (var i = btn.length - 1; i >= 0; i--) {
	btn[i].onclick=selects;
};

var texts=document.getElementById('texts');
var queue=document.getElementById('queue');
function selects(){
	if(this.value==="左侧入"){
		if(texts.value){
			var first=queue.firstChild;
			var elem=document.createElement("div"); 
			elem.innerHTML=texts.value;
			elem.setAttribute("class", "block");
			queue.insertBefore(elem, first);
			texts.value="";
		}
	}
	if(this.value==="右侧入"){
		if(texts.value){
			var elem=document.createElement("div"); 
			elem.innerHTML=texts.value;
			elem.setAttribute("class", "block");
			queue.appendChild(elem);
			texts.value="";
		}
	}
	if(this.value==="左侧出"){
			try{var first=queue.firstElementChild.innerText;
			alert("删除的数字为："+first);
			queue.removeChild(queue.firstElementChild);
			texts.value="";}
			catch(e){}
	}
	if(this.value==="右侧出"){
			try{var last=queue.lastElementChild.innerText;
			alert("删除的数字为："+last);
			queue.removeChild(queue.lastElementChild);
			texts.value="";}
			catch(e){}
		
	}
}