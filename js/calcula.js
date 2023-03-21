//Parte do plataforma de pagamento
function meiopagamento(){
    var select = document.getElementById('meio');
    var meio = select.options[select.selectedIndex].value;

    switch (meio) {
        case "s":
            document.getElementById("demo").innerHTML = 
            "<select name="+"pag"+" id="+"pag"+" onchange="+"como()"+">"+
            "<option></option>"+
            "<option value="+"C"+">Crédito</option>"+
            "<option value="+"D"+">Débito</option>"+
            "</select>";
          break;
        case "m":
            document.getElementById("demo").innerHTML = 
            "<select name="+"pag"+" id="+"pag"+" onchange="+"como()"+">"+
            "<option></option>"+
            "<option value="+"C"+">Crédito</option>"+
            "<option value="+"D"+">Débito</option>"+
            "</select>";
          break;
      }

      
      
}

function como(){
    var select = document.getElementById('meio');
    var meio = select.options[select.selectedIndex].value;

    var select2 = document.getElementById('pag');
    var pag = select2.options[select2.selectedIndex].value;


    switch (pag) {

        case "C":
            
            switch (meio) {
                case "s":
                    document.getElementById("show").innerHTML = 
                    "<select name="+"parc"+" id="+"parc"+">"+
                    "<option value= 1 >1X - Á vista</option>"+
                    "<option value= 2 >2X</option>"+
                    "<option value= 3 >3X</option>"+
                    "<option value= 4 >4X</option>"+
                    "<option value= 5 >5X</option>"+
                    "<option value= 6 >6X</option>"+
                    "</select>"+
                    "<button onclick="+"calcular_sumup"+">Calcular</button>";

                  break;
                case "m":
                    document.getElementById("show").innerHTML = 
                    "<select name="+"parc"+" id="+"parc"+">"+
                    "<option value= 1 >1X - Á vista</option>"+
                    "<option value= 2 >2X</option>"+
                    "<option value= 3 >3X</option>"+
                    "<option value= 4 >4X</option>"+
                    "<option value= 5 >5X</option>"+
                    "<option value= 6 >6X</option>"+
                    "</select>" +
                    "<button onclick="+"calcular_MCP"+">Calcular</button>";
                
                  break;
              }

          break;

        case "D":

            switch (meio) {
                case "s":document.getElementById("show").innerHTML = 
                    "<button onclick="+"calcular_sumup()"+">Calcular</button>";
                  break;
                case "m":document.getElementById("show").innerHTML = 
                    "<button onclick="+"calcular_MCP()"+">Calcular</button>";
                  break;
              }

          break;
      }

}



function calcular_sumup(){

    //Todos os selects
    /*var select = document.getElementById('meio');
    var meio = select.options[select.selectedIndex].value;*/

    //Todos os Selects
    var select2 = document.getElementById('pag');
    var pag = select2.options[select2.selectedIndex].value;


    //Valores
    var data = document.getElementById("data").value;
    var valor = document.getElementById("valor").value;


    //Valores transformados
    data = new Date(data);

    var d = data.getDay();
    var m = data.getMonth();
    var y = data.getFullYear();

    switch(pag){
        case "C":

            var select1 = document.getElementById('parc');
            var parc = select1.options[select1.selectedIndex].value;

            d = d + 2;
            var taxas = 1.0430;


            valor = valor / parc;
            taxas = taxas - 1;
    

            for(var i = 0; i < parc; i++){

            d = d + 30;
            const date = new Date(y, m, d);
            
            taxas = (taxas + 0.0430) * 100;


            console.log(date.toLocaleDateString());
        
            console.log(valor.toFixed(2));
        
            console.log(taxas.toFixed(2));

            taxas = taxas / 100

    }
            break;
        case "D":
            break;
    }


}

function calcular_MCP(){

    
    /*var select = document.getElementById('meio');
    var meio = select.options[select.selectedIndex].value;*/

    //Todos os Selects
    var select2 = document.getElementById('pag');
    var pag = select2.options[select2.selectedIndex].value;


    //Valores
    var data = document.getElementById("data").value;
    var valor = document.getElementById("valor").value;


    //Valores transformados
    data = new Date(data);

    var d = data.getDay();
    var m = data.getMonth();
    var y = data.getFullYear();

    switch(pag){

        case "C":
            var select1 = document.getElementById('parc');
            var parc = select1.options[select1.selectedIndex].value;

            d = d + 2;
            var taxas = 1.0430;


            valor = valor / parc;
            taxas = taxas - 1;
    

            for(var i = 0; i < parc; i++){

            d = d + 30;
            const date = new Date(y, m, d);
            
            taxas = (taxas + 0.0430) * 100;


            console.log(date.toLocaleDateString());
        
            console.log(valor.toFixed(2));
        
            console.log(taxas.toFixed(2));

            taxas = taxas / 100

    }
            break;
        case "D":
            d = d + 1;
            var taxas = 1.0199;


            valor = valor / taxas;

            const date = new Date(y, m, d);

            taxas = (taxas - 1 ) * 100;


            console.log(date.toLocaleDateString());
            console.log(valor.toFixed(2));
            console.log(taxas.toFixed(2));

            break;
    }


}

