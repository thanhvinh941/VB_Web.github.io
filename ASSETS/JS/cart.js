function cartNumber(){
    let cartNumber =0;
    let carItem = JSON.parse(localStorage.getItem('prdInCart'));
    carItem.forEach(item =>{
        if(item != null){
            cartNumber = item.quantity += cartNumber;
        }
    });
    document.querySelector('.cart-number').textContent = cartNumber;

}
cartNumber();

