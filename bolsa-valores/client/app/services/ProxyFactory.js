class ProxyFactory {

    static create(objeto, props, acao) {

        return new Proxy(new ListaNegociacoes(), {
            get(target, prop, receiver){
                if(props.includes(prop) && typeof(target[prop] == typeof(Function))){
                    return function() {
                        console.log(`Interceptando ${prop}`);
                        console.log(`Args ${arguments[0]}`);
                        console.log(`Args2 ${arguments[1]}`);
                        console.log(`args length ${arguments.length}`);
                        
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target)
                    }
                }
                return Reflect.get(target, prop, receiver);
            },

            //se vc nao for um metodo, vc pode ser uma propriedade
        })
    }
}