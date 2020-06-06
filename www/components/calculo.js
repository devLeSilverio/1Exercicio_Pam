
$(document).on("click","#calc",function(){
var numero = $("#num").val();
var continha;
var resultado;

//o br não funciona de jeito nenhum :(
for(continha= 0; continha<=numero; continha++){
resultado = numero * continha;
document.getElementById("result").innerHTML += numero + " X " + continha + " = " + resultado + "  ";
};

});

