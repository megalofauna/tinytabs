function TinyTabs(tabSelector, options = {}) {

  const tabbedComponent = document.querySelector(tabSelector)

  let defaults = {
    tabList: tabbedComponent.querySelector('ul'),
    tabTrigger: '[data-tab-trigger]',
    tabContent: '[data-tab-content]',
    tabTriggerActiveClass: 'is-active',
    equalizeTabHeight: false
  }

  const applied = Object.assign({}, defaults, options)
  const tabTriggers = Array.from(tabbedComponent.querySelectorAll(applied.tabTrigger))
  const tabContents = Array.from(tabbedComponent.querySelectorAll(applied.tabContent))

  const setEqualHeight = () => {
    let tallest = 0
    tabContents.forEach(tabContent => {
      tabContent.removeAttribute('hidden')
      let currentHeight = tabContent.offsetHeight
      console.log(tallest)
      if (currentHeight > tallest) {
        tallest = currentHeight
      }
      tabContent.style.height = tallest + 'px'
      tabContent.setAttribute('hidden', '')
    })
  }

  if (applied.equalizeTabHeight === true) {
    setEqualHeight()
  }

  tabContents[0].removeAttribute('hidden')
  tabContents[0].removeAttribute('aria-hidden')
  tabTriggers[0].setAttribute('aria-selected', 'true')
  applied.tabList.setAttribute('aria-role', 'tablist')

  tabContents.forEach(tabContent => {
    tabContent.setAttribute('aria-role', 'tabpanel')
    tabContent.setAttribute('aria-hidden', "true")
  })

  tabTriggers.forEach(tabTrigger => {

    tabTrigger.setAttribute('role', 'tab')
    tabTrigger.parentNode.setAttribute('aria-role', 'presentation')

    tabTrigger.addEventListener('click', e => {
      e.preventDefault();
      let id = tabTrigger.getAttribute('href')
      let targetContent = tabbedComponent.querySelector(id)

      tabTriggers.forEach(tabTrigger => {
        if (tabTrigger.getAttribute('id') !== id) {
          tabTrigger.classList.remove(applied.tabTriggerActiveClass)
          tabTrigger.removeAttribute('aria-selected')
        }
      })

      tabContents.forEach(tabContent => {
        if (tabContent !== targetContent) {
          tabContent.setAttribute('hidden', '')
          tabContent.setAttribute('aria-hidden', 'true')
        }
      })

      tabTrigger.classList.add(applied.tabTriggerActiveClass)
      tabTrigger.setAttribute('aria-selected', 'true')
      targetContent.removeAttribute('hidden')
      targetContent.removeAttribute('aria-hidden')
    })
  })

  const separator = document.createElement('div')
  separator.id = 'end-of-tab'
  separator.setAttribute('role', 'separator')
  separator.setAttribute('aria-labelledby', 'end-of-tab')
  separator.setAttribute('aria-label', 'End of')
  tabbedComponent.appendChild(separator)
}



