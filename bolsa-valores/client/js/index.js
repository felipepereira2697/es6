let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];
let tbody = document.querySelector('table tbody');
document.querySelector('.form').addEventListener('submit', function(evemt){
    event.preventDefault();
    let tr = document.createElement('tr');
    campos.forEach((campo) => {
        let td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });
    let volume = document.createElement('td');
    volume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(volume);
    tbody.appendChild(tr);

    //limpando deposi de inserir
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
    
});