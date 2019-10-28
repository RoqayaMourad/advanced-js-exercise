var productnameInp = document.getElementById("ProductName")
var productpriceInp = document.getElementById("ProductPrice")
var productcompInp = document.getElementById("ProductCompany")
var productdescInp = document.getElementById("ProductDescription")
var addbtn = document.getElementById("mybtn")
    //مسكت الانبتز
var productscontainer = []; //array for products

addbtn.onclick = function() {
        addproduct();
        displayproducts();
        clearinputs()
    } //فانكشن لامم كل الفانكشنز بحيث الكود يبقي مرتب هيضيف منتج وبعدين يعرضه وبعدين يكلير الفورم

function addproduct() {
    var product = {
            name: productnameInp.value,
            price: productpriceInp.value,
            company: productcompInp.value,
            desc: productdescInp.value
        } //اوبجكت لكل منتج 
    productscontainer.push(product) //هعمل بوش لكل منتج في الاراى 
}

function displayproducts() {
    var alltrs = "";
    for (var i = 0; i < productscontainer.length; i++) {
        alltrs += '<div class="col-md-3"><div class="product border-danger-2"><h3>' + productscontainer[i].name + '</h3><p>' + productscontainer[i].desc + '</p><p class=" text-danger">' + productscontainer[i].price + '</p><p class=" text-info">' + productscontainer[i].company + '</p><button class="btn btn-danger" onclick="deleteProduct(' + i + ')">delete</button></div></div>'
    } //الاى دى اللى هيا رقم البرودكت
    document.getElementById("rowdata").innerHTML = alltrs
} //فانكشن عادية لعرض المنتج 

function clearinputs() {
    var inputs = document.getElementsByClassName('form-control');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = ""
    }
} //فانكشن عشان افضي الفورم

function deleteProduct(id) {
    productscontainer.splice(id, 1);
    displayproducts();
} //الباراميتر ده مش محدد ممكن احط اى حاجة 
//لما اضغط يمسح المنتج ده