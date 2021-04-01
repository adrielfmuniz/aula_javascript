
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";

    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por Clicar");
}

function redirecionar(){
    window.open("https://br.investing.com/");
    //window.location.href = https://br.investing.com/;
}

function trocar (elemento){
    //document.getElementById("mouseMove").innerHTML = "Obrigado por passar o Mouse";
    elemento.innerHTML = "Obrigado por Passar o Mouse";
    //alert("trocar texto");
}

function voltar (elemento){
    //document.getElementById("mouseMove").innerHTML = "Passe o mouse Aqui";
    elemento.innerHTML = "Passe o Mouse Aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange (elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade (idade){
    var validar = true;

}*/

//function setReplace(frase, nome, novo_nome){
  //  return frase.replace(nome, novo_nome);
//}

//alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

/*
var d = new Date;
    alert(d.getDay());
    alert(d.getHours());
    alert(d.getMinutes());
*/

/*
var count;
for(count=0; count <= 5; count ++){
    alert(count);
}
*/    

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count ++;
}
*/

/*
var idade = prompt ("Qual a sua idade::");
if (idade >= 18){
    alert ("Maior de Idade");
}else{
    alert ("Menor de Idade");
}
*/

/*
var frutas = [{nome:"maçâ", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert (frutas[1].nome);
*/

/*
var fruta = {nome:"maçâ", cor:"vermelha"}
console.log(fruta.nome);
alert (fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));
//console.log(lista);

//var nome = "Adriel Muniz";
//var n1 = 31;
//var n2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert (nome + " tem " + idade + " anos.");
//alert (idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"));