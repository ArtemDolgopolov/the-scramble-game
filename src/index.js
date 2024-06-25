import './styles.scss'

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
word.textContent = 'atrwe'
content.appendChild(word)

const details = document.createElement('div')
details.classList.add('details')
content.appendChild(details)

const hint = document.createElement('p')
word.classList.add('hint')
hint.textContent = 'Hint:'
details.appendChild(hint)

const hintSpan = document.createElement('span')
hintSpan.textContent = ' A liquid which we daily drink'
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

