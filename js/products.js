// dictionary with products and prices 
// var products =
 var PrivPers= document.getElementById("Privacy-personal");
 var PrivFami= document.getElementById("Privacy-family");
 var PrivsBuis= document.getElementById("Privacy-sbuisness");
 var PrivBuis= document.getElementById("Privacy-buisness");
 var PrivEnter= document.getElementById("Privacy-enterprise");
 PrivPers.onclick=()=>{addProductToCart('Privacy-personal',1);};
 PrivFami.onclick=()=>{addProductToCart('Privacy-family',1);};
 PrivsBuis.onclick=()=>{addProductToCart('Privacy-small-buisness',1);};
 PrivBuis.onclick=()=>{addProductToCart('Privacy-buisness',1);};
 PrivEnter.onclick=()=>{addProductToCart('Privacy-enterprise',1);};



 /// pievieno "/" ar katru pogu !!!
// pievieno arī papildu 3 laukus
function addProductToCart(product, quantity){
    // if session is already 
    var newProduct;
    var prevProducts= JSON.parse(sessionStorage.getItem('products'));
    if(prevProducts!=null){
        console.log('is session')
        if(ProductExists(product)){
            console.log('is product is session')
            for(var i=0; i<prevProducts.length; i++){
                if(prevProducts[i].name!=product){
                    prevProducts[i]={'name':prevProducts[i].name, 'quantity':prevProducts[i].quantity};
                }
                // new quantity
                else{
                    prevProducts[i]={'name':product, 'quantity':prevProducts[i].quantity+quantity};
                }
            }
        }
        // not existing product
        else{
            console.log('no product is session')
            var l = prevProducts.length;
            for(var i=0; i<l+1; i++){
                if(i!=prevProducts.length){
                    prevProducts[i]={'name':prevProducts[i].name, 'quantity':prevProducts[i].quantity};
                }
                // new product
                else{
                    prevProducts[i]={'name':product, 'quantity':quantity};
                }
            }
        }
        var newProduct=prevProducts;
    }
    else{
        console.log('no session')
    var newProduct = [{'name': product, 'quantity':quantity}]
    }
    sessionStorage.setItem('products', JSON.stringify(newProduct));
}
function ProductExists(product) {
    var products =JSON.parse(sessionStorage.getItem("products"));
    var i;
    for (i = 0; i < products.length; i++){
        if(products[i].name==product){
            console.log(true);
            return true;
        }
    }
    console.log(false);
    return false;
}

