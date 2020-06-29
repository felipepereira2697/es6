class Bind {

    //qualquer coisa que vier depois do segundo parametro seja ele 1 ou 1000 vai virar um elemento 
    //dentro do array chamado props
    constructor(model, view, ...props) {
        let proxy = ProxyFactory.create(model, props, (model) => {
            view.update(model);
        });

        //para a primeira vez
        view.update(model);

        //em Javascript um constructor pode retornar qualquer coisa, inclusive algo q nao é do tipo da classe 
        //bem diferente de java, c#
        return proxy
    }

}