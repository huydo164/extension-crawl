const elementCover = document.getElementById('crawl')
const click = document.getElementById('click')
const list = document.getElementById('list-img')

click.addEventListener('click', async () => {
  chrome.storage.sync.get("images", ({ images }) => {
    list.innerHTML = images.map((item) => {
      return `<li>${item}</li>`
    }).join('')
  })
  elementCover.style.width = '400px'
})