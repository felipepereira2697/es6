class NegociacoesView {

    constructor(elemento) {
        // elemento html onde o template será renderizado
        this._elemento = elemento;
    }
    _template() {
        
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
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
        `;
    }

    update(){
        //innerHTML converte a string em elementos do dom 
        this._elemento.innerHTML  = this._template();
        console.log(this._elemento);
    }
}