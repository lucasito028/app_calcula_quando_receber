function mostrar(){
    var data = document.getElementById("data").value;
    data = new Date();
    document.getElementById("demo").innerHTML = data.getDate();
}