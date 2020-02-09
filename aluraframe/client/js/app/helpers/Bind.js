class Bind {
    constructor(model, view, props) {
        let proxy = ProxyFactory.create(model,props, (model) => {
            view.update(model);
        } );
        view.update(model);

        //em js um cunstructor pode devolver qualquer coisa
        return proxy;

    }
  

}