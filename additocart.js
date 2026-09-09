
const product =[
    {
        id:0,
        Image: 'image/addi1.jpeg',
        title: 'Cartoon Astronut Tshirt',
        price:$57,
    },
    {
        id:1,
        Image: 'image/a2.jpeg',
        title: 'Nike named T-shirt',
        price:$76,
    },
    {
        id:2,
        Image: 'image/a3.avif',
        title: 'Regular Fit Polo shirt',
        price:$43,
    },
    {
        id:3,
        Image: 'image/a4.webp',
        title: 'Ladies -cropped Fitted T-shirt',
        price:$56,
    }
];
const categories =[...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML=categories.map((item)=>
{
    var{image,title,price}=item;
    return(
        `<div class='box'>
        <div class='img-box'>
        <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtpcart("+(i++)+")'> add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')
var cart=[];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}
function displaycart(a){
    let j=0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if (cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML="$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML= cart.map((items)=>
        {
            var {image,title,price}=items;
            total=total+price;
            document.getElementById("total").innerHTML="$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
                
            );
        }).join('');
    }
}

