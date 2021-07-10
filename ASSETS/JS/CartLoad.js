function dispCartItem(){    
    let cartItems = JSON.parse(localStorage.getItem('prdInCart'));
    let cartContainer = document.querySelector('.cart-item');  
    if(cartItems && cartContainer){
        cartContainer.innerHTML = '';
        cartItems.forEach(item =>{
                cartContainer.innerHTML += `
                <tr class="pr-all">
                    <th class="text-center"><img src="${item.img}" alt="" style="width: 100px"></th>
                    <th class="pr-name"><span>${item.name}</span></th>
                    <th class="text-center"><span>${item.price}</span></th>
                    <th class="text-center">
                    <span>${item.quantity}</span>
                    </th>
                    <th class="text-center"><span>${item.totalPrice}</span></th>
                    <th class="text-center">
                    <button class="btn btn-danger bg-danger btn-del">Delete</button>
                  </th>
                </tr>
            `;
        });   
    }
}

dispCartItem()