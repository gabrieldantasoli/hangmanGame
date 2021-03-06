var classes = ['comidas','frutas','objetos','meios de transportes','legumes','brinquedos','linguagens de programação','planetas','animais','biomas','instrumentos'];
var elements = [
    {'class':'comidas','element': ['Coxinha','lasanha','acaraje','feijoada','panqueca','canjica','churrasco','parmegiana','estrogonofe','hamburger','cachorro quente','macarronada','Arroz de Carreteiro','Caldeirada','Barreado','Virado a Paulista','Camarao com Chuchu','Tutu a Mineira','Moqueca Capixaba','Mojica de Pintado','Arroz Boliviano','Caldo de Piranha','Pato no Tucupi','Tacaca','Peixada','Caldeirada de peixe','Pirarucu a Casaca','Panelada','Buchada de Bode','Arrumadinho','Galinha a Cabidela'],'color':'#EB2F22'},
    {'class':'frutas','element': ['jaboticaba','graviola','araticum','alfarroba','bergamota','framboesa','guabiroba','ibacurupari','macauba','pitangatuba','seriguela','tamarindo'],'color':'#27EB24'},
    {'class':'objetos','element': ['candelabro','fotografia','carregador','banheira','computador','escrivaninha','dinheiro','penteadeire','grampeador','fechadura','ventilador','umidificador'],'color':'#D47C17'},
    {'class':'meios de transportes','element': ['trem-bala','submarino','motocicleta','caminhao','bicicleta','patinete','charrete','veleiro','onibus','transatlantico','navio cargueiro','dirigivel'],'color':'#D6D69D'},
    {'class':'legumes \\ verduras','element': ['cenoura','beterraba','cebola','beringela','Ervilha','Gengibre','inhame','lentilha','mandioquina','pimenta'],'color':'#B0E39A'},
    {'class':'brinquedos \\ jogos','element': ['boneca','pista de corrida','carro de controle remoto','massa de modelar','pique-esconde','vai e volta','pula-corda','quebra-cabeça','pega-pega','pega varetas','amarelinha','Bolinha de Gude','Peteca'],'color':'#F0E02C'},
    {'class':'planetas \\ galaxias','element': ['marte','venus','terra','mercurio','saturno','urano','netuno','andromeda','centauros a','esquimo','nebulosa','via lactea'],'color':'#ED8DA1'},
    {'class':'animais','element': ['bufalo','cachorro','tartaruga marinha','tigre dente de sabres','urso polar','gorila','golfinho','baleia jubarte','crocodilo','camaleao','leao africano','cavalo marinho'],'color':'#D64620'},
    {'class':'biomas','element': ['tundra artica','taiga','floresta tropical','floresta temperada','savana','deserto','campos','chaparral','tundra alpina','selva','caatinga','cerrado'],'color':'#37F069'},
    {'class':'instrumentos','element': ['saxofone','violino','flauta','clarinete','bateria','tambor','clarone','viola','guitarra','contra baixo','berimbal','violoncelo'],'color':'#daa520'}
];

var allClasses = elements.length - 1;
var hight = false ;
var playing = false ;
var animate = true ;
var whatbody = 0 ;
var usedLetters ;
var maxMistakes = 6 ;
var position ;
var word ;
var wordWidth ;
var hits ;
var mistakes ;
var usedLetters ;
var play ;
var whatletter ;
var clas ;
var wordPosition ;
var obj ;
var body = document.querySelectorAll('.person > div') ;

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
    if (play.value == '') {
        window.alert('Digite uma letra !')
    }else {
        whatletter = play.value.toLowerCase() ;
        if (usedLetters.indexOf(whatletter) == -1) {
            usedLetters.push(whatletter) ;
            document.getElementById('chosenLetters').innerHTML += `<span>${whatletter.toUpperCase()}</span> , ` ;
            if (word.search(whatletter) == -1) {
                mistakes += 1 ;
                startAnimation(mistakes-1) ;
            };
            for (i in word) {
                if (word[i] == whatletter) {
                    obj[i].innerHTML = whatletter.toUpperCase() ;
                    obj[i].style.color = 'black' ; 
                    hits += 1 ;
                };
            };
            let msg = document.getElementById('msg');
            if (mistakes < maxMistakes) {
                playing = true ;
            }else {
                playing = false ;
                msg.innerHTML = `Infelizmente você perdeu . A palavra era ${word} !` ;
                document.getElementById('msg').style.display = 'block' ;
                document.getElementById('msg').style.background = 'red';
                document.getElementById('playeractions').style.display = 'none' ;
                document.getElementById('start').style.display = 'block' ;
                for (i in word) {
                    if (obj[i].innerHTML == '') {
                        obj[i].innerHTML = word[i].toUpperCase() ;
                        obj[i].style.color = 'red' ;
                    }
                }
            }
            if (hits == word.length) {
                document.getElementById('msg').innerHTML = `Parabéns , você ganhou o jogo . A palavra era \"${word.toUpperCase()}\"`
                document.getElementById('msg').style.display = 'block' ;
                document.getElementById('msg').style.background = 'green';
                document.getElementById('playeractions').style.display = 'none' ;
                document.getElementById('start').style.display = 'block' ;
            };
        }else {
            window.alert(`A letra \'${whatletter.toUpperCase()}\' já foi digitada . Escolha outra letra !`)
        };
        play.value = '' ;
        play.focus() ;
    };
};

function startGame() {
    playing = true ;
    animate = false ;
    whatbody = 0 ;
    body.forEach(item => item.style.display = 'none') ;
    document.querySelectorAll('.eye').forEach(item => item.style.display = 'none');
    usedLetters = [] ;
    document.getElementById('game').style.display = 'block';
    document.getElementById('start').style.display = 'none' ;
    document.getElementById('pass').style.display = 'block' ;
    play = document.getElementById('letter');
    play.value = '' ;
    play.focus() ;
    document.getElementById('msg').style.display = 'none' ;
    document.getElementById('playeractions').style.display = 'block' ;
    hits = 0 ;
    mistakes = 0 ;
    hight = false ;
    document.getElementById('chosenLetters').innerHTML = 'Letras digitadas : ' ;
    position = Math.round(Math.random()*allClasses);
    clas = elements[position].class ;
    wordPosition = Math.round(Math.random()*(elements[position].element.length - 1)) ;
    word = elements[position].element[wordPosition].toLowerCase() ;
    let step = document.getElementById('step') ;
    step.innerHTML = clas ;
    step.style.background = elements[position].color ;
    wordLetters(word);
};

function startAnimation(x) {
    if (animate) {
        setTimeout(startAnimation,1000);
    } ;
    if (whatbody < 6) {
        if (animate) {
            body[whatbody].style.display = 'block' ;
        }else{
            body[x].style.display = 'block' ;
        }
    }
    if (whatbody == 5 || x == 5) {
        document.querySelectorAll('.eye').forEach(item => item.style.display = 'block');
    };
    if (whatbody == 6) {
        whatbody = -1 ;
        body.forEach(item => item.style.display = 'none') ;
        document.querySelectorAll('.eye').forEach(item => item.style.display = 'none');
    };
    if (animate) {
        whatbody += 1;
    };
};

setTimeout(startAnimation,1000);

document.getElementById('start').addEventListener('click',startGame);
document.getElementById('choice').addEventListener('click',playGame);