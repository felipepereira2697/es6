
// Captura a tabela
const corpoTabela = document.querySelector('[data-conteudo-tabela]');

const exibeCliente = (cpf, nome) => {
    const linha = document.createElement('tr');
 
    const conteudoLinha = `
        <tr>
            <td>${cpf}</td>
            <td>${nome}</td>
            <td></td>
        </tr>
    `;

    linha.innerHTML = conteudoLinha;
    return linha;

}


listarClientes()
.then((resolve) => {

    resolve.forEach(item => {
    
        corpoTabela.appendChild(exibeCliente(item.cpf, item.nome));
    
    }); 
})