const elementNode = document.getElementById('ppd')
const selector1 = elementNode.querySelectorAll('li.a-spacing-small.item')
const Images = []
if (selector1.length) {
  for (const element of selector1) {
    Images.push(element.querySelector('img').getAttribute('src'))
  }
}

chrome.storage.sync.set({ Images });