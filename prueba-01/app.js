

// aparecer buscador productos
var buscadorCompleto = document.querySelector("#buscadorCompleto")

buscadorCompleto.addEventListener("focus", ()=>{
    var tabla = document.querySelector("#tabla")
    tabla.classList.add("activo")
})

// aparecer cobertura

var all = document.querySelector("#all");
var usuario = document.querySelector("#usuario")
all.addEventListener("click", ()=> {
    usuario.classList.add("activo")
})

//aparecer tabla

var dinamic = document.querySelector("#dinamic")
var enviar = document.querySelector("#enviar")
enviar.addEventListener("click", ()=>{
    dinamic.classList.add("activo_flex")
})




// desplegable productos

var products = document.querySelector("#products");
var subcontainer = document.querySelector("#subcontainer");


products.addEventListener("click", despliegePrincipal);
function despliegePrincipal(){
    subcontainer.classList.toggle("activo")
    
}
var all = document.querySelector("#all");
var resto = document.querySelector("#resto");

all.addEventListener("click", despliegeAll);
function despliegeAll(){
    resto.classList.toggle("activo")
    
}
var tercero = document.querySelectorAll("#tercero")
var cuarto = document.querySelectorAll("#cuarto")

tercero.forEach((cada3, i)=>{
    tercero[i].addEventListener("click", ()=>{
        cuarto[i].classList.toggle("activo")
    })
})
//selector all
var allCheckbox = document.querySelector("#allCheckbox")
var isChecked = allCheckbox.checked;
function all_selector_on(){
    if(isChecked){
        console.log("hola")
    }
}
all_selector_on();
var allCheckbox = document.getElementById('allCheckbox')
var todosCheck = document.querySelectorAll('#resto input[type=checkbox]');
allCheckbox.addEventListener("change", ()=>{
    if(allCheckbox.checked) {
  
        
        todosCheck.forEach(function(element){
            element.checked = true
        })
        
      }
      if (todosCheck.checked) {
        allCheckbox.checked = false
      } 
      else{
        
        todosCheck.forEach(function(element){
            element.checked = false
        })
      }
})
function checkAll() {
    document.querySelectorAll('#resto input[type=checkbox]').forEach(function(checkElement) {
        checkElement.checked = true;
    });
}



