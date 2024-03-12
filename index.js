let items = [
    {
        pic: "product1.1",
        name: "Tuberose and Lily",
        price: 25,
        id: 0,
    },
    {
        pic: "product1.2",
        name: "Tuberose and Lily - 3 wicked",
        price: 30,
        id: 1,
    },
    {
        pic: "product2.1",
        name: "Lavender Chamomile",
        price: 25,
        id: 2,
    },
    {
        pic: "product2.2",
        name: "Lavender Chamomile - 3 wicked",
        price: 30,
        id: 3,
    },
    {
        pic: "product3.1",
        name: "Smoky Vintage Leather",
        price: 25,
        id: 4,
    },
    {
        pic: "product3.2",
        name: "Smoky Vintage Leather - 3 wicked",
        price: 30,
        id: 5,
    },
    {
        pic: "product4.1",
        name: "Cinnamon, Nutmeg, and Orange Zest",
        price: 25,
        id: 6,
    },
    {
        pic: "product4.2",
        name: "Cinnamon, Nutmeg, and Orange Zest - 3 wicked",
        price: 30,
        id: 7,
    },
    {
        pic: "product5.1",
        name: "Honeysuckle",
        price: 25,
        id: 8,
    },
    {
        pic: "product5.2",
        name: "Honeysuckle - 3 wicked",
        price: 30,
        id: 9,
    },
    {
        pic: "product6.1",
        name: "Wild Fig and Pomegranate",
        price: 25,
        id: 10,
    },
    {
        pic: "product6.2",
        name: "Wild Fig and Pomegranate - 3 wicked",
        price: 30,
        id: 11,
    },
    {
        pic: "product7.1",
        name: "Eucalyptus and Spearmint",
        price: 25,
        id: 12,
    },
    {
        pic: "product7.2",
        name: "Eucalyptus and Spearmint - 3 wicked",
        price: 30,
        id: 13,
    },
    {
        pic: "product8.1",
        name: "Grapefruit, Apricot, and Jasmine",
        price: 25,
        id: 14,
    },
    {
        pic: "product8.2",
        name: "Grapefruit, Apricot, and Jasmine - 3 wicked",
        price: 30,
        id: 15,
    },
]

let giftitems =[
    {
        pic: "gift set",
        name: "Travel Gift Box set 3 Signature Fragrance Candles",
        price: 88,
        id: 0,
    },
    {
        pic: "valentines gift set",
        name: "Premium Valentines Day Gift Set",
        price: 188,
        id: 1,
    },
]

let nocart=0;
let itemincart=[];
function indexdisplay(){
    nocart = parseInt(localStorage.getItem('nocartls'));
    document.getElementById("cartdisplay").innerHTML=nocart;
    let productlist = document.getElementById("indexproduct");
    let htmltag = "";
    items.forEach((item, i) =>{
        htmltag = "<div class='card'><img src='./image/" + item.pic + 
        ".png' class='main-image" + (item.id+1) +
        "'><div class='card-content'><h3>" + item.name +
        "</h3><p>RM" + item.price +
        ".00</p><button class='btn btn-outline-dark add-to-cart'><i class='fa-solid fa-cart-shopping'></i> Add to Cart</button></div></div>";
        productlist.innerHTML += htmltag;
    });

    let giftproductlist = document.getElementById("indexgiftproduct");
    giftitems.forEach((giftitem, i) =>{
        htmltag = "<div class='card-gift'><img src='./image/" + giftitem.pic +
                  ".png' class='main-image" + (giftitem.id+17) +
                  "'><div class='card-content' style='margin-bottom: 20px;'><h3>" + giftitem.name +
                  "</h3><p>RM" + giftitem.price +
                  ".00</p><button class='btn btn-outline-dark gift-add-to-cart'><i class='fa-solid fa-cart-shopping'></i> Add to Cart</button></div></div>";
        giftproductlist.innerHTML += htmltag;
    });

    addtocartbtn = document.querySelectorAll('.add-to-cart');
    for(let i=0;i<addtocartbtn.length;i++){
        addtocartbtn[i].addEventListener('click', ()=>{
            additem(i);
        });
    }
    giftaddtocartbtn = document.querySelectorAll('.gift-add-to-cart');
    for(let i=0;i<giftaddtocartbtn.length;i++){
        giftaddtocartbtn[i].addEventListener('click', ()=>{
            giftadditem(i);
        });
    }
}

