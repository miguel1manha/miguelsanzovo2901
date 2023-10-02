//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2;
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

//pontuação
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400);
  console.log("iniciou o setup");
}

function draw() {
  background(0);
  mostraBolinha(); // chamando a função mostra bolinha
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaRaquete();
  verificaColisaoRaquete();
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();
  incluirPlacar();
  marcaPontos();
  movimentaRaqueteOponenteCimaBaixo();
function incluirPlacar(){
  fill("white");
  textSize(32)
  text(meusPontos,width * 0.35,25);
  text(pontosOponentes,width * 0.65,25);
}
function marcaPontos(){
  if (xBolinha > 590){
    meusPontos++;
  }
if (xBolinha < 10){
  pontosOponente++;
 }
}
function movimentaRaqueteCimaBaixo(){
  if (keyIsDown (104)){
    yRaqueteOponente -=10;
  }
  if (keyIsDown (98)){
    yRaqueteOponente +=10;
  }
}