window.onload=function(){


        //关闭广告条
        var advertist=document.getElementById("advertist");
        var close=advertist.children[1];
        close.onclick=function(){
            advertist.style.display="none";
        }
    




    	//验证用户名
    	var inp1=document.getElementById('inp1');
    	var disinp1=document.querySelector('.inp1');
    	// console.log(disinp1);
        //获得焦点事件
    	inp1.onfocus=function(){
            this.style.border="1px solid #00BAD6";
    	}
    	// 失去焦点事件
    	inp1.onblur=function(){
            this.style.border="1px solid #E6E6E6";

    		var reg={
    			reg1:/^[0-9a-zA-Z_]\w{3,}$/,    //由数字、字母、下划线组成,最少4位
    			reg2:/^\w+@[a-z0-9]{2,3}(\.com|\.cn)+$/,    //邮箱验证
    			reg3:/^[1][3,4,5,7,8][0-9]{9}$/
    		}

            var inp1Val=this.value;
            
            //用户名,邮箱,手机号
            if(!reg.reg1.test(inp1Val) || !reg.reg2.test(inp1Val) || !reg.reg3.test(inp1Val)){
            	disinp1.style.display="block";
    		      disinp1.innerHTML="该登录账号由字母数字下划线组成,最少4位";
            }
            if(reg.reg1.test(inp1Val) || reg.reg2.test(inp1Val) || reg.reg3.test(inp1Val)){
                disinp1.style.display="none";
    		}

          if(inp1Val==''){
          	    disinp1.style.display="none";
          }
    	}

    	inp1.oninput=function(){
    		var inp1Val=this.value;

    		var reg={
    			reg1:/^[0-9a-zA-Z_]\w{3,}$/,    //由数字、字母、下划线组成,最少为4位
    			reg2:/^\w+@[a-z0-9]{2,3}(\.com|\.cn)+$/,    //邮箱验证
    			reg3:/^[1][3,4,5,7,8][0-9]{9}$/     //手机号验证
    		}

      
    		if(reg.reg1.test(inp1Val)){
                disinp1.style.display="none";
    		}
    		if(reg.reg2.test(inp1Val)){
                disinp1.style.display="none";
    		}
    		if(reg.reg3.test(inp1Val)){
                disinp1.style.display="none";
    		}
    	}









    	//验证码
        var b=document.querySelector('.b');
        var y=document.querySelector('.y');
        // console.log(y);
        var s1=document.getElementById('s1');
        // console.log(s1);
        var s2=document.getElementById('s2');
        // console.log(s2);
        //获得焦点事件
        y.onfocus=function(){
        	b.style.border="1px solid #00BAD6";
        }
        //失去焦点事件
        y.onblur=function(){
        	b.style.border="1px solid #E6E6E6";
        }


        //随机验证码
        //n:需要要多少位的验证码
        function randomCode (n) {
			var str = "";
			for(var i=0;i<n;i++){
				var num = parseInt(48+Math.random()*(122-48+1));
				while((num>=58&& num<=64) || (num>=91&&num<=96)){
					num = parseInt(48+Math.random()*(122-48+1));
				}
				str+=String.fromCharCode(num);
			}

			return str;
		}

		s1.innerHTML=randomCode(4);
        var s1Val=s1.innerHTML;
		s2.onclick=function(){
			var s2Val=randomCode(4);
			s0="";
			s0+=s2Val;
			s1Val=s0;
			s1.innerHTML=s1Val;
		}
        y.oninput=function(){
            var yVal=y.value;
            // console.log(yVal);
            // console.log(s1.innerHTML);
            if(yVal == s1.innerHTML){
                last.style.display="none";
            }
            // console.log('1');
        }







		//验证密码
		var inp2=document.getElementById('inp2');
		var disinp2=document.querySelector('.inp2');
		 //获得焦点事件
        inp2.onfocus=function(){
        	this.style.border="1px solid #00BAD6";
        }
        
        //失去焦点事件
        var reg4=/^[0-9a-zA-Z]{6,20}$/;
        var inp2Val=inp2.value;

        inp2.onblur=function(){
        	this.style.border="1px solid #E6E6E6";

            var reg4=/^[0-9a-zA-Z]{6,20}$/;
            var inp2Val=inp2.value;
        	if(!reg4.test(inp2Val)){
              disinp2.style.display="block";
    		  disinp2.innerHTML="登录密码由数字和大小写字母组成,长度为6-16位";
        	}
        	if(reg4.test(inp2Val)){
              disinp2.style.display="none";
        	}

        	if(inp2Val==''){
          	    disinp2.style.display="none";
          }
        }

        inp2.oninput=function(){
        	var inp2Val=inp2.value;

        	if(reg4.test(inp2Val)){
               disinp2.style.display="none";
        	}
        }






        //确认密码
        var inp3=document.getElementById('inp3');
        var disinp3=document.querySelector('.inp3');
        var inp3Val=inp3.value;
        var inp2Val=inp2.value;

        // 获得焦点事件
        inp3.onfocus=function(){
        	 this.style.border="1px solid #00BAD6";
        }
        inp3.onblur=function(){
        	 this.style.border="1px solid #E6E6E6";
             
             var inp3Val=inp3.value;
             var inp2Val=inp2.value;
        	 if(inp3Val != inp2Val){
	            disinp3.style.display="block";
	            disinp3.innerHTML="两次输入不一致,请重新输入";
            }
             if(inp3Val == inp2Val){
                disinp3.style.display="none";
            }
        }

        inp3.oninput=function(){
             var inp3Val=inp3.value;
             var inp2Val=inp2.value;

            if(inp3Val == inp2Val){
                disinp3.style.display="block";
                disinp3.innerHTML="两次密码相同";
            }
        }






        //注册事件
        // var box=document.querySelector('.box');
        var reg2=document.getElementById('reg');
        var inp1Val=inp1.value;
        var inp3Val=inp3.value;
        var inp2Val=inp2.value;
        var yVal=y.value;
        var last=document.querySelector('.last')
        reg2.onclick=function(){
           if(inp1Val=='' && inp2Val=='' && inp3Val=='' && yVal==""){
               inp1.style.border="1px solid #00BAD6"
               disinp1.style.display="block";
               disinp1.innerHTML="请填写登录账号,最少4个字符";
               disinp2.style.display='block';
               disinp2.innerHTML="本项必填";
               last.style.display="block";
               last.innerHTML="请正确填写验证码";
           }
        }







       //回到顶部
        var back=right.querySelector(".bottom>#back");
        back.onclick=function(){
             document.documentElement.scrollTop = document.body.scrollTop=0;
        }







 }
  
    

    
    

	
	
	

