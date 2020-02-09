class Bind {
    //o ... se chama rest operator a partir desse ...eu posso receber quantos parametros forem necessarios, vai cair como array
    constructor(model, view, ...props) {
        let proxy = ProxyFactory.create(model,props, (model) => {
            view.update(model);
        } );
        view.update(model);

        //em js um cunstructor pode devolver qualquer coisa
        return proxy;

    }
  

}