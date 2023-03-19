function mostrar(){
    var data = document.getElementById("data").value;
    data = new Date(data);
    document.getElementById("demo").innerHTML = data.getDate();
}

function parcelado(){
    
    //Valores coletados
    var data = document.getElementById("data").value;

    //Valores transformados
    var parc = 4;
    var valor = 120
    var d = 25;
    let i = 0;

    valor = valor / parc;

    d = d + 2;

    while(i < parc){
    d = d + 30;
   
   const date = new Date(2017, 5, d);
   
   console.log(date.toLocaleDateString());
   
   console.log(valor);
   
   i++;
}
}