const prefers = window.matchMedia('(prefers-color-scheme: dark)')

function change() {
  const elHtml = document.documentElement
  elHtml.setAttribute('data-theme', prefers.matches ? 'dark' : 'light')
}

document.addEventListener('astro:page-load', () => {
  prefers.addEventListener('change', () => {
    change()
  })
  change()
})
