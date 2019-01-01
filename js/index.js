window.onload=function(){
	


	//关闭广告条
	var advertist=document.getElementById("advertist");
	var close=advertist.children[1];
	close.onclick=function(){
		advertist.style.display="none";
	}



	//轮播图
	var oBanner=document.getElementById('banner');
	var pics=document.getElementById("pics");
	var allLi=pics.getElementsByTagName('li');
	var aspan=document.querySelectorAll("#dir>span");
	var aBtn=document.querySelectorAll("#btn>a");
	var iNow=0;
	var iWidth=allLi[0].offsetWidth;
	var li=allLi[0].cloneNode(true);
	pics.appendChild(li);
	pics.style.width=iWidth*allLi.length+"px";
	var timer=null;
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			for(var j=0;j<aBtn.length;j++){
				aBtn[j].className=""
			}
	
			this.className="active";
			iNow=this.index;
			toImg();
		}
	}
	
	aspan[0].onclick=function(){
		if(iNow==0){
			iNow=allLi.length-2;
			pics.style.left = -(allLi.length-1)*allLi[0].offsetWidth+"px";
		}else{
			iNow--;
		}
	
		toImg();
	}
	
	
	aspan[1].onclick=function(){
		if(iNow==allLi.length-1){
			iNow=1;
			pics.style.left=0;
		}else{
			iNow++;
		}
	
		toImg();
	}
	
	//做轮播图之前一定要先做一个鼠标移入停止轮播 移除继续轮播
	oBanner.onmouseover=function(){
		clearInterval(timer);
	}
	oBanner.onmouseout=function(){
		autoplay();
	}
	
	
	function autoplay(){
		timer=setInterval(function(){
	       if(iNow == allLi.length-1){
	       	  iNow=1;
	       	  pics.style.left=0;
	       }else{
	       	  iNow++;
	       }
	
	       toImg();
		},2000)
	}
	autoplay();
	
	// 轮播的原理
	function toImg(){
		move(pics,{left:-iNow*iWidth})
	
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className="";
		}
	
		aBtn[iNow==allLi.length-1?0:iNow].className="active";
	}
    
    
    
    
    //推荐部分
    var obj=[
       {
       	"img":"./images/r1.jpg",
       	"content":"锤子（Smartisan） 坚果Pro 2s 全网通 6GB+128GB 6.01英寸全高清屏 双卡双待 实用手机",
       	"title":"●6.01英寸全高清,骁龙710",
       	"price":"¥2298.00"
       },
       {
       	"img":"./images/r2.jpg",
       	"content":"【如下架，可选择其它颜色查看】三星（SAMSUNG） Galaxy Note8 移动联通电信4G手机 双卡双待（SM-N9500）【特价商品数量有限，超出数量安排退款】",
       	"title":"●6.3英寸全视曲面屏",
       	"price":"¥5588.00"
       },
       {
       	"img":"./images/r3.jpg",
       	"content":"华为（HUAWEI）P20 6GB+128GB AI智慧全面屏 全网通 移动联通电信4G手机EML-AL00【一个ID限购一台,超量退款】",
       	"title":"● 麒麟970智慧芯片,AI摄影大师",
       	"price":"¥3888.00"
       },
       {
       	"img":"./images/r4.jpg",
       	"content":"华为（HUAWEI）Mate10 4GB+64GB 全网通 商务手机 ALP-AL00【每个ID限购1台、每个顾客限购1台】",
       	"title":"搭载人工智能芯片",
       	"price":"¥3399.00"
       },
       {
       	"img":"./images/r5.jpg",
       	"content":"【订金】预订送无线充电宝：三星 （SAMSUNG）Note9 新款手机 全网通 移动联通电信双卡双待【一个ID限购一台，下单请备注好型号和颜色】",
       	"title":"火热预售中，数量有限，先到先得",
       	"price":"¥99.00"
       },
       {
       	"img":"./images/r6.jpg",
       	"content":"【订金】预订：微软（Microsoft）Surface Go 平板电脑 运行内存4G/8G，存储64G/128G（亮铂金）【一个ID限购一台，下单请备注好型号和颜色】",
       	"title":"火热预售中，数量有限，先到先得",
       	"price":"¥88.00"
       },
       {
       	"img":"./images/r7.jpg",
       	"content":"产地马来西亚 进口戴森（Dyson）吹风机 HD01(红色普通装）",
       	"title":"●强劲数码马达",
       	"price":"¥2965.00"
       },
       {
       	"img":"./images/r8.jpg",
       	"content":"美的（Midea）省电星 小1匹 定频单冷空调 KF-23GW/Y-DA400(D3)  （白色）",
       	"title":"●高密度滤尘网， 独立除湿",
       	"price":"¥2298.00"
       }
    ];
    var obj1=[
       {
       	"img":"./images/r1.jpg",
       	"price1":"¥2298.00",
       	"btn":"加入购物车"
       },
       {
       	"img":"./images/r2.jpg",
       	"price1":"¥5588.00",
       	"btn":"加入购物车"
       },
       {
       	"img":"./images/r3.jpg",
       	"price1":"3888.00",
       	"btn":"加入购物车"
       },
       {
       	"img":"./images/r4.jpg",
       	"price1":"3399.00",
       	"btn":"加入购物车"
       },
       {
       	"img":"./images/r5.jpg",
       	"price1":"99.00",
       	"btn":"加入购物车"
       },
       {
       	"img":"./images/r1.jpg",
       	"price1":"88.00",
       	"btn":"加入购物车"
       },
       {
       	"img":"./images/r1.jpg",
       	"price1":"2965.00",
       	"btn":"加入购物车"
       },
       {
       	"img":"./images/r1.jpg",
       	"price1":"1849.00",
       	"btn":"加入购物车"
       }
    ];

  //   var str="";
  //   for(var i=0;i<obj.length;i++){
  //   	str+=`<li>
		// 	<img src="${obj[i].img}">
		// 	<div>
		// 		<div class="con">${obj[i].content}</div>
		// 		<span class="tit">${obj[i].title}</span>
		// 		<span class="price">${obj[i].price}</span>
		// 	</div>		
		// </li>`;
  //   }


    var str="";
    for(var i=0;i<obj.length;i++){
    	str+=`<li>
			<img src="${obj[i].img}">
			<div class="new1">
			    <div class="con">${obj[i].content}</div>
			    <span class="tit">${obj[i].title}</span>
				<span class="price">${obj[i].price}</span>
			</div>
			<div class="new2">
				<span class="price1">${obj1[i].price1}</span>
	 			<span class="btn">${obj1[i].btn}</span>	
			</div>
		</li>`;
    }
    
    var recom=document.getElementById("recom");
    recom.innerHTML=str;

    var oDiv=document.querySelectorAll('#recommend>#recom>li');
    // console.log(oDiv)
    var new1=document.querySelectorAll("#recommend>#recom>li>.new1");
    // console.log(new1);
    var new2=document.querySelectorAll("#recommend>#recom>li>.new2")
    // console.log(new2);
  for(var i=0;i<oDiv.length;i++){
            oDiv[i].index=i;
	    	oDiv[i].onmouseover=function(){
	    		new1[this.index].style.display="none";
	    		new2[this.index].style.display="block";
	        }
	    	oDiv[i].onmouseout=function(){
	    	    new1[this.index].style.display="block";
	    		new2[this.index].style.display="none";
	       }    	
    }
    
  // var oDiv=document.querySelectorAll('#recommend>#recom>li>div');
  // for(var j=0;j<oDiv.length;j++){
	 //    	oDiv[j].onmouseover=function(){
	 //    		var str1="";
	 //    		for(var i=0;i<obj1.length;i++){
	 //    			str1+=`<div>
		// 			<span >${obj1[i].price1}</span>
		// 			<span>${obj1[i].btn}</span>					
		// 		    </div>`;
	 //            } 
	 //    		this.innerHTML=str1;
	 //        }
	 //    	oDiv[j].onmouseout=function(){
	 //    		var str1="";
	 //    		for(var i=0;i<obj1.length;i++){
	 //    			str1+=`<div>
		// 				<div class="con">${obj[i].content}</div>
		// 			    <span class="tit">${obj[i].title}</span>
		// 			    <span class="price">${obj[i].price}</span>			
		// 		    </div>`;
	 //           } 
	 //    		this.innerHTML=str1;       
	 //       }    	
  //   }
  
  
  
  
  
  //聚划算区域
