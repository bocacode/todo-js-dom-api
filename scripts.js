// Create a "close" button and append it to each list item
const allListItems = document.getElementsByTagName('li')
console.log(allListItems)

for (let i = 0; i < allListItems.length; i++) {
  const span = document.createElement('SPAN')
  const txt = document.createTextNode('\u00D7') // this is the x for the close button

  span.className = 'close'
  span.appendChild(txt)
  allListItems[i].appendChild(span)
}


// Click on a close button to hide the current list item
const close = document.getElementsByClassName('close')

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    const div = this.parentElement
    div.style.display = 'none'
  }
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul')

list.addEventListener(
  'click',
  function (event) {
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('checked')
    }
  },
  false
)

// Create a new list item when clicking on the "Add" button
function newElement() {
  const li = document.createElement('li')
  const inputValue = document.getElementById('myInput').value
  const t = document.createTextNode(inputValue)
  li.appendChild(t)
  if (inputValue === '') {
    alert('You must write something!')
  } else {
    document.getElementById('myUL').appendChild(li)
  }
  document.getElementById('myInput').value = ''

  const span = document.createElement('SPAN')
  const txt = document.createTextNode('\u00D7')
  span.className = 'close'
  span.appendChild(txt)
  li.appendChild(span)

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const div = this.parentElement
      div.style.display = 'none'
    }
  }
}
