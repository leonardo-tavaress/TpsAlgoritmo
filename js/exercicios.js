
function l1ex1(){
	// EQ2G = Equação 2 Grau
	var n1 = Number(document.all['entradaEQ2G1'].value);
	var n2 = Number(document.all['entradaEQ2G2'].value);
	var n3 = Number(document.all['entradaEQ2G3'].value);
	var pResposta =document.all['saidaEQ2G'];
	var delta;
	delta = ((n2*n2)-(4*n1*n3));
	if(delta == 0)
	{
		pResposta.innerHTML =  "Resposta: A raiz não pode ser 0";
	}
	else if(delta < 0)
	{
		pResposta.innerHTML =  "Resposta: Não tem raiz";
	}
	else
	{
		var x1 = ((-n2)+(Math.sqrt(delta)))/(2*n1);
		var x2 = ((-n2)-(Math.sqrt(delta)))/(2*n1);
		pResposta.innerHTML = "Resposta: X1: "+x1.toFixed(2)+" X2: "+x2.toFixed(2);
	}

}

function verificaNota(obj){
	var n = obj.value;

	if (n < 0 || n > 10) {
		obj.value = null;
	}
}
function l1ex2(){
	// MP = Média Ponderada
	var n1 = Number(document.all['entradaMP1'].value);
	var n2 = Number(document.all['entradaMP2'].value);
	var n3 = Number(document.all['entradaMP3'].value);
	var pResposta =document.all['saidaMP'];

	var media = ((n1*2)+(n2*3)+(n3*5))/10
	if(media >= 0 && media < 5)
	{
		pResposta.innerHTML = "Média ponderada: "+media.toFixed(2)+" - Conceito E";
	}
	else if (media >= 5 && media < 6) {
		pResposta.innerHTML = "Média ponderada: "+media.toFixed(2)+" - Conceito D";
	}
	else if (media >= 6 && media < 7) {
		pResposta.innerHTML = "Média ponderada: "+media.toFixed(2)+" - Conceito C";
	}
	else if (media >= 7 && media < 8) {
		pResposta.innerHTML = "Média ponderada: "+media.toFixed(2)+" - Conceito B";
	}
	else if (media >= 8 && media <= 10) {
		pResposta.innerHTML = "Média ponderada: "+media.toFixed(2)+" - Conceito A";
	}
	else
	{
		pResposta.innerHTML = "Valores incorretos, média menor que 0 ou maior que 10.";
	}

}

function l1ex3(){
	// OC = Ordem Crescente
	var n1 = Number(document.all['entradaOC1'].value);
	var n2 = Number(document.all['entradaOC2'].value);
	var n3 = Number(document.all['entradaOC3'].value);
	var pResposta =document.all['saidaOC'];

	pResposta.innerHTML = "Resposta: ";
	if(n1 > n2 && n2> n3)
	{
		pResposta.innerHTML += n1+" > "+n2+" > "+n3;
	}
	else if(n1> n3 && n3 > n2)
	{
		pResposta.innerHTML += n1+" > "+n3+" > "+n2;
	}
	else if(n2> n1 && n1 > n3)
	{
		pResposta.innerHTML += n2+" > "+n1+" > "+n3;
	}
	else if(n2> n3 && n3 > n1)
	{
		pResposta.innerHTML += n2+" > "+n3+" > "+n1;
	}
	else if(n3> n1 && n1 > n2)
	{
		pResposta.innerHTML += n3+" > "+n1+" > "+n2;
	}
	else if(n3> n2 && n2 > n1)
	{
		pResposta.innerHTML += n3+" > "+n2+" > "+n1;
	}
	else if(n1 == n2 && n1 > n3)
	{
		pResposta.innerHTML += n1+" = "+n2+" > "+n3;
	}
	else if(n1 == n2 && n1 < n3)
	{
		pResposta.innerHTML += n3+" > "+n1+" = "+n2;
	}
	else if(n1 == n3 && n1 > n2)
	{
		pResposta.innerHTML += n1+" = "+n3+" > "+n2;
	}
	else if(n1 == n3 && n1 < n2)
	{
		pResposta.innerHTML += n2+" > "+n1+" = "+n3;
	}
	else if(n2 == n3 && n2 > n1)
	{
		pResposta.innerHTML += n2+" = "+n3+" > "+n1;
	}
	else if(n2 == n3 && n2 < n1)
	{	
		pResposta.innerHTML += n1+" > "+n2+" = "+n3;
	}
	else 
	{
		pResposta.innerHTML += "Todos os números são iguais."
	}


}

