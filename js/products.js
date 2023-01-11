// dictionary with products and prices 

// checks page 
var htmlnamefull= document.URL;
let htmlIndex = htmlnamefull.lastIndexOf("/")+1;
var htmlname= htmlnamefull.substring(htmlIndex);
switch (htmlname)
{
    case 'cart.html':
        var buy = document.getElementById('buy');
        RefreshCartTable()
        setInterval(RefreshCartTable, 5000);
        buy.onclick = ()=>{
            alert('You bought everything on cart');
            sessionStorage.removeItem('products');
            window.location.replace('index.html');
        }

    break;
    case 'product-1.html':
        var PrivPers= document.getElementById("Privacy-personal");
        var PrivFami= document.getElementById("Privacy-family");
        var PrivsBuis= document.getElementById("Privacy-sbuisness");
        var PrivBuis= document.getElementById("Privacy-buisness");
        var PrivEnter= document.getElementById("Privacy-enterprise");
        PrivPers.onclick=()=>{addProductToCart('Privacy_personal',1);};
        PrivFami.onclick=()=>{addProductToCart('Privacy_family',1);};
        PrivsBuis.onclick=()=>{addProductToCart('Privacy_small_buisness',1);};
        PrivBuis.onclick=()=>{addProductToCart('Privacy_buisness',1);};
        PrivEnter.onclick=()=>{addProductToCart('Privacy_enterprise',1);};
        break;
    case 'product-2.html':
        var PrivPers= document.getElementById("Server-personal");
        var PrivFami= document.getElementById("Server-family");
        var PrivsBuis= document.getElementById("Server-sbuisness");
        var PrivBuis= document.getElementById("Server-buisness");
        var PrivEnter= document.getElementById("Server-enterprise");
        PrivPers.onclick=()=>{addProductToCart('Server_personal',1);};
        PrivFami.onclick=()=>{addProductToCart('Server_family',1);};
        PrivsBuis.onclick=()=>{addProductToCart('Server_small_buisness',1);};
        PrivBuis.onclick=()=>{addProductToCart('Server_buisness',1);};
        PrivEnter.onclick=()=>{addProductToCart('Server_enterprise',1);};
        break;
}




 /// pievieno "/" ar katru pogu !!!
// pievieno arī papildu 3 laukus
function addProductToCart(product, quantity){
    // if session is already 
    var newProduct;
    var prevProducts= JSON.parse(sessionStorage.getItem('products'));
    if(prevProducts!=null){
        if(ProductExists(product)){
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
    var newProduct = [{'name': product, 'quantity':quantity}]
    }
    sessionStorage.setItem('products', JSON.stringify(newProduct));
}
function RemoveProductFromCart(product) {
    var newProducts=[];
    var j = 0;
    var prevProducts = JSON.parse(sessionStorage.getItem('products'));
    for(var i=0; i<prevProducts.length; i++){
        if(prevProducts[i].name!=product&&prevProducts[i].quantity>1){
            newProducts[j]={'name':prevProducts[i].name, 'quantity':prevProducts[i].quantity};
            j++;
        }
        // new quantity
        else if(prevProducts[i].quantity>1){
            newProducts[j]={'name':product, 'quantity':prevProducts[i].quantity-1};
            j++;
        }
        else{

        }
    }
    if(newProducts==undefined){
        sessionStorage.removeItem('products');
    }
    else
    sessionStorage.setItem('products', JSON.stringify(newProducts));

    // if quantity is 0 delete product

    // if quantity >0 change in session 
}

function ProductExists(product) {
    var products =JSON.parse(sessionStorage.getItem("products"));
    var i;
    for (i = 0; i < products.length; i++){
        if(products[i].name==product){
            return true;
        }
    }
    return false;
}


function RefreshCartTable(){
    var prices= {
        name:['Privacy_personal','Privacy_family','Privacy_small_buisness','Privacy_buisness',
    'Privacy_enterprise','Server_personal','Server_family','Server_small_buisness','Server_buisness',
    'Server_enterprise'],
    prices:[1.99,7.99,34.83,110.50,188.96,4.99,17.99,75.83,160.5,213.96]
    };
    var cartTable= document.getElementById('productTable');
    var total= document.getElementById('productTableTotal');
    var products =JSON.parse(sessionStorage.getItem("products"))
    if(products!=null){
        // remove existing table content
        // create and add new table content
        var oldtd = document.querySelectorAll('.cartProductTable');
        oldtd.forEach(element => {
         element.remove();
        });
        if(document.getElementById('noCart') != null){
        var nocart = document.getElementById('noCart')
        cartTable.removeChild(nocart)}
        // create row for table
            var totalCount=0;
            var sum =0;
        
        for(var i=0; i<=products.length; i++){
            
            var tr = document.createElement('tr')
            tr.classList.add('cartProductTable');
            if(i==products.length){
                AddRowLast(tr,"TOTAL")
                AddRowLast(tr, " ")
                AddRowLast(tr, totalCount)
                AddRowLast(tr, sum.toFixed(2)+'€')
                AddRowLast(tr, " ")
                total.appendChild(tr);
            }
            else{

                AddRow(tr, products[i].name)
                AddRow(tr, GetPriceByName(prices, products[i].name)+'€')
                totalCount+=products[i].quantity
                AddRow(tr, products[i].quantity)
                AddRow(tr, ((GetPriceByName(prices,products[i].name))*products[i].quantity).toFixed(2)+'€');
                sum+=((GetPriceByName(prices,products[i].name))*products[i].quantity);
                addRemoveButton(tr, products[i].name);
                cartTable.appendChild(tr);
            }
        }
        
        


        buy.disabled=false;
    }
    else{ 
        var cartTable= document.getElementById('productTable');  
        if(document.getElementById('noCart') == null){      
        var heading=document.createElement('div');
                heading.appendChild(document.createTextNode('No products found!'))
                        heading.id='noCart'
          cartTable.appendChild(heading);
          buy.disabled=true;
        }
    }
}
function AddRow(element, value){
    var row1 = document.createElement('td');
    row1.innerHTML = value
    element.appendChild(row1)
}
function AddRowLast(element, value){
    var row1 = document.createElement('td');
    row1.innerHTML = value
    row1.style.fontWeight= 'bold'
    element.appendChild(row1)
}
function addRemoveButton(element, value){

    var row1 = document.createElement('td');
    var button  = document.createElement('button');
    button.onclick = ()=>{RemoveProductFromCart(value);};
    button.innerHTML = 'Remove from cart';
    button.classList.add('btn');
    button.classList.add('btn-warning');
    button.id=value.toLower+'_remove';
    row1.appendChild(button);
    element.appendChild(row1)
}

//get info form prices 
function GetPriceByName(prices, productName){
    var id=GetIdByName(prices, productName);
    return prices.prices[id];
}

function GetIdByName(prices, productName){
    var id;
      prices.name.forEach((element, index) => {
          if(element == productName){
            id=index;
             }
      });
    return id;
  }

  function GetSessionProductIDByName(product_name){
    
    var prevProducts= JSON.parse(sessionStorage.getItem('products'));

  }
