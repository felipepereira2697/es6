let campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor"),
]

console.log(campos);
let tBody = document.querySelector("table tbody");
document.querySelector(".form").addEventListener('submit',function(event){
    event.preventDefault();
    let tr = document.createElement('tr');
    //pra cada campo de campos ele vai executar a function
    campos.forEach(function(campo){
        let td = document.createElement('td');
        td.textContent = campo.value;
        //adicionar o filho la tr
        tr.appendChild(td);
    })

    let tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tBody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
    
});