(function () {

  const demoTitle = document.querySelector('.demo-title')
  const demoClass = document.querySelector('.demo-class')
  const themeButtons = Array.from(document.querySelectorAll('.jsThemeButton'))

  themeButtons.forEach(themeButton => {
    themeButton.addEventListener('click', (e) => {

      themeButtons.forEach(themeButton => {
        themeButton.classList.remove('theme-button-active');
      })

      const theme = e.currentTarget
      const themeClass = theme.getAttribute('data-theme-class')
      const themeTitle = theme.innerHTML
      demoTitle.innerHTML = 'The "' + themeTitle + '"'
      demoClass.setAttribute('class', themeClass)
      theme.classList.add('theme-button-active')
    })
  })
})()


