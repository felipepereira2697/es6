class Negociacao {
    constructor(data, quantidade, valor) {
        //o this sempre aponta pra instancia que ta executando aquele momento
        //no js atual nao temos modificadores de acesso, logo quando queremos dizer
        //que uma propriedade só pode ser mudada a partir da propria classe (metodos) nos usamos o _ na frente do nome da propriedade
        //Perceba que isso é uma CONVENCAO, o programador ao ver isso deve entender q ele NAO DEVE ACESSAR A PROPRIEDADE DIRETAMENTE

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        //Quando eu uso o freeze estou congelando o objeto e assim nao é possivel alterar nenhuma propriedade desse cara
        //nesse caso funciona pois nem os metodos da nossa classe alteram as propriedades da mesma.
        Object.freeze(this);
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}