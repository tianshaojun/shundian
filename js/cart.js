window.onload=function(){

var cart=document.getElementById('cart');
var aInput=cart.querySelectorAll('table>tbody>tr>td>input');
var all=document.querySelectorAll(".all");

cart.onclick=function(e){
    var e=e||event;
    var target=e.target || e.srcElement;
    

    //点击全选按时
    if(target.className == 'all'){
        if(target.checked){
            for(var i=0;i<aInput.length;i++){
                aInput[i].checked='checked';
            }
        }else{
            for(var i=0;i<aInput.length;i++){
                aInput[i].checked='';
            }
        }
    }
    //如果所有的选中，则全选按钮选中，如果有一个没选中，则全选按钮不选
    var flag=true;
    for(var j=0;j<aInput.length;j++){
        if(!aInput[j].checked){
            flag=false;
            break;
        }
    }
    if(flag){
        all[0].checked='checked';
        all[1].checked='checked';
    }else{
        all[0].checked='';
        all[1].checked='';
    }


    //点击-号按钮
    if(target.className == 'sub'){
        var inp=target.nextElementSibling;
        if(inp.innerHTML<=1){
            inp.innerHTML=1;
        }else{
            inp.innerHTML--;
        }
        //获取单价
        var price1=target.parentNode.parentNode.previousElementSibling.previousElementSibling.innerText.slice(1);
        var price2=target.parentNode.parentNode.previousElementSibling.innerText.slice(1);
        var price=price1-price2;
        //总价
        var sumpri=target.parentNode.parentNode.nextElementSibling;
        sumpri.innerText="¥"+price*inp.innerHTML+'.00';
    }
    //点击+号按钮
    if(target.className == 'add'){
        var inp=target.previousElementSibling;
        inp.innerHTML++;
        //单价
        var price1=target.parentNode.parentNode.previousElementSibling.previousElementSibling.innerText.slice(1);
        var price2=target.parentNode.parentNode.previousElementSibling.innerText.slice(1);
        var price=price1-price2;
        //总价
        var sumpri=target.parentNode.parentNode.nextElementSibling;
        sumpri.innerText="¥"+price*inp.innerHTML+'.00'; 
    }


    //点击删除按钮
    if(target.className == 'del'){
        target.parentNode.parentNode.remove();
    }
    if(target.className == 'DEL'){
        var check=target.previousElementSibling;
        var check1=check.querySelector('input')

        if(check1.checked || all.checked){
            target.parentNode.previousElementSibling.remove();
        }
        for(var i=0;i<aInput.length;i++){
            if(aInput[i].checked){
                aInput[i].parentNode.parentNode.remove();
            }
        }
    }



    //所有商品的总数量和总价格
    var aNum=document.querySelectorAll('.add');
    var num=0;
    var sum=0;
    var a=0;
    var hui=0;
    for(var i=0;i<aNum.length;i++){
        if(aNum[i].parentNode.parentNode.parentNode.firstElementChild.firstElementChild.checked){
            num+=Number(aNum[i].previousElementSibling.innerHTML);
            sum+=Number(aNum[i].parentNode.parentNode.nextElementSibling.innerText.slice(1));
            //订单优惠金额
            h=Number(aNum[i].parentNode.parentNode.previousElementSibling.innerText.slice(1));
            hui+=h*aNum[i].previousElementSibling.innerText;
            // console.log(hui);
        }

        a+=Number(aNum[i].previousElementSibling.innerHTML)   
    }

        var b=document.getElementsByTagName('b');
        var em=document.getElementsByTagName('em');
        var i=document.getElementsByTagName('i');
        var hui1=document.querySelector(".hui1");
        b[0].innerHTML=num;
        em[0].innerHTML=a;
        i[0].innerHTML=sum+'.00';
        hui1.innerText="¥"+hui;
   }




 }
  
    

    
    

	
	
	

