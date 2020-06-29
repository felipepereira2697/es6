class ProxyFactory {

    static create(objeto, props, acao) {

        return new Proxy(objeto, {
            get(target, prop, receiver){
                if(props.includes(prop) && ProxyFactory._isFunction(target[prop])){
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
            set(target, prop, value, receiver) {

                if(props.includes(prop)) {
                    target[prop] = value;
                    acao(target);
                }
                return Reflect.set(target, prop, value, receiver);
                
            }
        })
    }

    static _isFunction(func){

        return typeof func == typeof(Function);
    }
}