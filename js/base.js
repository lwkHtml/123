// JavaScript Document
// 获取ID
function getId(idName){
	return document.getElementById(idName);	
}
//计算日期
function countDate(n){
	var d1 = new Date()
	d1.setDate(d1.getDate()+n)	
	return d1;
}
// 获取class名
function getClass(className){
	return document.getElementsByClassName(className)	
}
// 获取样式
function getStyle(Obj,attr){
	if(Obj.currentStyle){
		return Obj.currentStyle[attr];
	}else{
		return window.getComputedStyle(Obj,null)[attr];
	}
}
//获得系统时间
function getTimes () {
	var times = new Date();
	return times.getFullYear()+"年"+change(times.getMonth()+1)+"月"+change(times.getDate())+"日"+" "+change(times.getHours())+":"+change(times.getMinutes())+":"+change(times.getSeconds())
}
function change (n) {
	if(n<10){
		return "0"+n;
	}else{
		return n;
	}
}
// 打印菱形
function printlx (x) {
	var n=x
	var m=(n-1)/2
	for(var i=m;i>=-m;i--){
		for(var j=0;j<Math.abs(i);j++){
				document.write("&nbsp; ");}
				for(var j=0;j<n-(Math.abs(i)*2);j++){
					document.write("*");	
				}
			document.write("</br>");
	}	

}
// 打印三角形
function printsan (x) {
	var n =x;
	for(var i=1;i<=n;i++){
		for(j=1;j<=n-i;j++){
			document.write("&nbsp; ")
		}
		for(j=1;j<=i;j++){
			document.write("*")
		}
		document.write("<br />")
	}
}
//冒泡排序
	function maopao(n){
	for(a=0;a<n.length-2;a++){	
		for(i=0;i<n.length-1-a;i++){
			if(n[i]>n[i+1]){
				var temp=n[i+1];
				n[i+1]=n[i];
				n[i]=temp;	
			}
		}	
	}
		return n;
	}
//二元选择排序
	function simpleSelect(arr){
		var i , j , temp , min1 , max1;
		for(i=0;i<arr.length/2;i++){
			min1 =i ; max1 =i;
			for(j=i+1;j<=arr.length-1-i;j++){
				if(arr[j]>arr[max1]){
					max1 = j;
					continue;
				}
				if(arr[j]<arr[min1]){
					min1 = j;
				}
			}
			if(Math.abs(max1-min1)==arr.length-1-i*2){
				temp = arr[i]; 
				arr[i] = arr[min1]; 
				arr[min1] = temp;  
			}else if(max1==i){       			
				temp = arr[arr.length-1-i];
				arr[arr.length-1-i] = arr[max1];
				arr[max1] = temp;			
				temp = arr[i];
				arr[i] = arr[min1];
				arr[min1] = temp;  

			}else{
				temp = arr[i]; 
				arr[i] = arr[min1]; 
				arr[min1] = temp; 
				temp = arr[arr.length-1-i]; 
				arr[arr.length-1-i] = arr[max1]; 
				arr[max1] = temp;			
			}  
		}	
		return arr;
	}
//账号验证
			/*txt2.onblur = function() {
			    var arr1 = "0123456789qwertyuiopasdfghjklzxcvbnm_";
				user.style.borderColor = "#ddd"
				ren.style.backgroundPosition = 0 + "px" + " " + -68 + "px"
				var flag = true;
				var userName = txt2.value
					//	 alert(userName[0])
				if (userName.length < 6) {
					remind.innerHTML = "字符长度不够"
					flag = false;
				} else if (userName.length > 20) {
					remind.innerHTML = "字符长度太长"
					flag = false;
				}
				for (var j = 0; j <= 9; j++) {
					if (userName[0] == j) {
						remind.innerHTML = "账号不能以数字开头"
						flag = false;
					}
				}
				for (var i = 0; i < userName.length; i++) {
					var bb = userName[i]
					var aa = arr1.search(eval("/" + bb + "/gi"))
					if (aa == -1) {
						remind.innerHTML = "不能有特殊符号"
						flag = false;
					}
				}
				if (flag) {
					remind.innerHTML = " "
				}
			}
			psw2.onfocus = function() {
				usm.style.borderColor = "#4791ff"
				shuo.style.backgroundPosition = 0 + "px" + " " + -187 + "px"
			}
			psw2.onblur = function() {
				usm.style.borderColor = "#ddd"
				shuo.style.backgroundPosition = 0 + "px" + " " + -147 + "px"
			}
			btn1.onclick = function() {
				if (!flag) {
					remind.innerHTML = "请输入正确的账号"
				} else if (psw2.value == 0) {
					remind.innerHTML = "请输入密码"
				} else if (flag1) {
					djs();
				}
				flag1 = false;
			}

			function djs() {
				var x = 5;
				var xx = setInterval(function() {
					remind.innerHTML = "登录成功，还有" + x + "秒自动跳转"
					x--;
					if (x < 0) {
						clearInterval(xx);
						window.location = "http://www.baidu.com"
					}
				}, 1000)
			}*/
// 计时器
/*	setInterval(countTimes,1000)
	var h = "00";
	var m = "00"; 
	var s = 0;	
	function timeWork1(){
		s++;
		var flag = false;
		var flag1 = false;
		if(s<10){
			s="0"+s	
		}
		if(s==60){
			m++;
			s=00;
			flag = true;	
		}
		if(m==60){
			h++;
			m=0;
			flag1= true;	
		}	
		if(h==0){
			h="00"	
		}else if(h<10&&h>0&flag1){
			h="0"+h;
		}
		if(m==0){
			m="00"	
		}else if(m<10&&m>0&&flag){
			m="0"+m;
		}
		timeWork.innerHTML = h+"小时"+m+"分钟"+s+"秒"
	}
	timeWork1();
	setInterval(timeWork1,1000)
*/
	//	直接操作原数组/字符串对象
	//	push()  pop()  shift()  unshift()  splice() sort()    reverse()
  	//	生成一个新的数组/字符串对象
	//	slice()  concat()  join()  
	//	replace() substring() toLowerCase() toUpperCase()  split()  trim() toString()
