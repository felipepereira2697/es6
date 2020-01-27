class NegociacaoController {

    constructor() {
         /*
            o querySelector na variável $ para criarmos um alias. Por que não funcionou? 
            O querySelector é uma função que pertence ao objeto document - chamaremos tal função de método. 
            Internamente, o querySelector tem uma chamada para o this, que é o contexto pelo qual o método é chamado. 
            Logo, o this é o document. No entanto, quando colocamos o querySelector dentro do $, ele passa a ser executado fora
             do contexto de document e isto não funciona. O que devemos fazer, então? 
             Queremos tratar o querySelector como uma função separada. Nós queremos que ao colocarmos o querySelector para o $, 
             ele mantenha a associação com o document. Para isto, usaremos o bind() :
        
        */
       let $ = document.querySelector.bind(document);
       this.inputDate = $("#data"); 
       this.inputQuantidade = $("#quantidade");
       this.inputValor = $("#valor");
    }
    adiciona(event) {
        event.preventDefault();
    
        console.log('--->'+this.inputDate.value+' '+this.inputQuantidade.value+' '+this.inputValor.value);
    }
}