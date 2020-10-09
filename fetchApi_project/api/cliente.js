listarClientes = () => {

    return fetch('http://localhost:4000/clientes')
    .then((resolve) => {
        return resolve.json();
    })
    .then(json => {
        return json;
    })
    .catch(error => {
        console.warn(error);
    })
}
