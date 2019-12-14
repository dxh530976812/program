//主程序入口
//1.全局变量
var c3;
var ctx;
var v3;
var msg;
var canWidth;
var canHeight;
var inputmsg;
var inputcolor;
var inputfont;
var inputbtn;
var inputplay;

//4.主函数
function game(){
    init();
    gameloop();
}


//2.初始化数据
function init(){
    c3=document.getElementById("c3");
    ctx=c3.getContext("2d");
    v3=document.getElementById("v3");
    canWidth=c3.width;
    canHeight=c3.height;
    msg=new MsgObj();  //调用弹幕构造函数
    msg.init();
    inputmsg=document.getElementById("inputmsg");
    inputcolor=document.getElementById("inputcolor")
    inputfont=document.getElementById("inputfont")
    inputplay=document.getElementById("inputplay")
    inputbtn=document.getElementById("inputbtn")
    //添加事件
    inputbtn.addEventListener("click",getmsg);
    inputplay.addEventListener("click",play);
}

//3.添加循环方法gameloop  反复绘制弹幕元素
function gameloop(){
    requestAnimationFrame(gameloop)
    msg.draw();
}


//5.页面加载完成执行主函数game;
document.body.onload=game;

//6.获取用户输入对象,调用弹幕add函数并绘入弹幕中
function getmsg(){
    var m=inputmsg.value;
    var f=inputfont.value;
    var c=inputcolor.value;
    var obj={m,f,c};
    console.log(obj);
    msg.add(obj);
}

//播放视频
function play(){
    if(v3.paused){
        v3.play()
    }else{
        v3.pause()
    }
}