function l1ex4(){
	// DCM = Data Cronologicamente Maior
	var d1 = Number(document.all['entradaDCMD1'].value);
	var m1 = Number(document.all['entradaDCMM1'].value);
	var a1 = Number(document.all['entradaDCMA1'].value);
	var d2 = Number(document.all['entradaDCMD2'].value);
	var m2 = Number(document.all['entradaDCMM2'].value);
	var a2 = Number(document.all['entradaDCMA2'].value);
	var pResposta =document.all['saidaDCM'];
	var data1 = 0, data2 = 0;

	data1 = (a1*365)+(m1*30)+d1;
	data2 = (a2*365)+(m2*30)+d2;

	if (data1>data2) {
		pResposta.innerHTML = "Data Cronologicamente maior: " + d2+"/"+m2+"/"+a2;
	}else if(data2> data1){
		pResposta.innerHTML = "Data Cronologicamente maior: " + d1+"/"+m1+"/"+a1;
	}
	else{
		pResposta.innerHTML = "Datas iguais";
	}

}
var operacao = "soma";//Global com a operaçao desejada
function l1ex5(){
	// RDB = Radio button
	var nRaiz = Number(document.all['entradaRAIZ'].value);
	var ns1 = Number(document.all['entradaSOMAR1'].value);
	var ns2 = Number(document.all['entradaSOMAR2'].value);
	var pResposta =document.all['saidaRDB'];

	if(operacao == "soma")
	{
		pResposta.innerHTML = "Resultado = "+(ns1+ns2).toFixed(2);
	}
	else
	{
		pResposta.innerHTML = "Resultado = "+(Math.sqrt(nRaiz)).toFixed(6);
	}
}
function changeOperation(op){
	op = op.value;//Recuperando o value do rdb selecionado
	//Zerando os inputs
	document.all['saidaRDB'].innerHTML = "Resultado =";
	document.all['entradaRAIZ'].value = null;
	document.all['entradaSOMAR1'].value = null;
	document.all['entradaSOMAR2'].value = null;

	if (op == "rdbSOMA") {
		//Ocultar coisas da raiz
		document.all['itensRaiz'].style = "display: none;"; 
		//Mostrar coisas da soma
		document.all['itensSoma'].style = "display: block;";		
		
		operacao = "soma";//Global indicando a operação
	}
	else{

		//Ocultar coisas da soma
		document.all['itensSoma'].style = "display: none;";
		//Mostrar coisas da raiz
		document.all['itensRaiz'].style = "display: block;";	
		operacao = "raiz";//Global indicando a operação
	}
}

