

const images = []

//case 1: vertical slider
if (document.querySelectorAll('li.a-spacing-small.item')) {
  const selector1 = document.querySelectorAll('li.a-spacing-small.item')
  if (selector1.length) {
    for (const element of selector1) {
      images.push(element.querySelector('img').getAttribute('src'))
    }
  }
}

//case 2: horizon slider
if (document.querySelector('.thumb-text.thumb a')) {
  const selector2 = document.querySelector('.thumb-text.thumb a')
  selector2.click()
  const modal = document.getElementById('a-popover-content-2')
  const listImg = modal.querySelectorAll('ig-thumb-image')
  if (listImg.length) {
    for (const element of listImg) {
      images.push(element.querySelector('img').getAttribute('src'))
    }
  }
}


// case 3: ebook
if (document.getElementById('ebooksImgBlkFront')) {
  const selector3 = document.getElementById('ebooksImgBlkFront')
  const pathImage = selector3 ? selector3.getAttribute('src') : null
  if (pathImage) {
    images.push(pathImage)
  }
}

// chrome.storage.sync.set({ images })

