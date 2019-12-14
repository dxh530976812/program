//弹幕元素
//1.创建弹幕构造函数
var MsgObj=function(){
    //创建弹幕需要的对象
    this.m=[];
    this.x=[];
    this.y=[];
    this.spd=[];
    this.font=[];
    this.color=[];
    this.alive=[];
}

//2.每次最多100条弹幕
MsgObj.prototype.num=100;

//3.弹幕数据初始化
MsgObj.prototype.init=function(){
    //便利遍历弹幕数组为其赋初始值
    for(var i=0;i<this.num;i++){
    this.m[i]="";
    this.x[i]=canWidth;
    this.y[i]=0;
    this.spd[i]=5;
    this.font[i]="12px";
    this.color[i]="#fff";
    this.alive[i]=false;
    }
    console.log(this)
}

//4.绘制弹幕元素
MsgObj.prototype.draw=function(){
    //先清除画布再遍历绘画
    ctx.clearRect(0,0,canWidth,canHeight);
    //遍历弹幕元素，绘制弹幕文字
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            ctx.fillStyle=this.color[i];
            ctx.font=this.font[i]+" SinHei";
            this.x[i]-=this.spd[i];
            ctx.fillText(this.m[i],this.x[i],this.y[i]);
            if(this.x[i]<=0){
                this.alive[i]=false;
                this.x[i]=canWidth;
            }
        }
    }
}

//5.创建add函数，获取用户输入内容添加到弹幕上
MsgObj.prototype.add=function(obj){
    for(var i=0;i<this.num;i++){
        if(this.alive[i]==false){
            this.y[i]=Math.random()*canHeight;
            this.spd[i]=Math.random()*5+1;
            this.font[i]=obj.f;
            this.color[i]=obj.c;
            this.m[i]=obj.m;
            this.alive[i]=true;
            return;
        }
    }
}