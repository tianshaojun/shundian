window.onload=function(){


      //关闭广告条
      var advertist=document.getElementById("advertist");
      var close=advertist.children[1];
      close.onclick=function(){
        advertist.style.display="none";
      }

    
    	//验证用户名
      var txt1=document.getElementById("txt1");
      //获得焦点事件
      txt1.onfocus=function(){
         this.style.border="1px solid #00BAD6"
      }
      //失去焦点事件
      txt1.onblur=function(){
        this.style.border="1px solid #E6E6E6";

        var txt1=document.getElementById("txt1");
        var txt1Val=txt1.value;
        var txt1=document.querySelector(".txt1");
        var reg={
             reg1:/^[0-9a-zA-Z_]\w{3,}$/,    //由数字、字母、下划线组成,最少4位
             reg2:/^\w+@[a-z0-9]{2,3}(\.com|\.cn)+$/,    //邮箱验证
             reg3:/^[1][3,4,5,7,8][0-9]{9}$/
        }

        if(!reg.reg1.test(txt1Val) || !reg.reg2.test(txt1Val) || !reg.reg3.test(txt1Val)){
            txt1.style.display="block";
            txt1.innerHTML="请输入正确的用户名/邮箱地址/手机号";
        }
        if(reg.reg1.test(txt1Val) || reg.reg2.test(txt1Val) || reg.reg3.test(txt1Val)){
            txt1.style.display="none";
        }
        if(txt1Val == ''){
            txt1.style.display="none";
        }

      }






      //验证密码
      var txt2=document.getElementById('txt2');
      //获得焦点事件
      txt2.onfocus=function(){
         this.style.border="1px solid #00BAD6";
      }
      //失去焦点事件
       txt2.onblur=function(){
         this.style.border="1px solid #E6E6E6";


          var reg4=/^[0-9a-zA-Z]{6,20}$/;
          var txt2=document.getElementById('txt2');
          var txt2Val=txt2.value;
          // var txt2=document.getElementById('txt2');
          var txt22=document.querySelector(".txt22");

            if(!reg4.test(txt2Val)){
               txt22.style.display="block";
               txt22.innerHTML="密码错误,请重新输入";
            }
           if(reg4.test(txt2Val)){
                txt22.style.display="none";
            }
           if(txt2Val==''){
                 txt22.style.display="none";
           }
       }
      
     
      txt2.oninput=function(){
         var txt2=document.getElementById('txt2');
         var txt22=document.querySelector(".txt22");
         var txt2Val=txt2.value;
         var reg4=/^[0-9a-zA-Z]{6,20}$/;

         if(reg4.test(txt2Val)){
               txt22.style.display="none";
         }
      }





      //登录事件
      var denglu=document.getElementById('denglu');
      var txt1Val=txt1.value;
      var txt2Val=txt2.value;
      var txt22=document.querySelector(".txt22");
      var txt1=document.querySelector(".txt1");
      denglu.onclick=function(){
        // console.log('1');
         var txt1Val=txt1.value;
         var txt2Val=txt2.value;
        if(txt1Val=="" || txt2Val==""){
            txt1.style.display="block";
            txt22.style.display="block";
            txt1.innerHTML="请填写登录账号";
            txt22.innerHTML="请填写密码";
          }
      }







      //回到顶部
      var back=right.querySelector(".bottom>#back");
      back.onclick=function(){
         document.documentElement.scrollTop = document.body.scrollTop=0;
      }




 }
  
    

    
    

	
	
	

