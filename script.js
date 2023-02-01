
const board =[ 
    {name:'a1',jumps:['b3','c2'] },
    {name:'a2',jumps:['b4','c3','c1']},
    {name:'a3',jumps:['b5','c4','c2','b1']},
    {name:'a4',jumps:['b6','c5','c3','b2']},
    {name:'a5',jumps:['b7','c6','c4','b3']},
    {name:'a6',jumps:['b8','c7','c5','b4']},
    {name:'a7',jumps:['b5','c6','c8']},
    {name:'a8',jumps:['b6','c7']},
    {name:'b1',jumps:['a3','c3','d2']},
    {name:'b2',jumps:['a4','c4','d3','d1']},
    {name:'b3',jumps:['a5','c5','d4','d2','c1','a1']},
    {name:'b4',jumps:['a6','c6','d5','d3','c2','a2']},
    {name:'b5',jumps:['a7','c7','b6','b4','c3','a3']},
    {name:'b6',jumps:['a8','c8','d7','d5','c4','a4']},
    {name:'b7',jumps:['d8','d6','c5','a5']},
    {name:'b8',jumps:['a6','c6','d7']},
    {name:'c1',jumps:['a2','b3','d3','e2']},
    {name:'c2',jumps:['a1','a3','b4','d4','e3','e1']},
    {name:'c3',jumps:['a2','a4','b5','d5','e4','e2','b1','d1']},
    {name:'c4',jumps:['a3','a5','b6','d6','e5','e3','d2','b2']},
    {name:'c5',jumps:['a4','a6','b7','d7', 'e6','e4','d3','b3']},
    {name:'c6',jumps:['a5','a7','b8','d8','e7','e5','d4','b4']},
    {name:'c7',jumps:['a6','a8','e8','e6','d5','b5']},
    {name:'c8',jumps:['a7','e7','d6','b6']},
    {name:'d1',jumps:['b2','c3','e3','f2']},
    {name:'d2',jumps:['b1','b3','c4','e4','f3','f1']},
    {name:'d3',jumps:['c1','b2','b4','c5','e5','f4','f2','e1']},
    {name:'d4',jumps:['c6','e6','f5','f3','e2','c2','b3','b5']},
    {name:'d5',jumps:['c7','e7','f6','f4','e3','c3','b4','b6']},
    {name:'d6',jumps:['c8','e8','f7','f5','e4','c4','b5','b7']},
    {name:'d7',jumps:['b8','f8','f6','e5','c5','b6']},
    {name:'d8',jumps:['f7','e6','c6','b7']},
    {name:'e1',jumps:['c2','d3','f3','g2']},
    {name:'e2',jumps:['c1','c3','d4','f4','g3','g1']},
    {name:'e3',jumps:['d1','c2','c4','d5','f5','g4','g2','f1']},
    {name:'e4',jumps:['d2','c3','c5','d6','f6','g5','g3','f2']},
    {name:'e5',jumps:['d3','c4','c6','d7','f7','g6','g4','f3']},
    {name:'e6',jumps:['d8','f8','g7','g5','f4','d4','c5','c7']},
    {name:'e7',jumps:['c8','g8','g6','f5','d5','c6']},
    {name:'e8',jumps:['c7','g7','f6','d6']},
    {name:'f1',jumps:['d2','e3','g3','h2']},
    {name:'f2',jumps:['d1','d3','e4','g4','h3','h1']},
    {name:'f3',jumps:['e1','d2','d4','e5','g5','h4','h2','g1']},
    {name:'f4',jumps:['e6','g6','h5','h3','g2','e2','d3','d5']},
    {name:'f5',jumps:['e7','g7','h6','h4','g3','e3','d4','d6']},
    {name:'f6',jumps:['e8','g8','h7','h5','g4','e4','d5','d7']},
    {name:'f7',jumps:['d8','h8','h6','g5','e5','d6']},
    {name:'f8',jumps:['h7','g6','e6','d7']},
    {name:'g1',jumps:['e2','f3','h3']},
    {name:'g2',jumps:['e1','e3','f4','h4']},
    {name:'g3',jumps:['h1','h5','f1','f5','e2','e4']},
    {name:'g4',jumps:['f6','h6','h2','f2','e3','e5']},
    {name:'g5',jumps:['f7','h7','h3','f3','e4','e6']},
    {name:'g6',jumps:['f8','h8','h4','f6','e5','e7']},
    {name:'g7',jumps:['e8','e6','f5','h5']},
    {name:'g8',jumps:['e7','f6','h6']},
    {name:'h1',jumps:['f2','g3']},
    {name:'h2',jumps:['f1','f3','g4']},
    {name:'h3',jumps:['g1','f2','f4','g5']},
    {name:'h4',jumps:['g2','f3','f5','g6']},
    {name:'h5',jumps:['g3','f4','f6','g7']},
    {name:'h6',jumps:['g4','f5','f7','g8']},
    {name:'h7',jumps:['g5','f6','f8']},
    {name:'h8',jumps:['g6','f7']}
    
]

let textBox = document.getElementById("textBox");
let output = document.querySelector('#output');
let nextBtn = document.querySelector('#next');
let submitBtn = document.querySelector('#submit');
let randomIndex 
let randomNumber = board[randomIndex];
let currentSelectedName
let answerHtmlElement = document.getElementById('answer');
let cCounter = 0;


document.getElementById('textBox').placeholder = 'Please click the "Next" button to continue'

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

nextBtn.addEventListener('click', () => {
    //seteando efectos de ui 
    document.getElementById('textBox').disabled = false
    document.getElementById('textBox').placeholder = 'x1,y2,z3'
    document.getElementById('submit').disabled = false



    if(board.length == 0){
        output.innerText = 'Completed';
        return;
    }
    formulario.reset();
    answerHtmlElement.innerText ="--------"
     randomIndex = getRandomNumber(0, board.length-1);
     output.innerText = board[randomIndex].name
    currentSelectedName = board.splice(randomIndex, 1)
   
    
});


submitBtn.addEventListener('click', ()=>{
   
    //aqui convierto en un arreglo.
    debugger

    const questionObject = currentSelectedName[0]
    

    const inputValue = textBox.value
   

    
    // valido que el input no este vacio
    if (inputValue) {
        myAnswersArray = inputValue.split(',') //tomar lo que el usuario ingreso y convertilo en un arreglo
        // validar que lo que introduje es la respuesta correcta

        // utilize un foreach o un for regular o un reduce
        let isTheRightAnswer 
       // dry: Don't repeat yourself 

         if (myAnswersArray.length != questionObject.jumps.length) {
            return sendResponse(answerHtmlElement, myAnswersArray.length != questionObject.jumps.length ? false: true)
        } 
        
        // 
        
        // compara cada uno de los valores de respuesta con los posibles jumps que tiene esta casilla.
        for (let index = 0; index < questionObject.jumps.length; index++) {
            isTheRightAnswer = myAnswersArray.indexOf(questionObject.jumps[index]) != -1
            
        } 
        
        // envia la respuesta al UI basado en su valor boleano 
        return sendResponse(answerHtmlElement, isTheRightAnswer)
        
        
        
        
        
    }

    function sendResponse(node, isCorrect) {
        //node.innerText = "Sorry try again!"
        node.innerText = isCorrect ? "Correct!" : "Incorret"
        if (isCorrect) {
            cCounter++;
            document.getElementById("correct-score").innerHTML=cCounter;
        }
        

    }

})


