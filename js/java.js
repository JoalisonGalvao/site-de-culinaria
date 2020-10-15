function cadastro(){
	var n = document.getElementById('nome');
	var s = document.getElementById('sobrenome');
	var e = document.getElementById('email');
	var se = document.getElementById('senha');
	var d = document.getElementById('dia');
	var m = document.getElementById('mes');
	var a = document.getElementById('ano');

	if (n.value != '') {
		if(s.value != ''){
			if(e.value != ''){
				if(se.value != ''){
					if(d.value != ''){
						if(m.value != ''){
							if(a.value != ''){
								document.getElementById('aviso').innerHTML = 'Olá, ' +n.value +' ' +s.value 
								+' nós o lhe infomaremos sebre novas receitas por meio de seu email '
								+e.value;

							}else{document.getElementById('aviso').innerHTML = 'selecione o dia do seu nascimento'}

						}else{document.getElementById('aviso').innerHTML = 'Selecione o mês do seu nascimento'}

					}else{document.getElementById('aviso').innerHTML = 'Selecione o ano do seu nascimento'}


				}else{document.getElementById('aviso').innerHTML = 'Insira sua senha'}

			}else{document.getElementById('aviso').innerHTML = 'Insira seu email'}


		}else{document.getElementById('aviso').innerHTML = 'Insira seu sobrenome'}


	}else{document.getElementById('aviso').innerHTML = 'Insira seu nome'}
}
// Início da criação do Modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})