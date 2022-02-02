var classes = ['comidas','frutas','objetos','meios de transportes','legumes','brinquedos','linguagens de programação','planetas','animais','biomas','instrumentos'];
var elements = [
    {'class':'comidas','element': ['Coxinha','lasanha','acaraje','feijoada','panqueca','canjica','churrasco','parmegiana','estrogonofe','hamburger','cachorro quente','macarronada'],'color':'#EB2F22'},
    {'class':'frutas','element': ['jaboticaba','graviola','araticum','alfarroba','bergamota','framboesa','guabiroba','ibacurupari','macauba','pitangatuba','seriguela','tamarindo'],'color':'#27EB24'},
    {'class':'objetos','element': ['candelabro','fotografia','carregador','banheira','computador','escrivaninha','dinheiro','penteadeire','grampeador','fechadura','ventilador','umidificador'],'color':'#D47C17'},
    {'class':'meios de transportes','element': ['trem-bala','submarino','motocicleta','caminhao','bicicleta','patinete','charrete','veleiro','onibus','transatlantico','navio cargueiro','dirigivel'],'color':'#D6D69D'},
    {'class':'legumes \\ verduras','element': ['cenoura','beterraba','cebola','beringela','Ervilha','Gengibre','inhame','lentilha','mandioquina','pimenta'],'color':'#B0E39A'},
    {'class':'brinquedos \\ jogos','element': ['boneca','pista de corrida','carro de controle remoto','massa de modelar','pique-esconde','vai e volta','pula-corda','quebra-cabeça','pega-pega','pega varetas','amarelinha'],'color':'#F0E02C'},
    {'class':'planetas \\ galaxias','element': ['marte','venus','terra','mercurio','saturno','urano','netuno','andromeda','centauros a','esquimo','nebulosa','via lactea'],'color':'#ED8DA1'},
    {'class':'animais','element': ['bufalo','cachorro','tartaruga marinha','tigre dente de sabres','urso polar','gorila','golfinho','baleia jubarte','crocodilo','camaleao','leao africano','cavalo marinho'],'color':'#D64620'},
    {'class':'biomas','element': ['tundra artica','taiga','floresta tropical','floresta temperada','savana','deserto','campos','chaparral','tundra alpina','selva','caatinga','cerrado'],'color':'#37F069'},
    {'class':'instrumentos','element': ['saxofone','violino','flauta','clarinete','bateria','tambor','clarone','viola','guitarra','contra baixo','berimbal','violoncelo'],'color':'#daa520'}
];

var allClasses = elements.length - 1;
var hight = false ;
var playing = false ;
var usedLettters = [] ;
var maxMistakes = 7 ;
var position ;
var word ;
var wordWidth ;
var hits ;
var mistakes ;
var usedLetters ;
var play ;
var clas ;
var wordPosition ;
var obj ;

function wordLetters(word) {
    obj = document.querySelectorAll('.word') ;
    obj.forEach(item => {
        item.style.display = 'none' ;
        item.style.background = 'rgb(172, 172, 172)' ;
        item.innerHTML = '' ;
    });
    for (var i = 0 ; i < word.length ; i++ ) {
        obj[i].style.display = 'flex' ;
        if (word[i] == ' ') {
            obj[i].style.background = '#000' ;
            hits += 1 ;
        };
        if (word[i] == '-') {
            obj[i].innerHTML = '-' ;
            hits += 1 ;
        };
    };
};

function playGame() {

};

function startGame() {
    playing = true ;
    document.getElementById('game').style.display = 'block';
    play = document.getElementById('letter');
    play.value = '' ;
    play.focus() ;
    hits = 0 ;
    mistakes = 0 ;
    hight = false ;
    document.getElementById('chosenLetters').innerHTML = 'Letras digitadas : ' ;
    position = Math.round(Math.random()*allClasses);
    clas = elements[position].class ;
    wordPosition = Math.round(Math.random()*(elements[position].element.length - 1)) ;
    word = elements[position].element[wordPosition] ;
    let step = document.getElementById('step') ;
    step.innerHTML = clas ;
    step.style.background = elements[position].color ;
    wordLetters(word);
};

document.getElementById('start').addEventListener('click',startGame);
document.getElementById('choice').addEventListener('click',playGame);
