
function calcular_parc(){

    //Valores coletados
    var select = document.getElementById('parc');
    var parc = select.options[select.selectedIndex].value;

    var data = document.getElementById("data").value;
    var valor = document.getElementById("valor").value;

    //Valores transformados
    var d = 19;
    var taxas = 1.03;
    valor = (valor / parc) / taxas;
    taxas = taxas - 1.03;

    d = d + 2;

    for(var i = 0; i < parc; i++){
    d = d + 30;
    
    taxas = (taxas + 0.03) * 100

    const date = new Date(2017, 2, d);
   
   console.log(date.toLocaleDateString());
   
   console.log(valor);
   console.log(taxas);

}

}