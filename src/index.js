import './styles.scss'
import { levels } from './levels'

let currentIndex = 0
let level = levels[currentIndex]

const container = document.createElement('div')
container.classList.add('container')
document.body.appendChild(container)

const title = document.createElement('h2')
title.textContent = 'Word Scramble'
container.appendChild(title)

const content = document.createElement('div')
content.classList.add('content')
container.appendChild(content)

const word = document.createElement('p')
word.classList.add('word')
word.textContent = level.word.split('').sort(() => Math.random() - 0.5).join('')
content.appendChild(word)
console.log(word.textContent)

const details = document.createElement('div')
details.classList.add('details')
content.appendChild(details)

const hint = document.createElement('p')
hint.classList.add('hint')
hint.textContent = 'Hint:'
details.appendChild(hint)

const hintSpan = document.createElement('span')
hintSpan.classList.add('hint-span')
hintSpan.textContent = level.hint
hint.appendChild(hintSpan)
console.log(hintSpan.textContent)

const time = document.createElement('p')
time.classList.add('time')
time.textContent = 'Time Left: '
details.appendChild(time)

const timeSpan = document.createElement('span')
timeSpan.textContent = ' 30'
time.appendChild(timeSpan)

const input = document.createElement('input')
input.type = 'text'
input.placeholder = 'Enter a valid word'
content.appendChild(input)

const buttons = document.createElement('div')
buttons.classList.add('buttons')
content.appendChild(buttons)

const refreshWordButton = document.createElement('button')
refreshWordButton.classList.add('refresh-word')
refreshWordButton.textContent = 'Refresh Word'
buttons.appendChild(refreshWordButton)

const checkWordButton = document.createElement('button')
checkWordButton.classList.add('check-word')
checkWordButton.textContent = 'Check Word'
buttons.appendChild(checkWordButton)

checkWordButton.addEventListener('click', () => {
  const inputValue = input.value.toLowerCase().trim()
  
  if (inputValue.trim() !== level.word) {
    alert(`${inputValue.trim()} is the wrong word!`) 
  } else {
      alert(`${inputValue.trim()} is the right word!`)
      if (currentIndex === levels.length) {
       currentIndex == 0
      }
      else {
       currentIndex = (currentIndex + 1) % levels.length
      } 
      goToNextLevel(currentIndex)
    }
})

function goToNextLevel(index) {
  level = levels[index]

  const word = document.querySelector('.word')
  const hintSpan = document.querySelector('.hint-span')

  word.textContent = level.word.split('').sort(() => Math.random() - 0.5).join('')
  hintSpan.textContent = level.hint
  input.value = ''
}