var iSalario = 1; //Global com o indice do salario
var qtdAssalariados = 25; //Quantia de salarios à serem calculados
function l2ex1(){
	var pCalcular = document.all['pCalcular'];
	var pResposta = document.all['saidaSalario'];
	var pErro = document.all['erroSalario'];
	var lblSalario = document.all['lblSalario'];
	var entrada = document.all['entradaSalario'];

	var sal = Number(entrada.value);

	if(iSalario <= qtdAssalariados){
		pErro.style = "display:none";//ocultado erro passado
		if (sal > 0) {
			
			var salFinal = 0,bonificacao =0,auxEscola = 0;			

			//Obtendo o valor dos beneficios
			if(sal <= 500)
				bonificacao = 0.05;		
			else if(sal <=1200)
				bonificacao = 0.12;	
			if (sal <= 600) 
				auxEscola = 150;
			else
				auxEscola = 100;

			//Calculando e exibindo dois por linha
			salFinal = (sal + (sal * bonificacao)) + auxEscola;
			pResposta.innerHTML += iSalario+"º Salário : "+ salFinal;
			if( iSalario % 2 == 0)
				pResposta.innerHTML += "<br>";
			else if (iSalario != qtdAssalariados)
				pResposta.innerHTML += " | ";
			
			iSalario++;	

			//Atualzando a mensagem da label e verificando o estado da aplicação
			lblSalario.innerHTML = "Digite o " + (iSalario) + "º Salário: ";
			if(iSalario == qtdAssalariados)
				pCalcular.innerHTML = "Finalizar";

		}else{
			pErro.style ="display:block;color: red;";
		}
			
		if(iSalario == (qtdAssalariados+1)){
			pCalcular.innerHTML = "Realizar nova consulta";
			lblSalario.innerHTML = "Aguardando...";	
			entrada.style = "display: none;";
		}
		//Limpando campo e direcionando o mouse ao input
		entrada.value = null;			
		entrada.focus();	

	}else{

		//Reiniciando a apicação
		pCalcular.innerHTML = "Calcular";
		pResposta.innerHTML = "Salários com acréscimos: <br>";
		iSalario = 1;
		lblSalario.innerHTML = "Digite o " + (iSalario) + "º Salário: ";
		entrada.value = null;
		entrada.style = "display: block;margin-left: auto; margin-right: auto;";
		pCalcular.style = "margin:0px;";			
		entrada.focus();
	}
	

}
function l2ex2(){
	var n = Number(document.all['entradaPrimo'].value);
	var pResposta = document.all['saidaPrimo'];
	var cont = 0;
	for (var i = 1; i <= n; i++) {
		if(n%i == 0)
			cont++;
	}
	if (cont == 2) 
    	pResposta.innerHTML = "Resposta: <i>é primo.</i>";
    else
    	pResposta.innerHTML = "Resposta: <i>não é primo.</i>";
}
function l2ex3(){
	var n = Number(document.all['entradaFibonacci'].value);
	var pResposta = document.all['saidaFibonacci'];
	var pErro = document.all['erroFibonacci'];
	var anterior = 0, atual = 1, prox = 0;

	if(n > 0){
		if(n <= 103){
			pErro.style = "display: none";
			pResposta.innerHTML = "Resposta: ";
			for (var i = 0; i < n; i++)
			{
				pResposta.innerHTML += atual;
				if (i != n-1)
					pResposta.innerHTML += ", ";
				else
					pResposta.innerHTML += ".";
				prox = anterior + atual;
				anterior = atual;
				atual = prox;
			}
		}
		else{
			pResposta.innerHTML = "";
			pErro.style = "display: block";
			pErro.innerHTML = "Desculpe, número muito grande. Tente um número menor.";
		}
	}else{
		pResposta.innerHTML = "";
		pErro.style = "display: block";
		pErro.innerHTML = "Digite um número válido.";
	}
}

//Função para verificar o vinho digitado
function verificaVinho(obj){
	var n = Number(obj.value);
	if(n < 1 || n > 3 ){
		obj.value = null;
	}
	var n = n+'';
	if(n.length == 1)
		document.all['pAdicionar'].removeAttribute('disabled');
	else
		document.all['pAdicionar'].setAttribute('disabled','disabled');
}

var iVinho = 1; //Global com o indice do vinho
var qtdVinhos = 50; //Quantia de vinhos à serem inseridos
var tinto = 0; branco = 0; rose = 0;//Contadores

