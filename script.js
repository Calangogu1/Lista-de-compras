var itensLista= [{
    id:"macarrao",
    nome:"Macarrão",
    selecionado:false
},{
    id:"tomate",
    nome:"Tomate",
    selecionado:false
},{
    id:"carne",
    nome:"Carne",
    selecionado:false
},{
    id:"ovo",
    nome:"Ovo",
    selecionado:false
}]
let somaProduto=0

function montarListaCompras(){
    var itens = document.getElementById('itens');
    itens.innerHTML= '';
    for(var item of itensLista){
        var htmlItem='<div class="item"><input '+ (item.selecionado?'checked': '') + ' id="' + item.id + '" type="checkbox" onclick="clicouProduto(\'' + item.id + '\')"/> '+
        '<label for="' + item.id + '">' + item.nome + '</label>' +
        '<button class="botaoDelete" onclick="cancelarElemento(\'' + item.id + '\')">x</button></div>';
        itens.innerHTML= itens.innerHTML + htmlItem;
    }
}
function clicouProduto(idClicado){
    var itemLista = itensLista.find(item => item.id === idClicado)
    console.log('---')
    console.log(itemLista)
    if (itemLista.selecionado === true){
        itemLista.selecionado = false
        somaProduto = somaProduto - itemLista.preco
        colocarPrecoTela(somaProduto)
    } else {
        var precoProduto = parseFloat(prompt('valor do produto','0')) 
        if (isNaN(precoProduto)){
            precoProduto=0
            alert('Preço invalido.')   
        }
        itemLista.preco=precoProduto 
        itemLista.selecionado=true
        somaProduto =precoProduto + somaProduto
        colocarPrecoTela(somaProduto)

    }
    console.log(itemLista)
}

function InserirElemento(){
    var insiraItem = document.getElementById('insiraItem');
    const value = insiraItem.value;
    itensLista.push({
        id:value,
        nome:value
    })
    montarListaCompras();
}
montarListaCompras();

function cancelarElemento(idCancelado) {
   for (item of itensLista) {
    if (item.id === idCancelado) {
        somaProduto = somaProduto - item.preco
        colocarPrecoTela(somaProduto)
        var indice= itensLista.indexOf(item);
        itensLista.splice(indice,1);
        montarListaCompras()
    }
    
   }
}

function colocarPrecoTela(preco){
    var precoHtml = document.getElementById('preco');
    precoHtml.innerHTML = " Total das compras: R$ " + preco
}