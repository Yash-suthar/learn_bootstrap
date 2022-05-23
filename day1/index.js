var box = document.getElementById("box");
var box2 = document.getElementById("box2");
var fetch_button = document.getElementById("fetch_button")
  fetch_button.addEventListener("click",()=>{
    box.classList.add("spinner-border");
    box.classList.add("text-primary");
       console.log("button clicked")
      var xhr = new XMLHttpRequest();
      
      xhr.open("GET","https://dummy.restapiexample.com/api/v1/employees",true);
      xhr.getResponseHeader('Content-type','application/json')
      
      xhr.onprogress= function(){
         
          console.log("onprogress")
      }
      xhr.onload = function () {
         
          var data_obj = JSON.parse(xhr.responseText);
          var data = data_obj["data"];
          data.forEach(element => {
            var string_name = element.employee_name;
            box2.innerHTML+= `<h3> ${string_name} </h3>`;
          });
           box.classList.remove("spinner-border")
           box.classList.remove("text-primary")
      }
      xhr.send();
})




















































































