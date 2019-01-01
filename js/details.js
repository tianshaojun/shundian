window.onload=function(){


        //关闭广告条
        var advertist=document.getElementById("advertist");
        var close=advertist.children[1];
        close.onclick=function(){
            advertist.style.display="none";
        }






        //放大镜
        function Magnifier(container,options){
            this.content=document.querySelector(container);
            this.minImg=this.content.querySelector(options.minImg);
            this.middle=this.content.querySelector(options.middle);
            this.bigImg=this.content.querySelector(options.bigImg);
            this.filter=this.content.querySelector(options.filter);
            this.box=this.content.querySelector(options.box);
            this.max=this.content.querySelector(options.max);
        }


        Magnifier.prototype.init=function(){
            var str="";
            for(var i=0;i<3;i++){
                str+="<img src=img/"+(i+1)+"-small.jpg class='small'  data-url=img/"+(i+1)+".jpg>";
            }
            this.minImg.innerHTML=str;

            this.over();
            this.boxOver();
            this.filterMove();
            this.boxOut();
        }
        
        Magnifier.prototype.over=function(){
            var _this=this;
            this.minImgs=this.minImg.querySelectorAll('img');
            for(var i=0;i<this.minImgs.length;i++){
                this.minImgs[i].onmouseover=function(){
                    _this.src=this.getAttribute('data-url');
                    _this.middle.src=_this.src;
                    _this.bigImg.src=_this.src;
                }
            }
        }

        Magnifier.prototype.boxOver=function(){
            var _this=this;
            this.box.onmouseover=function(){
                _this.filter.style.display="block";
                _this.max.style.display="block";
            }
        }

        Magnifier.prototype.filterMove=function(){
            var _this=this;
            this.filter.onmousemove=function(e){
                var e=e||event;
                var l=e.pageX-_this.content.offsetLeft-this.offsetWidth/2;
                var t=e.pageY-_this.content.offsetTop-this.offsetHeight/2;

                var l=l>_this.box.offsetWidth-this.offsetWidth?_this.box.offsetWidth-this.offsetWidth:(l<0?0:l);
                var t=t>_this.box.offsetHeight-this.offsetHeight?_this.box.offsetHeight-this.offsetHeight:(t<0?0:t);


                this.style.left=l+"px";
                this.style.top=t+"px";
                _this.bigImg.style.left=-2*l+"px";
                _this.bigImg.style.top=-2*t+"px";
            }
        }

        Magnifier.prototype.boxOut=function(){
            var _this=this;
            this.box.onmouseout=function(){
                _this.filter.style.display="none";
                _this.max.style.display="none";
            }
        }

        new Magnifier("#content",{
            minImg:".minImg",
            middle:".middle",
            bigImg:".bigImg",
            filter:".filter",
            box:".box",
            max:".max"
        }).init();

    
    //扫码购买
    var hide1=document.getElementById('hide');
    // console.log(hide1);
    var hide2=document.getElementsByClassName('hide');
    // console.log(hide2);
    hide1.onmouseover=function(){
        hide2[0].style.display="block";
    }
    hide1.onmouseout=function(){
        hide2[0].style.display="none";
    }






    //商品加减
    var sub=document.querySelector('.sub');
    // console.log(sub)
    var sum=document.querySelector('.sum');
    var add=document.querySelector('.add');
    
    var sumVal=sum.innerText;
    // console.log(sumVal);
    add.onclick=function(){
        sumVal++;
        sum.innerText=sumVal;
    }
    sub.onclick=function(){
        // sum.innerText=sumVal;
        if(sumVal<=1){
            sum.innerText=1;
        }else{
            sumVal--;
            sum.innerText=sumVal;
        }
    }





       //回到顶部
        var back=right.querySelector(".bottom>#back");
        back.onclick=function(){
             document.documentElement.scrollTop = document.body.scrollTop=0;
        }







 }
  
    

    
    

	
	
	