function additem(i){
    let itemindex = parseInt(localStorage.getItem('nocartls'));
    if(itemindex){
        itemincart=JSON.parse(localStorage.getItem('itemincartls'));
        itemincart.push(items[i]);
        nocart = itemincart.length;
        localStorage.setItem('itemincartls', JSON.stringify(itemincart));
        localStorage.setItem('nocartls', nocart);
        document.getElementById("cartdisplay").innerHTML = nocart;
    }
    else{
        itemincart[0]=items[i];
        localStorage.setItem('itemincartls', JSON.stringify(itemincart));
        nocart = nocart+1;
        localStorage.setItem('nocartls', nocart);
        document.getElementById("cartdisplay").innerHTML=nocart;
    }
}
function giftadditem(i){
    let itemindex = parseInt(localStorage.getItem('nocartls'));
    if(itemindex){
        itemincart=JSON.parse(localStorage.getItem('itemincartls'));
        itemincart.push(giftitems[i]);
        nocart = itemincart.length;
        localStorage.setItem('itemincartls', JSON.stringify(itemincart));
        localStorage.setItem('nocartls', nocart);
        document.getElementById("cartdisplay").innerHTML = nocart;
    }
    else{
        itemincart[0]=giftitems[i];
        localStorage.setItem('itemincartls', JSON.stringify(itemincart));
        nocart = nocart+1;
        localStorage.setItem('nocartls', nocart);
        document.getElementById("cartdisplay").innerHTML=nocart;
    }
}
function cartpagedisplay(){
    let itemindex=parseInt(localStorage.getItem('nocartls'));
    if(itemindex){
        nocart=itemindex;
        document.getElementById("cartdisplay").innerHTML=nocart;
    }
    itemincart=JSON.parse(localStorage.getItem('itemincartls'));
    productcontainer=document.getElementById("product-container");
    if(itemincart && itemincart.length>0){
        let subtotalprice=0, shippingprice=10;
        itemincart.forEach((item,i) =>{
            let htmltag ="<div class='col-3'><img src='./image/"+item.pic+
                        ".png' class='rouded d-block mx-auto' width='100px' height='100px'></div><div class='col-6 my-3 lh-1'><p>"+item.name+
                        "</p><p>RM"+item.price.toFixed(2)+
                        "</p></div><div class='col-3 my-3'><a class='btn btn-dark delbtn'>Remove</a></div>";
            productcontainer.innerHTML+=htmltag;
            subtotalprice=subtotalprice+item.price;
        });
        document.getElementById("subtotalprice").innerHTML = subtotalprice.toFixed(2);
        document.getElementById("shippingprice").innerHTML = shippingprice.toFixed(2);
        let totalprice = subtotalprice+shippingprice;
        document.getElementById("totalprice").innerHTML= totalprice.toFixed(2);
    }
    else{
        let htmltag ="<div class='col-1'></div><div class='col-10 text-center my-5 fs-3' style='padding: 10%; background-color: lightgray; border-radius: 10px;'>No Item in Cart</div><div class='col-1'>";
        productcontainer.innerHTML+=htmltag;
        document.getElementById("subtotalprice").innerHTML = "0.00";
        document.getElementById("shippingprice").innerHTML= "0.00";
        document.getElementById("totalprice").innerHTML= "0.00";
    }
    
    let delbtn = document.querySelectorAll(".delbtn");
    for(let i=0;i<delbtn.length;i++){
        delbtn[i].addEventListener('click', ()=>{
            removeitem(i);
        });
    }
    updateCheckoutButton();
}
function removeitem(i){
    let itemincart=JSON.parse(localStorage.getItem('itemincartls'));
    itemincart.splice(i,1);
    for(let i=0;i<itemincart.length;i++){
        subtotalprice=subtotalprice+itemincart[i].price;
    }
    localStorage.setItem("itemincartls", JSON.stringify(itemincart));
    localStorage.setItem("nocartls", itemincart.length);
    location.reload();
}

function redirectToCheckout(){
    window.location.href= 'checkout.html';
}

function redirectToHomePage(){
    window.location.href = 'shop.html';
    localStorage.setItem('nocartls', 0);
    localStorage.removeItem('itemincartls');
}

function checkoutdisplay(){
    let itemindex=parseInt(localStorage.getItem('nocartls'));
    if(itemindex){
        nocart=itemindex;
        document.getElementById("cartdisplay").innerHTML=nocart;
    }
    itemincart=JSON.parse(localStorage.getItem('itemincartls'));
    productcontainer=document.getElementById("cartItemsdisplay");
    if(itemincart && itemincart.length>0){
        let subtotalprice=0, shippingprice=10;
        itemincart.forEach((item,i) =>{
            let htmltag = "<li class='list-group-item d-flex justify-content-between lh-sm'><div class='product-selected'><h6>" + item.name + 
                          "</h6></div><span class='text-body-secondary'>RM" + item.price +
                          "</span></li>";
            productcontainer.innerHTML+=htmltag;
            subtotalprice=subtotalprice+item.price;
        });
        document.getElementById("shippingprice").innerHTML = shippingprice.toFixed(2);
        let totalprice = subtotalprice+shippingprice;
        document.getElementById("totalprice").innerHTML= totalprice.toFixed(2);
    }
    else{
        document.getElementById("shippingprice").innerHTML= "0.00";
        document.getElementById("totalprice").innerHTML= "0.00";
    }

    document.getElementById("checkoutform").addEventListener("click", function (event) {
        var form = document.querySelector("form.needs-validation");
        const storedUsers = JSON.parse(localStorage.getItem('userDatals')) || [];
        const matchingUsername = storedUsers.find(user => user.username);
        const usernametxt = document.getElementById("username").value;
        if (!form.checkValidity()) {
            // Some form fields are incomplete, show a message
            alert("Please fill in all parts of the form.");
            event.preventDefault(); //Prevents the default form submission
        } 
        else if(matchingUsername !== usernametxt){
            alert("No account! Please Sign In");
            event.preventDefault();
            window.location.href = 'signin.html';
        }
        else {
            // All form fields are filled, navigate to another page
            alert("Payment successful");
            localStorage.setItem('nocartls', 0);
            localStorage.removeItem('itemincartls');
            event.preventDefault();
            window.location.href = 'index.html';
        }
    });
}
function updateCheckoutButton(){
    let isCartEmpty = itemincart.length;
    let checkoutButton = document.getElementById("checkoutbtn");
    if(isCartEmpty === 0){
        checkoutButton.disabled = true;
    }
    else{
        checkoutButton.disabled = false;
    }
}

function signupdisplay(){
    savechanges();
}
