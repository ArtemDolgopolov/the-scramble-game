import './styles.scss'
import { levels } from './levels'

let currentIndex = 0
let level = levels[currentIndex]
let timerTimeout
let remainingTime
let isModalOpened = false

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

const modal = document.createElement('div')
modal.classList.add('modal')
modal.id = 'game-modal'
document.body.appendChild(modal)

const modalBox = document.createElement('div')
modalBox.classList.add('modal__box')
modal.appendChild(modalBox)

const modalText = document.createElement('p')
modalText.classList.add('modal-text')
modalText.textContent = ''
modalBox.appendChild(modalText)

const closeModalButton = document.createElement('div')
closeModalButton.classList.add('close-modal-button')
closeModalButton.textContent = 'X'
modalBox.appendChild(closeModalButton)

closeModalButton.addEventListener('click', () => {
  modal.classList.remove('open')
  isModalOpened = false
  startCountdown()
})

function openModal() {
  modal.classList.add('open')
  isModalOpened = true
  clearInterval(timerTimeout)
}

checkWordButton.addEventListener('click', () => {
  const inputValue = input.value.toLowerCase().trim()
  
  if (inputValue.trim() !== level.word) {
    openModal()
    modalText.textContent = `${inputValue.trim()} is the wrong word!` 
  } 
  else {
    openModal()
    modalText.textContent = `${inputValue.trim()} is the right word!`
    currentIndex = (currentIndex + 1) % levels.length
    goToNextLevel(currentIndex)
    resetTimer()
  }
  if (inputValue.trim() === '') {
   openModal()
   modalText.textContent = 'Type a word to check first!'
 } 
})

refreshWordButton.addEventListener('click', () => {
    currentIndex = Math.floor(Math.random() * (levels.length - 0 + 1)) + 1
    goToNextLevel(currentIndex)
    resetTimer()
  }
) 

function goToNextLevel(index) {
  level = levels[index]

  const word = document.querySelector('.word')
  const hintSpan = document.querySelector('.hint-span')

  word.textContent = level.word.split('').sort(() => Math.random() - 0.5).join('')
  hintSpan.textContent = level.hint
  input.value = ''
}

function startCountdown() {
 if (isModalOpened) return

 clearInterval(timerTimeout)

 timerTimeout = setInterval(() => {
   if (remainingTime > 0) {
     remainingTime -= 1
     timeSpan.textContent = remainingTime
   } else {
     clearInterval(timerTimeout)
     openModal()
     modalText.textContent = `Time is up! The right word is ${level.word}`
     resetTimer()
     goToNextLevel(Math.floor(Math.random() * levels.length))
   }
 }, 1000)
}

function resetTimer() {
  remainingTime = 30
  timeSpan.textContent = remainingTime
  startCountdown()
}

window.addEventListener("load", () => {
  resetTimer()
})