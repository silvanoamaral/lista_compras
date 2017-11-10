var form = document.getElementById('formProdutos'),
    campoProduto = document.getElementById('produto'),
    campoQuantidade = document.getElementById('quantidade');
	
/*Apenas números*/  
function soNumeros(dom) { 
	dom.value = dom.value.replace(/\D/g,"");
}

form.addEventListener('submit', function(e) {
    //impede o envio do form
    e.preventDefault();

    var index = document.querySelectorAll('.lista_prod').length;			   

    var result = ShoppingLista(campoProduto,campoQuantidade,index);

    var listaProduto = document.getElementById('listaProduto');

    var div = document.createElement('div');
    div.className = "produtosAdd";
    div.id = 'posicao_'+index;

    div.innerHTML = result;

    listaProduto.appendChild(div);	

    inspecDelete();	    
});			

var ShoppingLista = function(campoProduto,campoQuantidade,index){
	return '<ul class="lista_prod">'
		+'<li>'+campoProduto.value+'</li>'
		+'<li>'+campoQuantidade.value+'</li>'
		+'<li><a class="btn btn-danger btn-xs" id="btn_excluir" data-index="'+index+'"  href="#" data-target="#delete-modal">Excluir</a></li>'
	+'</ul>';
}

function inspecDelete(){				
	var itens = document.querySelectorAll('.btn-danger');
    for (var i = 0; i <itens.length; i++) {
        itens[i].removeEventListener("click",false); // Remove para não acumular eventos duplicados no DOM e não estourar a memory leak do browser
        itens[i].addEventListener("click", function(e){
        	e.preventDefault();

        	var remove = "posicao_";
        	remove += e.target.getAttribute('data-index');
        	document.getElementById(remove).remove();
        },false); // Adiciona o evento no botão "Reservar"
    }
}