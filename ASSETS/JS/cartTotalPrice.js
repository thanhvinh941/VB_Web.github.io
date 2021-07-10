function subTotal(){
    let total =0;
    let carItem = JSON.parse(localStorage.getItem('prdInCart'));
    carItem.forEach(item => {
        console.log(item.totalPrice);
        console.log(typeof item.totalPrice);
        total = item.totalPrice +=total;
    });
    document.querySelector('.basketTotal').textContent = total;
    document.querySelector('.sumTotal').textContent = total;
}

subTotal();



