var productnameInp = document.getElementById("ProductName")
var productpriceInp = document.getElementById("ProductPrice")
var productcompInp = document.getElementById("ProductCompany")
var productdescInp = document.getElementById("ProductDescription")
var addbtn = document.getElementById("mybtn")

var productscontainer = [];

addbtn.onclick = function() {
    addproduct()
}

function addproduct() {
    var product = {
        name: productnameInp.value,
        price: productpriceInp.value,
        company: productcompInp.value,
        desc: productdescInp.value
    }
    productscontainer.push(product)

    displayproducts();
}

function displayproducts() {
    var alltrs = "";
    for (var i = 0; i < productscontainer.length; i++) {
        alltrs += "<tr><td>" + productscontainer[i].name + "</td><td>" + productscontainer[i].price + "</td><td>" + productscontainer[i].company + "</td><td>" + productscontainer[i].desc + "</td></tr>"
    }
    document.getElementById("tablebody").innerHTML = alltrs
}