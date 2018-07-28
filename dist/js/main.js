function TinyTabs(tabSelector, options = {}) {

  const tabbedComponent = document.querySelector(tabSelector)

  let defaults = {
    tabTrigger: '[data-tab-trigger]',
    tabContent: '[data-tab-content]',
    tabTriggerActiveClass: 'is-active'
  }

  const applied = Object.assign({}, defaults, options)
  const tabTriggers = Array.from(tabbedComponent.querySelectorAll(applied.tabTrigger))
  const tabContents = Array.from(tabbedComponent.querySelectorAll(applied.tabContent))

  tabContents[0].removeAttribute('hidden')
  tabContents[0].removeAttribute('aria-hidden')

  tabTriggers.forEach(tabTrigger => {
    tabTrigger.addEventListener('click', e => {
      e.preventDefault();
      let id = tabTrigger.getAttribute('href')
      let associatedContent = tabbedComponent.querySelector(id)

      tabTriggers.forEach(tabTrigger => {
        tabTrigger.classList.remove(applied.tabTriggerActiveClass);
      })

      tabContents.forEach(tabContent => {
        tabContent.setAttribute('hidden', '')
        tabContent.setAttribute('aria-hidden', 'true')
      })

      tabTrigger.classList.add(applied.tabTriggerActiveClass)
      associatedContent.removeAttribute('hidden')
      associatedContent.removeAttribute('aria-hidden')
    })
  })
}


