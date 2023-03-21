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
                    +"<option value="+"1"+">1X - Crédito normal</option>"+
                    +"<option value="+"2"+">2X</option>"+
                    +"<option value="+"3"+">3X</option>"+
                    +"<option value="+"4"+">4X</option>"+
                    +"<option value="+"5"+">5X</option>"+
                    +"<option value="+"6"+">6X</option>"+
                  +"</select>"+
                  +"<button onclick="+"calcular_sum_credito"+">Mostrar quando receber</button>"

                  break;
                case "m":
                    document.getElementById("show").innerHTML = 
                    "<select name="+"parc"+" id="+"parc"+">"+
                    +"<option value="+"1"+">1X - Crédito normal</option>"+
                    +"<option value="+"2"+">2X</option>"+
                    +"<option value="+"3"+">3X</option>"+
                    +"<option value="+"4"+">4X</option>"+
                    +"<option value="+"5"+">5X</option>"+
                    +"<option value="+"6"+">6X</option>"+
                  +"</select>"+
                  +"<button onclick="+"calcular_MCP_credito()"+">Mostrar quando receber</button>"
                  break;
              }

          break;

        case "D":

            switch (meio) {
                case "s":
                    console.log("Arroz")
                  break;
                case "m":
                   console.log("Pao")
                  break;
              }

          break;
      }

}



function calcular_sum_credito(){

    //Valores coletados

    var select1 = document.getElementById('parc');
    var parc = select1.options[select1.selectedIndex].value;

    var data = document.getElementById("data").value;
    var valor = document.getElementById("valor").value;

    //Valores transformados
    data = new Date(data);

    var d = data.getDay();
    var m = data.getMonth();
    var y = data.getFullYear();
    var taxas = 1.0430;


    valor = (valor / parc) / taxas;
    taxas = taxas - 1.0430;
    d = d + 2;

    

    for(var i = 0; i < parc; i++){

    d = d + 30;
    const date = new Date(y, m, d);
    

    taxas = (taxas + 0.0430) * 100;

   console.log(date.toLocaleDateString());
   
   console.log(valor);
   console.log(taxas);

   taxas = taxas / 100
    }
}

function calcular_MCP_credito(){

    //Valores coletados

    var select1 = document.getElementById('parc');
    var parc = select1.options[select1.selectedIndex].value;

    var data = document.getElementById("data").value;
    var valor = document.getElementById("valor").value;

    //Valores transformados
    data = new Date(data);

    var d = data.getDay();
    var m = data.getMonth();
    var y = data.getFullYear();
    var taxas = 1.0459;


    valor = (valor / parc) / taxas;
    taxas = taxas - 1.0459;
    d = d + 2;

    

    for(var i = 0; i < parc; i++){

    d = d + 30;
    const date = new Date(y, m, d);
    

    taxas = (taxas + 0.0430) * 100;

   console.log(date.toLocaleDateString());
   
   console.log(valor);
   console.log(taxas);

   taxas = taxas / 100

}

}