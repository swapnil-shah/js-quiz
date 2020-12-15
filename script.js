const form = document.querySelector("#quiz-form")
const answers = Array.from(document.querySelectorAll(".answer"))
const questionItems = document.querySelectorAll(".question-item")
const alert = document.querySelector("#alert");

form.addEventListener('submit', e => {
  e.preventDefault()
  questionItems.forEach(questionItem => {
    showInCorrect(questionItem)
  })
  const checkedAnswers = answers.filter(answer => answer.checked)
  console.log("~ checkedAnswers", checkedAnswers)
  checkedAnswers.forEach(answer => {
    const isCorrect = answer.value == "true"
    const questionItem = answer.closest('.question-item')
    if (isCorrect) {
      showCorrect(questionItem)
    }
    else {
      showInCorrect(questionItem)
    }
    const allTrue = checkedAnswers.every(answer => answer.value === 'true')
    const allAnswered = checkedAnswers.length === questionItems.length
    if (allTrue && allAnswered) {
      alert.classList.add("active")
      setTimeout(() => {
        alert.classList.remove("active")
      }, 1000)
    }
  })
})























// const inputArray = ['answer-1', 'answer-2', 'answer-3']

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   let allChecked = 0
//   inputArray.forEach(input => {
//     if (document.querySelector(`input[name="${input}"]:checked`) == null) {
//       document.querySelector(`input[name="${input}"]`).closest('.question-item').classList.add("incorrect");
//       document.querySelector('.all-required ').style.display = "block";
//       allChecked++
//     }
//   })
//   if (allChecked == 0) {
//     document.querySelector('.all-required ').style.display = "none";
//     console.log("all checked")
//     let correctAnswers = 0
//     answerInputs.forEach(function (input) {
//       const parentQuestionItem = input.closest('.question-item')
//       if (input.checked) {
//         if (input.checked.toString() === input.value) {
//           showCorrect(parentQuestionItem)
//           correctAnswers++
//         }
//         else {
//           showInCorrect(parentQuestionItem)
//         }
//       }
//     })
//     if (correctAnswers == inputArray.length) {
//       document.getElementById('alert').style.display = 'block'
//       setTimeout(function () {
//         document.getElementById('alert').style.display = 'none'
//       }, 2000);
//     }
//   }
// })
function showCorrect(ele) {
  ele.classList.remove("incorrect")
  ele.classList.add("correct")
}
function showInCorrect(ele) {
  ele.classList.remove("correct")
  ele.classList.add("incorrect")
}