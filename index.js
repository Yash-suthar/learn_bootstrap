var array = ["yash","vandan","bhavya","arth","hiten","satyendra"]
var div_string
var box = document.getElementById("box");
array.forEach(element => {
    div_string = `<div class='col-3'>${element}</div>`;
    box.innerHTML +=div_string;
});























































































let hello_string = "hello";
const this_label = "this is const";
console.log(this_label);
function hello(){
    
    var hello_string = "this";
    console.log(hello_string);
}
hello();
console.log(hello_string);
