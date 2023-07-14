
var carcontainer=document.querySelector('#cart')

var carr=JSON.parse(localStorage.getItem('cart')) || []

displaycart(carr,carcontainer);

function displaycart(arr,container){
    container.innerHTML=""

    var ti=document.querySelector('#totalitems')
    ti.innerText=`Total items: ${arr.length}`

    arr.forEach((ele,ind)=>{
        var div=document.createElement('div')
        var img=document.createElement('img')
        img.src=ele.img
        var des=document.createElement('p')
        des.innerText=ele.name
        var price=document.createElement('p')
        price.innerText='$'+ele.price+'.00'
        var rmv=document.createElement('button')
        rmv.innerText='Remove from cart'
        rmv.addEventListener('click',function(){
            arr.splice(ind,1)
            localStorage.setItem('cart',JSON.stringify(arr))
            displaycart(arr,container)

        })
         div.append(img,des,price,rmv)
         container.append(div)
    })
   
    var sum=arr.reduce((acc,ele)=>{
        return acc+ +ele.price
    },0)

    var ta=document.querySelector('#carttotalamount')
    ta.innerText=`Toatal amount is ${sum}.00`
    var fc=document.querySelector('#finalcost')
    fc.innerText=`Total Bill is ${sum}.00`
    localStorage.setItem('userbill',JSON.stringify(sum))

}

var cce=document.querySelector('#addcoupon')
cce.addEventListener('click',function(){
    var cr=JSON.parse(localStorage.getItem('cart')) || []

    if(document.querySelector('#couponcode').value==='Masai30'){
        var s=cr.reduce((acc,ele)=>{
            return acc+ +ele.price;
        },0)
        var dis=(s*30)/100
        var tp=(s-dis).toFixed(0);
        document.querySelector('#finalcost').innerText=`Total Bill is $${tp}.00`
        localStorage.setItem('userbill',JSON.stringify(tp))
    }

})

document.querySelector('#buy').addEventListener('click',function(){

    window.location.href="../Payment/payment.html";
    
})