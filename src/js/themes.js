(function () {
  const demoContainers = document.querySelectorAll('.demo-container')
  const demoTitle = document.querySelector('.demo-title')
  const demoClass = document.querySelector('.demo-class')
  const themeButtons = Array.from(document.querySelectorAll('.jsThemeButton'))

  const setDemoClass = demoClass.getAttribute('class').split(' ')
  themeButtons.forEach(themeButton => {

    const themeAttribute = themeButton.getAttribute('data-theme-class')
    if (themeAttribute === setDemoClass[1]) {
      document.querySelector('[data-theme-class=' + themeAttribute + ']').classList.add('theme-button-active')
    }

    themeButton.addEventListener('click', (e) => {
      themeButtons.forEach(themeButton => {
        themeButton.classList.remove('theme-button-active');
      })


      const theme = e.currentTarget
      const themeClass = theme.getAttribute('data-theme-class')
      const themeTitle = theme.innerHTML
      demoTitle.innerHTML = 'The "' + themeTitle + '"'
      demoClass.setAttribute('class', themeClass + " demo-class")
      theme.classList.add('theme-button-active')



      demoContainers.forEach(demoContainer => {
        demoContainer.classList.remove('reveal-opacity')
        const demo = demoContainer.querySelector('.demo-class')
        if (demo.classList.contains(themeClass)) {
          setTimeout(function () {
            demo.closest('.demo-container').classList.add('reveal-opacity')
          }, 125)
        }
      })

    })
  })
})()


