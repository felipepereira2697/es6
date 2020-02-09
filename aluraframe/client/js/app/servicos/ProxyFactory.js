class ProxyFactory {
    static create(objeto, props, acao) {
        return new Proxy(objeto, {
            //Interceptar uma operacao de leitura para executar determinada acao
            get(target, prop, receiver) {
                //Se o metodo que to interceptando é adiciona ou esvazia
                if(props.includes(prop) && ProxyFactory._checkFunction(target[prop])) {
                     //Substituindo o metodo do Proxy por uma function
                     return function() {
                         //ou seja se vc tiver chamando o metodo adiciona do Proxy na verdade vc ta chamando esse metodo aqui
                         console.log(`interceptando ${prop}`);
                         //usando o self pra usar o this corretamente
                         //entao precisamos passar os parametros que o nosso metodo real precisaria no caso uma negociacao
                         //vamos fazer usando o objeto implicito arguments junto com a api de Reflect
                         //o arguments da acesso a todos os parametros da funcao quando ela é chamada.
                         console.log('--> ',this);
                         //chamando a funcao de adiciona
                         let retorno = Reflect.apply(target[prop], target,arguments);
                         //A acao pode voltar algo no return entao eu tenho que dar o return dessa acao
                         acao(target);
                         return retorno;
                     }
                }
                return Reflect.get(target,prop,receiver);
                },
                set(target, prop, value, receiver) {

                    let retorno = Reflect.set(target, prop, value, receiver);
                    if(props.includes(prop)) {
                        acao(target);    
                    }
                    return retorno;
                }
            });
    }
    static _checkFunction(func) {
        return typeof(func) == typeof(Function);
    }
}