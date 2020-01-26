class Negociacao {
    constructor(data, quantidade, valor) {
        //o this sempre aponta pra instancia que ta executando aquele momento
        //no js atual nao temos modificadores de acesso, logo quando queremos dizer
        //que uma propriedade só pode ser mudada a partir da propria classe (metodos) nos usamos o _ na frente do nome da propriedade
        //Perceba que isso é uma CONVENCAO, o programador ao ver isso deve entender q ele NAO DEVE ACESSAR A PROPRIEDADE DIRETAMENTE

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        //Quando eu uso o freeze estou congelando o objeto e assim nao é possivel alterar nenhuma propriedade desse cara
        //nesse caso funciona pois nem os metodos da nossa classe alteram as propriedades da mesma.
        //Object freeze é shallow oq significa q ele congela somente as propriedades desse objeto, no caso de objetos dentro de objetos
        //esses objetos internos, nao tem suas propriedades congeladas, e isso portanto nao garante a imutabilidade total
        Object.freeze(this);
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    get data() {
        //Fazendo o uso de programacao defensiva, exemplo do date, se nao retornamos o usando uma instancia nova
        //o programador pode usar n1.data.setDate(dia) para alterar a data e nao queremos isso
        //pra isso usamos o new Date e pegamos o time a partir da data q foi originalmente definida, assim, quando 
        //um programador tentar alterar a data, ele nao vai pegar a data formatada e sim um Long gigantesco
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}