function l2ex4(){
	var pAdicionar = document.all['pAdicionar'];
	var pResposta = document.all['saidaVinho'];
	var lblSalario = document.all['lblVinho'];
	var entrada = document.all['entradaVinho'];

	var vinho = Number(entrada.value);

	if(iVinho <= qtdVinhos){

		if(vinho >= 1 && vinho <= 3){
			switch(vinho){
				case 1:
					tinto++;
				break;
				case 2:
					branco++;
				break;
				case 3:
					rose++;
				break;
			}
			pResposta.innerHTML  = "Porcentagem de Vinhos:<br>Tinto: "+
				((tinto/iVinho)*100).toFixed(2) + "% | Branco: "+ ((branco/iVinho)*100).toFixed(2) + "% | Rosê: "+ ((rose/iVinho)*100).toFixed(2)+"%";
				
			iVinho++;
			//Atualzando a mensagem da label e verificando o estado da aplicação
			lblSalario.innerHTML = "Digite o " + (iVinho) + "º Vinho: ";
			if(iVinho == qtdVinhos)
				pAdicionar.innerHTML = "Finalizar";
		}
		else{
			pResposta.innerHTML = "Digite um número de 1 a 3.";
		}
		if(iVinho == (qtdVinhos+1)){
			pAdicionar.innerHTML = "Realizar nova consulta";
			lblSalario.innerHTML = "Aguardando...";	
			entrada.style = "display: none;";
			pResposta.innerHTML += "<br>Quantia:<br> Tinto: "+tinto+" | Branco: "+branco+" | Rosê: "+rose;
		}
		//Limpando campo e direcionando o mouse ao input
		entrada.value = null;			
		entrada.focus();	
	}
	else{
		//Reiniciando a apicação
		pAdicionar.innerHTML = "Adicionar";
		pResposta.innerHTML = "Porcentagem de Vinhos: ";
		iVinho = 1;
		tinto = 0; branco = 0; rose = 0;
		lblSalario.innerHTML = "Digite o " + (iVinho) + "º Vinho: ";
		entrada.value = null;
		entrada.style = "display: block; width: 80px;margin-right: auto;margin-left: auto";	
		pAdicionar.style = "margin:0px;"		
		entrada.focus();
	}		

}
function l2ex5(){
	var n = Number(document.all['entradaFatorial'].value);
	var pResposta = document.all['saidaFatorial'];

	if(n >= 1){
		var fat = n;
		for(var i = (n-1); i > 1;i--){
			fat *=i;
		}
		pResposta.innerHTML = "Resposta: "+fat;
	}else{
		pResposta.innerHTML = "Digite um número válido.";
	}
	
}

var numL3EX1 = [];
var iL3EX1 = 0;
var limiteL3EX1 = 8;
function l3ex1(){
	var entrada = document.all['entradaL3EX1'];
	var pResposta = document.all['saidaL3EX1'];
	var pAdicionar = document.all['pL3EX1'];
	var lblTitulo = document.all['lblL3EX1'];
	var pErro = document.all['erroL3EX1'];

	if (iL3EX1 < limiteL3EX1) {
		if(entrada.value.length >= 1){
			pErro.style = "display: none;";
			//Adicionando ao final do vetor
			numL3EX1.push(Number(entrada.value)); 
			iL3EX1++;
			lblTitulo.innerHTML = "Digite o " +(iL3EX1 + 1)+ "º número: ";

			if(iL3EX1 == limiteL3EX1 - 1)
				pAdicionar.innerHTML = "Finalizar";
			entrada.value = null;
			entrada.focus();
			
			if (iL3EX1 == limiteL3EX1) {
				entrada.style = "display:none;";
				lblTitulo.innerHTML = "Aguardando...";
				pAdicionar.innerHTML = "Reiniciar";

				var pos = [];
				var neg = [];
				for (var i = 0; i < numL3EX1.length; i++) {
					if(numL3EX1[i] >= 0){
						pos.push(numL3EX1[i]);
					}else{
						neg.push(numL3EX1[i]);
					}
				}
				pResposta.innerHTML = "Vetor Positivo: "+ pos.join()+ 
				"<br>Vetor Negativo: "+neg.join();
			}

		}else{
				pErro.style = "display: block; color:red;";
				entrada.focus();
			}
	}else{
		//Reiniciando e mexendo no CSS para harmonia da página
		iL3EX1 = 0;
		numL3EX1 = [];//Limpando o vetor
		lblTitulo.innerHTML = "Digite o " +(iL3EX1 + 1)+ "º número: ";
		entrada.value = null;
		entrada.style = "display:block; margin:auto;";
		pAdicionar.innerHTML = "Adicionar";
		pAdicionar.style = "margin:0px;"
		pResposta.innerHTML = "Resposta: ";

	}
}