var odiv=document.querySelectorAll(".jhs>#jhs>li");
// console.log( typeof odiv)
var d1=document.getElementsByClassName('one');
var d2=document.getElementsByClassName('two');
//console.log(d2);
for(var i=0;i<odiv.length;i++){
	odiv[i].index = i;
	     odiv[i].onmouseover=function(){
	     	d1[this.index].style.display="none";
	     	d2[this.index].style.display="block";
	     }
	      odiv[i].onmouseout=function(){
	     	d2[this.index].style.display="none";
	     	d1[this.index].style.display="block";
	     }
}





 //四季区域
var odiv2=document.querySelectorAll(".jhs2>#jhs>li");
// console.log(odiv2);
// console.log(typeof odiv2);
var d11=document.getElementsByClassName('one1');
// console.log(d11);
// console.log(typeof d11);
var d12=document.getElementsByClassName('two2');
// console.log(d12);
for(var i=0;i<odiv2.length;i++){
	odiv2[i].index = i;
	     odiv2[i].onmouseover=function(){
	     	d11[this.index].style.display="none";
	     	d12[this.index].style.display="block";
	     }
	      odiv2[i].onmouseout=function(){
	     	d12[this.index].style.display="none";
	     	d11[this.index].style.display="block";
	     }
}






//味区域
var shadow=document.getElementById('shadow');
var aLi=document.querySelectorAll("#shadow>li");
var div=document.querySelectorAll("#shadow>li>div");
for(var i=0;i<aLi.length;i++){
	aLi[i].index=i;
	aLi[i].onmouseover=function(){
		div[this.index].style.display="block";
	}
	aLi[i].onmouseout=function(){
		div[this.index].style.display="none";
	}
}








// 回到顶部+吸顶导航
var logoWrap=document.getElementById("logoWrap");
var right=document.getElementById("right");
var back=right.querySelector(".bottom>#back");
// console.log(back);
window.onscroll=function(){
     var sTop=document.documentElement.scrollTop || document.body.scrollTop;
     if(sTop>=678){
     	logoWrap.style.position="fixed";
     	logoWrap.style.top=0;
     	logoWrap.style.borderBottom="2px solid #00BBD7";
     }else{
     	logoWrap.style.position="static";
     	logoWrap.style.border="none";
     }

     back.onclick=function(){
	    document.documentElement.scrollTop = document.body.scrollTop=0;
    }
}




  
  
  
  
  
  
  
  
  
 }
  
    

    
    

	
	
	

