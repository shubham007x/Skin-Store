var arr=JSON.parse(localStorage.getItem("all-products"))||[];
var cart=JSON.parse(localStorage.getItem("cart"))||[];
function updateDisplay(array){ 
    var counter=0;
    array.forEach(function(element,index,array){
        if(counter===4){
            return;
        }
        var card = document.createElement("div");
        var imgt = document.createElement("img");
        var namet = document.createElement("h3");
        var desct= document.createElement("p");
        var pricet = document.createElement("p");
        var ratingt=document.createElement("p");
        var add = document.createElement("button"); 
    
        imgt.setAttribute("src",element.img);
        namet.textContent=element.name;
        desct.textContent=element.desc;
        ratingt.textContent="Ratings:"+element.rating;
        pricet.textContent="$"+element.price+".00";
        add.textContent="QUICK BUY";
        card.append(imgt,namet,desct,ratingt,pricet,add);
        divm.append(card);
        add.addEventListener("click",function(){
            cart.push(element);
            localStorage.setItem("cart",JSON.stringify(cart));
            alert("Item added to cart");
        });
        imgt.addEventListener("click",function(){
            localStorage.setItem("buy",JSON.stringify(element));
            window.location.href="./product/product.html"
        });
        counter++;
    });
    };
    //var divm=document.querySelector("#pro");
    var hair=arr.filter(function(element){
        return element.category=="hair";
    });
    //updateDisplay(hair,divm);
    var divm=document.querySelector("#skin");
    updateDisplay(hair,divm);