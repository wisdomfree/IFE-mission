
var btn=document.getElementsByClassName('buttons');
for (var i = btn.length - 1; i >= 0; i--) {
	btn[i].onclick=selects;
};

var btn1=document.getElementById('bubbleSort');
btn1.onclick=bubbleSort;

var btn2=document.getElementById('random');
btn2.onclick=randomNum;

var texts=document.getElementById('texts');
var queue=document.getElementById('queue');

function numbers(){
	var number=document.getElementsByClassName('block');
	if(number.length>60){
		alert("队列元素超过60个，不允许再次添加！");
		return false;
    }
}

function render(){
	var number=document.getElementsByClassName('block');
	for(var i=0;i<number.length;i++){
		number[i].style.height=parseInt(number[i].innerHTML)*2+'px';
	}
}   

//随机生成数据
function randomNum(){
	var number=document.getElementsByClassName('block');
	var numbers=number.length;
	for(var i=0;i<numbers;i++){
		queue.removeChild(number[0]);
	}
	for(var i=0;i<40;i++){
		var num=Math.ceil(Math.random()*90+10);
		var elem=document.createElement("div"); 
			elem.setAttribute("class", "block");
			elem.innerHTML=num;
			queue.appendChild(elem);
	}
	render();
}

//冒泡排序
function bubbleSort(){
	var number=document.getElementsByClassName('block');
	var len=number.length;j=0,i=len-1;
	timer=setInterval(function(){
		if(i<1){
			clearInterval(timer);
		}
		if(j==i){
			--i;
			j=0;
		}
		if(parseInt(number[j].innerHTML)>parseInt(number[j+1].innerHTML)){
			temp=number[j].innerHTML;
			number[j].innerHTML=number[j+1].innerHTML;
			number[j+1].innerHTML=temp;
			render();
		}
		++j;
	},200);
}

	// var temp,j=0,i=0;
 //    for(var i=0;i<number.length;i++){
 //    	number[i].style.backgroundColor="green";
 //    	// for(var j=0;j<number.length-i;j++){
 //    		var times=setInterval(function(){
 //    			var number=document.getElementsByClassName('block');
 //    			if(j==number.length-i){
 //    			number[i].style.backgroundColor="red";
 //    			clearInterval(times);	
 //    			}
 //    			if(number[j]>number[j+1]){
 //    				temp=number[j];
 //    				number[j]=number[j+1];
 //    				number[j+1]=temp;
 //    				render();
 //    			}
 //    			j++;
 //    		},500);
 //    	// }
 //    }


function selects(){
	numbers();
	if(this.value==="左侧入"){
		if(texts.value>=10&&texts.value<=100){
			var first=queue.firstChild;
			var elem=document.createElement("div"); 
			elem.setAttribute("class", "block");
			elem.innerHTML=texts.value;
			queue.insertBefore(elem, first);
			texts.value="";
		}
		else{
			alert("请输入不小于10不大于100的数!");
		}
	}
	if(this.value==="右侧入"){
		if(texts.value>=10&&texts.value<=100){
			var elem=document.createElement("div"); 
			elem.setAttribute("class", "block");
			elem.innerHTML=texts.value;
			queue.appendChild(elem);
			texts.value="";
		}
		else{
			alert("请输入不小于10不大于100的数!");
		}
	}
	if(this.value==="左侧出"){
			try{
			queue.removeChild(queue.firstElementChild);
			texts.value="";}
			catch(e){}
	}
	if(this.value==="右侧出"){
			try{
			queue.removeChild(queue.lastElementChild);
			texts.value="";}
			catch(e){}
		
	}
	render();
}