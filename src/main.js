const quizData = [
  {
    question: 'Qual bicho transmite Doença de Chagas?',
    a: 'Abelha',
    b: 'Barata',
    c: 'Pulga',
    d: 'Barbeiro',
    correct: 'd'
  },
  {
    question: 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
    a: 'Caju',
    b: 'Abóbora',
    c: 'Chuchu',
    d: 'Côco',
    correct: 'b'
  },
  {
    question: 'Qual é o coletivo de cães?',
    a: 'Matilha',
    b: 'Rebanho',
    c: 'Alcateia',
    d: 'Manada',
    correct: 'a'
  },
  {
    question: 'Qual é o triângulo que tem todos os lados diferentes?',
    a: 'Equilátero',
    b: 'Isóceles',
    c: 'Escaleno',
    d: ' Trapézio',
    correct: 'c'
  },
  {
    question: 'Quem compôs o Hino da Independência?',
    a: 'Dom Pedro I',
    b: 'Manuel Bandeira',
    c: 'Castro Alvez',
    d: 'Carlos Gomes',
    correct: 'a'
  },
  {
    question: 'Qual é o maior país do mundo em área territorial?',
    a: 'Russia',
    b: 'Canáda',
    c: 'China',
    d: 'Brasil',
    correct: 'a'
  },
  {
    question: 'Qual é o elemento químico mais abundante na crosta terrestre?',
    a: 'Oxigênio',
    b: 'Silício',
    c: 'Alumínio',
    d: 'Ferro',
    correct: 'a'
  },
  {
    question: 'Qual é a montanha mais alta do mundo?',
    a: 'Monte Everest',
    b: 'Monte Kilimanjaro',
    c: 'Monte Aconcágua',
    d: 'Monte McKinley',
    correct: 'a'
  },
  {
    question: 'Quem pintou a Mona Lisa?',
    a: 'Michelangelo',
    b: 'Pablo Picasso',
    c: 'Leonardo da Vinci',
    d: 'Vicent van Gogh',
    correct: 'c'
  },
  {
    question: 'Qual é a capital do Brasil?',
    a: 'Rio de Janeiro',
    b: 'Brasilia',
    c: 'São Paulo',
    d: 'Florianópolis',
    correct: 'b'
  }
]

const quiz = document.getElementById('quiz')
const answer_txt = document.querySelectorAll('.answer-txt')
const question_El = document.getElementById('question')
const a_answer = document.getElementById('a-answer')
const b_answer = document.getElementById('b-answer')
const c_answer = document.getElementById('c-answer')
const d_answer = document.getElementById('d-answer')
const submit_bnt = document.getElementById('submit-bnt')

let currentQuiz = 0
let score = 0
let answer = undefined

loadQuiz()

function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]

  question_El.innerText = currentQuizData.question
  a_answer.innerText = currentQuizData.a
  b_answer.innerText = currentQuizData.b
  c_answer.innerText = currentQuizData.c
  d_answer.innerText = currentQuizData.d
}

function getSelected() {
  answer_txt.forEach(answer_txt => {
    if (answer_txt.checked) {
      answer = answer_txt.id
    }
  })

  return answer
}

function deselectAnswers() {
  answer_txt.forEach(answer_txt => {
    answer_txt.checked = false
  })
}

submit_bnt.addEventListener('click', () => {
  const answer = getSelected()

  console.log(answer)
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `<h2 class = 'final-msg'> Você acertou ${score}/${quizData.length}</h2> 
      
      <button class="submit reload" onclick = 'location.reload()'>Reload</button>`
    }
  }
})