var numL3EX2 = [];
var iL3EX2 = 0;
var limiteL3EX2 = 8;
function l3ex2(){
	var entrada = document.all['entradaL3EX2'];
	var pResposta = document.all['saidaL3EX2'];
	var pAdicionar = document.all['pL3EX2'];
	var lblTitulo = document.all['lblL3EX2'];
	var pErro = document.all['erroL3EX2'];

	if (iL3EX2 < limiteL3EX2) {
		if(entrada.value.length >= 1){
			pErro.style = "display: none;";
			//Adicionando ao final do vetor
			numL3EX2.push(Number(entrada.value)); 
			iL3EX2++;
			lblTitulo.innerHTML = "Digite o " +(iL3EX2+1)+ "º número: ";

			if(iL3EX2 == limiteL3EX2 - 1)
				pAdicionar.innerHTML = "Finalizar";
			entrada.value = null;
			entrada.focus();
			
			if (iL3EX2 == limiteL3EX2) {
				entrada.style = "display:none;";
				lblTitulo.innerHTML = "Aguardando...";
				pAdicionar.innerHTML = "Reiniciar";

				var superiores = [];
				for (var i = 0; i < numL3EX2.length; i++) {
					if(numL3EX2[i] > 50){
						superiores.push(numL3EX2[i]);
					}
				}

				if (superiores.length != 0) 
					pResposta.innerHTML = "Superiores a 50: "+superiores.join()+".";
				else
					pResposta.innerHTML = "Nenhum número superior a 50.";

			}
		}else{
			pErro.style = "display: block; color:red;";
			entrada.focus();
		}
			
	}else{
		//Reiniciando e mexendo no CSS para harmonia da página
		iL3EX2 = 0;
		numL3EX2 = [];//Limpando o vetor
		lblTitulo.innerHTML = "Digite o " +(iL3EX2+1)+ "º número: ";
		entrada.value = null;
		entrada.style = "display:block; margin:auto;";
		pAdicionar.innerHTML = "Adicionar";
		pAdicionar.style = "margin:0px;"
		pResposta.innerHTML = "Resposta: ";

	}
	
}

var numL3EX3 = [];
var iL3EX3 = 0;
var limiteL3EX3 = 10;
function l3ex3(){
	var entrada = document.all['entradaL3EX3'];
	var pResposta = document.all['saidaL3EX3'];
	var pAdicionar = document.all['pL3EX3'];
	var lblTitulo = document.all['lblL3EX3'];
	var pErro = document.all['erroL3EX3'];

	if (iL3EX3 < limiteL3EX3) {
		if(entrada.value.length >= 1){
			pErro.style = "display: none;";
			//Adicionando ao final do vetor
			numL3EX3.push(Number(entrada.value)); 
			iL3EX3++;
			lblTitulo.innerHTML = "Digite o " +(iL3EX3+1)+ "º número: ";

			if(iL3EX3 == limiteL3EX3 - 1)
				pAdicionar.innerHTML = "Finalizar";
			entrada.value = null;
			entrada.focus();
			
			if (iL3EX3 == limiteL3EX3) {
				entrada.style = "display:none;";
				lblTitulo.innerHTML = "Aguardando...";
				pAdicionar.innerHTML = "Reiniciar";

				for (var i = 0; i < numL3EX3.length; i++) {
					if(numL3EX3[i] % 2 == 0)
						numL3EX3[i] = numL3EX3[i] + 5;
					else
						numL3EX3[i] = numL3EX3[i] * 5;				
				}

				pResposta.innerHTML = "Vetor modificado: "+numL3EX3.join()+".";

			}
		}else{
			pErro.style = "display: block; color:red;";
			entrada.focus();
		}
	}else{
		//Reiniciando e mexendo no CSS para harmonia da página
		iL3EX3 = 0;
		numL3EX3 = [];//Limpando o vetor
		lblTitulo.innerHTML = "Digite o " +(iL3EX3+1)+ "º número: ";
		entrada.value = null;
		entrada.style = "display:block; margin:auto;";
		pAdicionar.innerHTML = "Adicionar";
		pAdicionar.style = "margin:0px;"
		pResposta.innerHTML = "Resposta: ";

	}
}

