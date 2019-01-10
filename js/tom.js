var timer;
//点击
var cymbal=document.getElementById("cymbal");
cymbal.onclick=function(){
	start("cymbal",13);
}
var drink=document.getElementById("drink");
drink.onclick=function(){
	start("drink",81);
}
var eat=document.getElementById("eat");
eat.onclick=function(){
	start("eat",40);
}
var fart=document.getElementById("fart");
fart.onclick=function(){
	start("fart",28);
}
var pie=document.getElementById("pie");
pie.onclick=function(){
	start("pie",24);
}
var scratch=document.getElementById("scratch");
scratch.onclick=function(){
	start("scratch",56);
}
var knockout=document.getElementById("knockout");
knockout.onclick=function(){
	start("knockout",81);
}
var angry=document.getElementById("angry");
angry.onclick=function(){
	start("angry",26);
}
var aiyou=document.getElementById("aiyou");
var stomach=document.getElementById("stomach");
stomach.onclick=function(){
	start("stomach",34);
	aiyou.play();
}
var footRight=document.getElementById("footRight");
footRight.onclick=function(){
	start("footRight",30);
}
var footLeft=document.getElementById("footLeft");
footLeft.onclick=function(){
	start("footLeft",30);
}
function start(name,count){

clearInterval(timer);
//初始化下标	
var index=-1;
var cat=document.getElementById("cat");
//计时器
 timer=setInterval(function(){
// 	判断图片是否为最后一张
if(++index<count){
	cat.src=getImagSrc(name,index);
}else{
//	清除计时器
clearInterval(timer);
}
 },80);
}

function getImagSrc(name,index){
//	img/Animations/angry/angry_00.jpg
return "img/Animations/"+name+"/"+name+"_"+getIndex(index)+".jpg";
}
function getIndex(index){
	//判断是否小于10
	if(index<10){
		return "0"+index;
	}else{
		return index;
	}

}

