//Parte do plataforma de pagamento

function meiopagamento(){
    var select = document.getElementById("meio");
    var meio = select.options[select.selectedIndex].value;

    switch (meio) {
        case "s":
        document.getElementById("demo").innerHTML = 
        `<select name="pag" id="pag" onchange="como()">
        <option></option>
        <option value="C">Crédito</option>
        <option value="D">Débito</option>
        </select>`;

          break;

        case "m":
        document.getElementById("demo").innerHTML = 

        `<select name="pag" id="pag" onchange="como()">
        <option></option>
        <option value="C">Crédito</option>
        <option value="D">Débito</option>
        </select>`;

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
                   `<select name="parc" id="parc">
                   <option value="1">1X - Á vista</option>
                   <option value="2">2X</option>
                   <option value="3">3X</option>
                   <option value="4">4X</option>
                   <option value="5">5X</option>
                   <option value="6">6X</option>
                   </select>
                   <button onclick="calcular_sumup()">Calcular</button>`;

                  break;
                case "m":
                    document.getElementById("show").innerHTML = 
                    `<select name="parc" id="parc">
                    <option value= 1 >1X - Á vista</option>
                    <option value= 2 >2X</option>
                    <option value= 3 >3X</option>
                    <option value= 4 >4X</option>
                    <option value= 5 >5X</option>
                    <option value= 6 >6X</option>
                    </select> 
                    <button onclick="calcular_MCP()">Calcular</button>`;
                
                  break;
              }

          break;

        case "D":

            switch (meio) {
                case "s":document.getElementById("show").innerHTML = 
                    `<button onclick="calcular_sumup()">Calcular</button>`;
                  break;
                case "m":document.getElementById("show").innerHTML = 
                    `<button onclick="calcular_MCP()">Calcular</button>`;
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

    var d = data.getDate();
    var m = data.getMonth();
    var y = data.getFullYear();

    //Essa parte ela vai gerar um html de tabela
    document.getElementById("table").innerHTML=
        `<table class="fl-table">
        <thead>
        <tr>
        <th>Meio de pagamento</th>
        <th>Dia que vai receber</th>
        <th>Dia da semana</th>
        <th>Valor recebido</th>
        <th>Taxas</th>
        </tr>
        </thead>
        <tbody id="f-table">
        </tbody>
        </table>`;

    

    switch(pag){
        case "C":

            var select1 = document.getElementById('parc');
            var parc = select1.options[select1.selectedIndex].value;

            var taxas = 1.0090 + ((parc - 1) / 100);
            var tx_total = 0.9;

            valor = (valor / parc) / taxas;

            for(var i = 1; i <= parc; i++){

                data = new Date(y, m, d + 31);
                var d = data.getDate();
                var m = data.getMonth();
                var y = data.getFullYear();
                var s = data.getDay();
                var dia_semana;
                

                switch(s){
                    case 0:
                        var data = new Date(y, m, d + 1);
                        var d = data.getDate();
                        var m = data.getMonth();
                        var y = data.getFullYear();
                        dia_semana = "Segunda";
                        break;
                    case 1:
                        dia_semana = "Segunda";
                        break;
                    case 2:
                        dia_semana = "Terça";
                        break;
                    case 3:
                        dia_semana = "Quarta";
                        break;
                    case 4:
                        dia_semana = "Quinta";
                        break;
                    case 5:
                        dia_semana = "Sexta";
                        break;
                    case 6:
                        var data = new Date(y, m, d + 2);
                        var d = data.getDate();
                        var m = data.getMonth();
                        var y = data.getFullYear();
                        dia_semana = "Segunda";
                }

                p = i + 1;

                var test = document.createElement("tr");
                test.innerHTML = "<th>Crédito Parcelado "+i+"X"+"</th>"+
                "<th>"+d+"/"+m+"/"+y+"</th>"+
                "<th>"+dia_semana+"</th>"+
                "<th>"+valor.toFixed(2)+" R$</th>"+
                "<th>"+tx_total+"%</th>"; 

                document.getElementById("f-table").appendChild(test);

                tx_total = tx_total + 1;

    }
            break;
        case "D":

            var taxas = 1.0090;


            valor = valor / taxas;

            var data = new Date(y, m, d + 2);
            var d = data.getDate();
            var m = data.getMonth();
            var y = data.getFullYear();
            var s = data.getDay();
            var dia_semana;

            taxas = (taxas - 1 ) * 100;


            switch(s){
                case 0:
                    var data = new Date(y, m, d + 1);
                    var d = data.getDate();
                    var m = data.getMonth();
                    var y = data.getFullYear();
                    dia_semana = "Segunda";
                    break;
                case 1:
                    dia_semana = "Segunda";
                    break;
                case 2:
                    dia_semana = "Terça";
                    break;
                case 3:
                    dia_semana = "Quarta";
                    break;
                case 4:
                    dia_semana = "Quinta";
                    break;
                case 5:
                    dia_semana = "Sexta";
                    break;
                case 6:
                    var data = new Date(y, m, d + 2);
                    var d = data.getDate();
                    var m = data.getMonth();
                    var y = data.getFullYear();
                    dia_semana = "Segunda";
            }


            document.getElementById("f-table").innerHTML=
            "<tr>"+
                "<th>Débito</th>"+
                "<th>"+d+"/"+m+"/"+y+"</th>"+
                "<th>"+dia_semana+"</th>"+
                "<th>"+valor.toFixed(2)+"</th>"+
                "<th>"+taxas.toFixed(1)+"%</th>"+
            "</tr>";

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

    var d = data.getDate();

    var s = data.getDay();
    var dia_semana;
    
    var m = data.getMonth();
    var y = data.getFullYear();

    //Essa parte ela vai gerar um html de tabela
    document.getElementById("table").innerHTML=
    `<table class="fl-table">
    <thead>
    <tr>
    <th>Meio de pagamento</th>
    <th>Dia que vai receber</th>
    <th>Dia da semana</th>
    <th>Valor recebido</th>
    <th>Taxas</th>
    </tr>
    </thead>
    <tbody id="f-table">
    </tbody>
    </table>`;

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


                switch(s){
                    case 0:
                        d = d + 1;
                        dia_semana = "Segunda";
                        break;
                    case 1:
                        dia_semana = "Segunda";
                        break;
                    case 2:
                        dia_semana = "Terça";
                        break;
                    case 3:
                        dia_semana = "Quarta";
                        break;
                    case 4:
                        dia_semana = "Quinta";
                        break;
                    case 5:
                        dia_semana = "Sexta";
                        break;
                    case 6:
                        d = d + 2;
                        dia_semana = "Segunda";
                }

                taxas = taxas / 100

    }
            break;
        case "D":
            d = d + 1;
            var taxas = 1.0199;


            valor = valor / taxas;

            const date = new Date(y, m, d);

            taxas = (taxas - 1 ) * 100;

            switch(s){
                case 0:
                    d = d + 1;
                    dia_semana = "Segunda";
                    break;
                case 1:
                    dia_semana = "Segunda";
                    break;
                case 2:
                    dia_semana = "Terça";
                    break;
                case 3:
                    dia_semana = "Quarta";
                    break;
                case 4:
                    dia_semana = "Quinta";
                    break;
                case 5:
                    dia_semana = "Sexta";
                    break;
                case 6:
                    d = d + 2;
                    dia_semana = "Segunda";
            }

            document.getElementById("f-table").innerHTML=
            "<tr>"+
                "<th>Débito</th>"
                "<th>"+date+"</th>"
                "<th>"+dia_semana+"</th>"
                "<th>"+valor+"</th>"
                "<th>"+taxas+"</th>"
            "</tr>";

            /*<th>Meio de pagamento</th>
    <th>Dia que vai receber</th>
    <th>Dia da semana</th>
    <th>Valor recebido</th>
    <th>Taxas</th>*/
            break;
    }


}