var numL3EX4 = [];
var iL3EX4 = 0;
var limiteL3EX4 = 20;
function l3ex4(){
	var entrada = document.all['entradaL3EX4'];
	var pResposta = document.all['saidaL3EX4'];
	var pAdicionar = document.all['pL3EX4'];
	var lblTitulo = document.all['lblL3EX4'];
	var pErro = document.all['erroL3EX4'];

	if (iL3EX4 < limiteL3EX4) {
		if(entrada.value.length >= 1){
			pErro.style = "display: none;";
			//Adicionando ao final do vetor
			numL3EX4.push(Number(entrada.value)); 
			iL3EX4++;
			lblTitulo.innerHTML = "Digite o " +(iL3EX4+1)+ "º número: ";

			if(iL3EX4 == limiteL3EX4 - 1)
				pAdicionar.innerHTML = "Finalizar";
			entrada.value = null;
			entrada.focus();
			
			if (iL3EX4 == limiteL3EX4) {
				entrada.style = "display:none;";
				lblTitulo.innerHTML = "Aguardando...";
				pAdicionar.innerHTML = "Reiniciar";

				var aux;
				for (var i = 0; i < numL3EX4.length; i++) {
					for(var j = (i+1); j < numL3EX4.length; j++){
						if (numL3EX4[j] < numL3EX4[i]) {
							aux = numL3EX4[j];
							numL3EX4[j] = numL3EX4[i];
							numL3EX4[i] = aux;
						}
					}				
				}
				pResposta.innerHTML = "Vetor em ordem crescente: "+numL3EX4.join()+".";
			}
		}else{
			pErro.style = "display: block; color:red;";
			entrada.focus();
		}
	}else{
		//Reiniciando e mexendo no CSS para harmonia da página
		iL3EX4 = 0;
		numL3EX4 = [];//Limpando o vetor
		lblTitulo.innerHTML = "Digite o " +(iL3EX4+1)+ "º número: ";
		entrada.value = null;
		entrada.style = "display:block; margin:auto;";
		pAdicionar.innerHTML = "Adicionar";
		pAdicionar.style = "margin:0px;"
		pResposta.innerHTML = "Resposta: ";

	}
}

var numL3EX5 = [];
var iL3EX5 = 0;
var limiteL3EX5 = 100;
function l3ex5(){
	var entrada = document.all['entradaL3EX5'];
	var pResposta = document.all['saidaL3EX5'];
	var pAdicionar = document.all['pL3EX5'];
	var lblTitulo = document.all['lblL3EX5'];
	var pErro = document.all['erroL3EX5'];
	var n = Number(entrada.value);

	if (iL3EX5 < limiteL3EX5) {
		if (entrada.value.length >= 1) {
			pErro.style = "display: none;";
			//Adicionando ao final do vetor
			numL3EX5.push(n); 
			iL3EX5++;
			lblTitulo.innerHTML = "Digite o " +(iL3EX5+1)+ "º número: ";

			if(iL3EX5 == limiteL3EX5 - 1)
				pAdicionar.innerHTML = "Finalizar";
			entrada.value = null;
			entrada.focus();
			
			if (iL3EX5 == limiteL3EX5 || n == 0) {
				iL3EX5 = limiteL3EX5;//Forçando o fim
				entrada.style = "display:none;";
				lblTitulo.innerHTML = "Aguardando...";
				pAdicionar.innerHTML = "Reiniciar";

				if (n == 0)
					//Removendo o 0 digitado, se necessário
					numL3EX5.pop();

				var ultimo = numL3EX5[(numL3EX5.length - 1)];
				var qtdUltimo = 0;
				for (var i = 0; i < numL3EX5.length; i++) {
					if(numL3EX5[i] == ultimo)
						qtdUltimo++;
				}

				pResposta.innerHTML = "Último número: "+ultimo+". Digitado "+qtdUltimo+" vezes.";

			}
		}else{
			pErro.style = "display: block; color:red;";
			entrada.focus();
		}
	}else{
		//Reiniciando e mexendo no CSS para harmonia da página
		iL3EX5 = 0;
		numL3EX5 = [];//Limpando o vetor
		lblTitulo.innerHTML = "Digite o " +(iL3EX5+1)+ "º número: ";
		entrada.value = null;
		entrada.style = "display:block; margin:auto;";
		pAdicionar.innerHTML = "Adicionar";
		pAdicionar.style = "margin:0px;"
		pResposta.innerHTML = "Resposta: ";
	}	
}