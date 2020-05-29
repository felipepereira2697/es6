//Forma de solicitar info ao servidor sem precisar dar reload na pagina

//Essa classe é q vai dar acesso pra recuperar info
let xhr = new XMLHttpRequest();

xhr.open('GET','https://api.github.com/users/felipepereira2697');
xhr.send(null);

//Como é assincrono
xhr.onreadystatechange = function()  {
    if(xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}