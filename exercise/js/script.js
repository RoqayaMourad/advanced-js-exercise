/*var emps = [
{ name:"ahmed", salary:3554, age:30, address:"ade" },
{ name:"ali", salary:4600, age:30, address:"ade" },
{ name:"samy", salary:1234, age:30, address:"ade" },
{ name:"sara", salary:9014, age:30, address:"ade" },
{ name:"alaa", salary:5664, age:30, address:"ade" },
{ name:"roqa", salary:3554, age:30, address:"ade" },
{ name:"maged", salary:3554, age:30, address:"ade"}
];
var x ="";
for (var i = 0; i < emps.length; i++) {
  x = x+ "<tr><td>"+emps[i].name+"</td><td>"+emps[i].salary+"</td><td>"+emps[i].age+"</td><td>"+emps[i].address+"</td></tr>"
}
document.getElementById("test").innerHTML = x ; */
//مش كويس ابدا ولا ينفع انى كل مرة اكتب الداتا في الجافا انا عايز اخدها من اليوزر 

var allcontacts = []; //ارراى فاضي عشان اخد فيه كل الكونتاكتس 


var UserNameInput = document.getElementById('userName');
var UserPhoneInput = document.getElementById('userPhone');
var UserEmailInput = document.getElementById('userEmail');
var UserAddInput = document.getElementById('userAdress');
//كل اللى عملته انى مسكت الانبتز في فار عشان اقدر اتحكم فيهم لكن كده مسكت الانبت بس مش الفاليو

function addcontact() {

    var UserNameValue = UserNameInput.value;
    var UserPhoneValue = UserPhoneInput.value;
    var UserEmailValue = UserEmailInput.value;
    var UserAddValue = UserAddInput.value;
    //مسكت الفاليوز بتاعة الانبتز 

    var onecontact = { name: UserNameValue, Phone: UserPhoneValue, Email: UserEmailValue, Address: UserAddValue };
    //فار لكل كونتاكت لوحده 
    allcontacts.push(onecontact); //هنا بقوله كل كونتاكت اعمله بوش في الاراى
    //ده كده انا سجلت كل الداتا في ارراى ومحتاج اعرضهم بقي في التابل 

    var allTrs = '' //ده فار عشان اسجل فيه محتويات الاراى عشان اعرضه
    for (var i = 0; i < allcontacts.length; i++) {
        allTrs = allTrs + "<tr><td>" + allcontacts[i].name + "</td><td>" + allcontacts[i].Phone + "</td><td>" + allcontacts[i].Email + "</td><td>" + allcontacts[i].Address + "</td></tr>"
    }

    document.getElementById("test").innerHTML = allTrs;
}