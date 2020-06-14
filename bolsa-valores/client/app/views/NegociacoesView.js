class NegociacoesView {

    constructor(elemento) {
        // elemento html onde o template será renderizado
        this._elemento = elemento;
    }
    _template(model) {
        //o join com string em branco vai criar uma string com todo array concatenado
        return `<table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                ${
                    model.negociacoes.map((item) => {
                        return `<tr>
                                    <td>
                                        ${DateHelper.dataParaTexto(item.data)}    
                                    </td>
                                    <td>
                                        ${item.quantidade}    
                                    </td>
                                    <td>
                                        ${item.valor}    
                                    </td>
                                    <td>
                                        ${item.volume}    
                                    </td>
                                </tr>`
                    }).join('')
                }
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
        `;
    }

    update(model){
        //innerHTML converte a string em elementos do dom 
        this._elemento.innerHTML  = this._template(model);
        console.log(this._elemento);
    }
}