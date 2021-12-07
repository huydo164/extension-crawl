

const images = []

//case 1: vertical slider
if (document.getElementById('altImages')) {
  const selector1 = document.querySelectorAll('li.a-spacing-small.item')
  if (selector1.length) {
    for (const element of selector1) {
      images.push(element.querySelector('img').getAttribute('src'))
    }
  }
}

//case 2: horizon slider
if (document.getElementById('booksImageBlock_feature_div')) {
  (async () => {
    const selector2 = document.querySelector('.thumb-text.thumb a')
    selector2.click()
    const modal = document.getElementById('a-popover-content-2')
    await new Promise(r => setTimeout(r, 1000))
    const listImg = modal.querySelectorAll('.ig-thumb-image img')
    if (listImg.length) {
      for (const element of listImg) {
        images.push(element.getAttribute('src'))
      }
    }
    chrome.storage.sync.set({ images })
  })()
}


// case 3: ebook
if (document.getElementById('ebooksImgBlkFront')) {
  const selector3 = document.getElementById('ebooksImgBlkFront')
  const pathImage = selector3 ? selector3.getAttribute('src') : null
  if (pathImage) {
    images.push(pathImage)
  }
}

// case 4: cd
if (document.getElementById('digitalMusicProductImage_feature_div')) {
  const imageNode = document.querySelector('#digitalMusicProductImage_feature_div > img')
  if (imageNode) {
    images.push(imageNode.getAttribute('src'))
  }
}

chrome.storage.sync.set({ images })

