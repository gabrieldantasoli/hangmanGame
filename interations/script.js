var classes = ['comidas','frutas','objetos','meios de transportes','legumes','brinquedos','linguagens de programação','planetas','animais','biomas','instrumentos']
var elements = [
    {'class':'comidas','element': ['Coxinha','lasanha','acaraje','feijoada','panqueca','canjica','churrasco','parmegiana','estrogonofe','hamburger','cachorro quente','macarronada'],'color':'#EB2F22'},
    {'class':'frutas','element': ['jaboticaba','graviola','araticum','alfarroba','bergamota','framboesa','guabiroba','ibacurupari','macauba','pitangatuba','seriguela','tamarindo'],'color':'#27EB24'},
    {'class':'objetos','element': ['candelabro','fotografia','carregador','banheira','computador','escrivaninha','dinheiro','penteadeire','grampeador','fechadura','ventilador','umidificador'],'color':'#D47C17'},
    {'class':'meios de transportes','element': ['trem-bala','submarino','motocicleta','caminhao','bicicleta','patinete','charrete','veleiro','onibus','transatlantico','navio cargueiro','dirigivel'],'color':'#D6D69D'},
    {'class':'legumes \\ verduras','element': ['cenoura','beterraba','cebola','beringela','Ervilha','Gengibre','inhame','lentilha','mandioquina','pimenta'],'color':'#B0E39A'},
    {'class':'brinquedos \\ jogos','element': ['boneca','pista de corrida','carro de controle remoto','massa de modelar','pique-esconde','vai e volta','pula-corda','quebra-cabeça','pega-pega','pega varetas','amarelinha'],'color':'#F0E02C'},
    {'class':'planetas \\ galaxias','element': ['marte','venus','terra','mercurio','saturno','urano','netuno','andromeda','centauros a','esquimo','nebulosa','via lactea'],'color':'#ED8DA1'},
    {'class':'animais','element': ['bufalo','cachorro','tartaruga marinha','tigre dente de sabres','urso polar','gorila','golfinho','baleia jubarte','crocodilo','camaleão','leão africano','cavalo marinho'],'color':'#D64620'},
    {'class':'biomas','element': ['tundra artica','taiga','floresta tropical','floresta temperada','savana','deserto','campos','chaparral','tundra alpina','selva','caatinga','cerrado'],'color':'#37F069'},
    {'class':'instrumentos','element': ['saxofone','violino','flauta','clarinete','bateria','tambor','clarone','viola','guitarra','contra baixo','berimbal','violoncelo'],'color':'#daa520'}
]

var allClasses = elements.length-1;
var position = Math.round(Math.random()*(elements.length-1));
var usedClass = elements[position].class;
var word = elements[position].element[Math.round(Math.random()*(elements[position].element.length-1))];
var wordWidth = word.length;
var lettersBox = [];
var draws = [];
var word1 ;
var maxMistakes = 7;
var hits;
var play;
var mistakes = 0;
var right = false;
var playing = false;

function whatletters(width) {
    let words = document.querySelectorAll('.word');
    words.forEach(item => {
        item.innerHTML = '';
        item.style.display = 'none';
        item.style.background = 'rgb(172, 172, 172)';
    });
    for (var i = 1;i<=width;i++){
        document.querySelector(`#word${i}`).style.display = 'flex';
    }
    for(var c = 0;c<word.length;c++){
        if (word[c] === ' ') {
            document.querySelector(`#word${c+1}`).style.background = 'black';
            hits += 1;
        }
    }
    for(var c = 0;c<word.length;c++){
        if (word[c] === '-') {
            document.querySelector(`#word${c+1}`).style.innerHTML = '-';
            hits += 1;
        }
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
            word = word.toLowerCase()
            search = word.match(letter.toLowerCase());
            while (search != null) {
                lettertm = word.search(letter.toLowerCase()) + 1;
                obj = document.getElementById('word'+lettertm).innerHTML = letter.toUpperCase();
                word = word.replace(letter,'0');
                hits += 1;
                search = word.match(letter.toLowerCase());
                right = true;
            }
            document.getElementById('chosenLetters').innerHTML += `<span>${letter.toUpperCase()}  </span>`;
            if (!right) {
                mistakes += 1;
                if (mistakes < 7) {

                }else{
                    playing = false;document.getElementById('msg').innerHTML = 'Infelizmente você perdeu ):! A palavra era : '+word1.toUpperCase()+'.';
                    document.getElementById('msg').style.background = 'rgba(255,0,0,0.5)';
                }
            }
            if (hits == wordWidth) {
                playing = false;
                document.getElementById('msg').innerHTML = 'Parabéns , você ganhou  A palavra era : '+word1.toUpperCase()+'.';
                document.getElementById('msg').style.background = 'rgba(0,255,0,0.5)';
            }
            if (!playing){
                document.getElementById('msg').style.display = 'block';
                document.getElementById('chosenLetters').style.display = 'none';
                document.getElementById('playeractions').style.display = 'none';
            }
        }
    }
}

function startGame() {
    document.getElementById('msg').style.display = 'none';
    document.getElementById('chosenLetters').style.display = 'block';
    document.getElementById('playeractions').style.display = 'block';
    document.getElementById('game').style.display = 'block';
    document.getElementById('start').innerHTML = 'recomeçar jogo'
    playing = true;
    play = document.getElementById('letter');
    play.value='';
    play.focus();
    mistakes = 0;
    hits = 0;
    right = false;
    document.getElementById('chosenLetters').innerHTML = 'Letras Digitadas : ';
    usedClass = elements[position].class;
    position = Math.round(Math.random()*(elements.length-1));
    usedClass = elements[position].class
    word = elements[position].element[Math.round(Math.random()*(elements[position].element.length-1))];
    word1 = word;
    wordWidth = word.length;
    whatletters(wordWidth);
    document.getElementById('step').innerHTML = usedClass;
    document.getElementById('step').style.background = elements[position].color;
};

document.getElementById('start').addEventListener('click',startGame);
document.getElementById('choice').addEventListener('click',playGame);
