
function addToCart(item){
    // console.log(item)
    const itemList = document.getElementById("cartItems")
    // itemList.innerHTML += '<li>' + item.name + '</li>'
    itemList.innerHTML += `<li id='list-item-${item.id}'> ${item.name} - <button>Remove</button></li>`
}