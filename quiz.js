const form = document.querySelector('#quiz-form')
const output = document.querySelector('#quizOutput')
const answers = ['option1','option1','option3','option2','option2','option1']
let index=0;
let score=0;

form.addEventListener('submit', (e) => {


     e.preventDefault()
     const data = Object.fromEntries(new FormData(e.target).entries());
     console.log(data)
     
     for (let i in data){
        if(data[i]==answers[index]){
            score++;
            index++;
        }
     }

     output.innerText = `Your Score is ${score}/7.`
  });
  