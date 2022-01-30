var classes = ['comidas','frutas','objetos','meios de transportes','legumes','brinquedos','linguagens de programação','planetas','animais','biomas','instrumentos']
var elements = [
    {'class':'comidas','element': ['Coxinha','lasanha','acarajé','feijoada','panqueca','canjica','churrasco','parmegiana','estrogonofe','hamburger','cachorro quente','macarronada'],'color':'#EB2F22'},
    {'class':'frutas','element': ['jaboticaba','graviola','araticum','alfarroba','bergamota','framboesa','guabiroba','ibacurupari','macaúba','pitangatuba','seriguela','tamarindo'],'color':'#27EB24'},
    {'class':'objetos','element': ['candelabro','fotografia','carregador','banheira','computador','escrivaninha','dinheiro','penteadeire','grampeador','fechadura','ventilador','umidificador'],'color':'#D47C17'},
    {'class':'meios de transportes','element': ['trem-bala','submarino','motocicleta','caminhão','bicicleta','patinete','charrete','veleiro','onibus','transatlântico','navio cargueiro','dirigível'],'color':'#D6D69D'},
    {'class':'legumes \\ verduras','element': ['cenoura','beterraba','cebola','beringela','Brócolis','Ervilha','Gengibre','inhame','jamelão','lentilha','mandioquina','pimentão'],'color':'#B0E39A'},
    {'class':'brinquedos \\ jogos','element': ['boneca','pista de corrida','carro de controle remoto','banbolê','massa de modelar','peças de construir','vai e volta','aviãozinho','quebra-cabeça','banco imobíliario','pega varetas','amarelinha'],'color':'#F0E02C'},
    {'class':'planetas \\ galaxias','element': ['marte','venus','terra','mercurio','saturno','urano','netuno','andromeda','centauros a','esquimó','nebulosa','via lactea'],'color':'#ED8DA1'},
    {'class':'animais','element': ['bufalo','cachorro','tartaruga marinha','tigre dente de sabres','hipopótamo','chipanzé','golfinho','dragão de komodo','crocodilo','camaleão','leão africano','cavalo marinho'],'color':'#D64620'},
    {'class':'biomas','element': ['tundra artica','taiga','floresta tropical','floresta temperada','savana','deserto','campos','chaparral','tundra alpina','selva','caatinga','cerrado'],'color':'#37F069'},
    {'class':'instrumentos','element': ['saxofone','violino','flauta','clarinete','bateria','tambor','clarone','violão','guitarra','contra baixo','bongô','violoncelo'],'color':'#daa520'}
]

var allClasses = elements.length-1;
var position = Math.round(Math.random()*(elements.length-1));
var usedClass = elements[position].class;
var word = elements[position].element[Math.round(Math.random()*(elements[position].element.length-1))];
var wordWidth = word.length;
var lettersBox = [];
var draws = [];
var maxMistakes = 7;
var hits;
var play;
var mistakes = 0;
var right = false;
var playing = false;

function whatletters(width) {
    var obj;
    let words = document.querySelectorAll('.word');
    words.forEach(item => {
        item.innerHTML = '';
        item.style.display = 'none';
    });
    for (var i = 1;i<=width;i++){
        obj = document.querySelector(`#word${i}`).style.display = 'flex';
    }
};

function playGame() {
    play.focus();
    if (play.value == '') {
        window.alert('Digite uma letra !')
    }else{
        if (playing) {
            var obj ;
            var lettertm ;
            var letter ;
            var search ;
            letter = play.value;
            play.value = '';
            right = false;
            search = word.match(letter.toLowerCase());
            while (search != null) {
                lettertm = word.search(letter.toLowerCase()) + 1;
                obj = document.getElementById('word'+lettertm).innerHTML = letter.toUpperCase();
                word = word.replace(letter,'0');
                hits += 1;
                search = word.match(letter);
                right = true
            }
            if (right) {

            }
            if (hits == wordWidth) {
                playing = false;
                document.getElementById('chosenLetters').style.display = 'none';
                document.getElementById('playeractions').style.display = 'none';
            }
        }
    }
}

function startGame() {
    document.getElementById('chosenLetters').style.display = 'block';
    document.getElementById('playeractions').style.display = 'block';
    document.getElementById('game').style.display = 'block';
    document.getElementById('start').innerHTML = 'recomeçar jogo'
    playing = true;
    play = document.getElementById('letter');
    play.value='';
    play.focus();
    hits = 0;
    right = false;
    document.getElementById('chosenLetters').innerHTML = 'Letras Digitadas : ';
    usedClass = elements[position].class;
    position = Math.round(Math.random()*(elements.length-1));
    usedClass = elements[position].class
    word = elements[position].element[Math.round(Math.random()*(elements[position].element.length-1))];
    console.log(word)
    wordWidth = word.length;
    whatletters(wordWidth);
    document.getElementById('step').innerHTML = usedClass;
    document.getElementById('step').style.background = elements[position].color;
};

document.getElementById('start').addEventListener('click',startGame);
document.getElementById('choice').addEventListener('click',playGame);