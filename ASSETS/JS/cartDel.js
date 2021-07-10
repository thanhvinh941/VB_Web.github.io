const products=[];

var itemDel=document.getElementsByClassName('btn-del');

for(var i=0;i<itemDel.length;i++){
    let btnDel = itemDel[i];
    btnDel.addEventListener('click',function(){
        let carItem = JSON.parse(localStorage.getItem('prdInCart'));
        carItem.forEach(item =>{
            if(item.name != event.target.parentElement.parentElement.children[1].textContent){
                products.push(item);
            }
        })
        localStorage.setItem('prdInCart',JSON.stringify(products))
        window.location.reload()
    })
}