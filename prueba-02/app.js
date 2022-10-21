//autocompletar

var nombres =["mario", "alvaro", "Raquel", "ernesto", "juan", ""]

function autocomplete(inp, arr) {
    
    var currentFocus;
    
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
      
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        
        this.parentNode.appendChild(a);
        
        for (i = 0; i < arr.length; i++) {
          
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            
            b = document.createElement("DIV");
            
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            
            b.addEventListener("click", function(e) {
                
                inp.value = this.getElementsByTagName("input")[0].value;
                
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          
          currentFocus++;
          
          addActive(x);
        } else if (e.keyCode == 38) { 
          
          currentFocus--;
          
          addActive(x);
        } else if (e.keyCode == 13) {
          
          e.preventDefault();
          if (currentFocus > -1) {
            
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      
      if (!x) return false;
      
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  
  
  autocomplete(document.getElementById("myInput"), nombres);


  //despliegue lista
var productosDesplegarPrincipal = document.querySelector("#productosDesplegarPrincipal")
var productosDesplegar = document.querySelectorAll("#productosDesplegar")
var productosSeleccion = document.querySelectorAll("#productosSeleccion")
var productosSub = document.querySelectorAll("#productosSub")


productosDesplegarPrincipal.addEventListener("click", ()=>{
    productosSeleccion.forEach(function (elemento){
        elemento.classList.toggle("desplegar")
    })
    
})
productosDesplegar.forEach((cada3, i)=>{
    productosDesplegar[i].addEventListener("click", ()=>{
        productosSub[i].classList.toggle("desplegar")
    })
})





 
// next

var nextBuscador = document.querySelector("#nextBuscador")
var nextProductos = document.querySelector("#nextProductos")
var formCheck = document.querySelector("#formCheck")
var formUser = document.querySelector("#formUser")

nextBuscador.addEventListener("click", ()=>{
        formCheck.classList.add("desplegar")
})
nextProductos.addEventListener("click", ()=>{
    formUser.classList.add("desplegar")
})

 //boton final datos
  console.log(document.querySelector("#myInput").text)
                        
  var autocompleteSubmit = document.querySelector("#autocompleteSubmit")
  var valorContrapartida = document.querySelector("#myInput")
  var buscadorCodigo = document.querySelector("#buscadorCodigo")
  var productoValue = document.querySelectorAll("#productoValue")
  var productoValueAll = document.querySelector("#productoValueAll")
  var user = document.querySelector("#user")
  autocompleteSubmit.addEventListener("click", autocomplete2, false)
  function autocomplete2 (event){
    event.preventDefault();
    console.log(valorContrapartida.value)
    console.log(buscadorCodigo.value)
    console.log(productoValueAll.value)
    console.log(user.value)
    for(var i=0; productoValue[i]; ++i ){
        if(productoValue[i].checked){
            checkedValue = productoValue[i].value;
            console.log(checkedValue)
        }
    }
    
    


  }
  
  // bloqueo lista all

  productoValueAll.addEventListener("change",()=>{
    if( productoValueAll.checked){
         productoValue.forEach(function(checkElement) {
        checkElement.checked = true;
    });
    }
    else if(productoValue.checked){
        productoValueAll.checked = false;
    }
    else{
        productoValue.forEach(function(checkElement) {
            checkElement.checked = false;
        });
    }
   
  } )