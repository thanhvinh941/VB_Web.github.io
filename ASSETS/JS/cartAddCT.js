let addCart = document.querySelector('#add-cart');
let product;
const products=[];
    addCart.addEventListener('click',function(){
        product = {
            img : event.target.parentElement.parentElement.parentElement.children[0].children[0].src,
            name : event.target.parentElement.parentElement.parentElement.children[1].children[0].textContent,
            price : event.target.parentElement.parentElement.parentElement.children[1].children[2].children[0].textContent,
            totalPrice : parseInt(event.target.parentElement.parentElement.parentElement.children[1].children[2].children[0].textContent),
            quantity : parseInt(event.target.parentElement.children[0].children[1].value)
            
        }
        addItemLocalProduct(product);
    })



function addItemLocalProduct(product){
    let carItem = JSON.parse(localStorage.getItem('prdInCart'));
    if(carItem === null){
        products.push(product);
        localStorage.setItem('prdInCart',JSON.stringify(products));
    }else{
        carItem.forEach(item => {
            if(product.name == item.name){
                product.quantity = item.quantity += product.quantity;
                product.totalPrice = item.totalPrice += product.totalPrice*product.quantity;
            }
            else{
                products.push(item)
            }
        });
        products.push(product)
    }
    localStorage.setItem('prdInCart',JSON.stringify(products))
    window.location.reload()
}

