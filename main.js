canvas=document.getElementById("canvas")

formato = canvas.getContext("2d"); // desenha em formato 2d

cor=""

canvas.addEventListener("mousedown", myMousedown);//adiciondo ao canvas um "escutador de eventos", assim que ocorrer o clique do mouse ele chama a função para executar

function myMousedown(e)
{
    //obtém a cor que escolhemos
    color = document.getElementById("Cor").value;
    
    //obtendo e ajustando a posição x do mouse onde foi clicado
     mouseX = e.clientX - canvas.offsetLeft;

     //obtendo e ajustando a posição y do mouse onde foi clicado
     mouseY = e.clientY - canvas.offsetTop;

    circle(mouseX,mouseY)
}

function circle(mouseX , mouseY)
{
    formato.beginPath(); //inicia o desenho no canvas
    formato.strokeStyle = color; //ajusta cor para o objeto desenhado
    formato.lineWidth = 2; //grossura da linha do objeto desenhado
formato.arc(mouseX,mouseY,40,0,2*Math.PI)
    formato.stroke(); //usado para desenhar as bordas do formato
}

function limpar()
{
    formato.clearRect(0,0,canvas.width,canvas.height)
}

	
