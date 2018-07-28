function TinyTabs(tabSelector, options = {}) {

  const tabbedComponent = document.querySelector(tabSelector)

  let defaults = {
    tabList: tabbedComponent.querySelector('ul'),
    tabTrigger: '[data-tab-trigger]',
    tabContent: '[data-tab-content]',
    tabTriggerActiveClass: 'is-active'
  }

  const applied = Object.assign({}, defaults, options)
  const tabTriggers = Array.from(tabbedComponent.querySelectorAll(applied.tabTrigger))
  const tabContents = Array.from(tabbedComponent.querySelectorAll(applied.tabContent))

  tabContents[0].removeAttribute('hidden')
  tabContents[0].removeAttribute('aria-hidden')
  applied.tabList.setAttribute('aria-role', 'tablist')

  tabContents.forEach(tabContent => {
    tabContent.setAttribute('aria-role', 'tabpanel')
    tabContent.setAttribute('aria-hidden', "")
  })

  tabTriggers.forEach(tabTrigger => {
    tabTrigger.setAttribute('role', 'tab')
    tabTrigger.parentNode.setAttribute('aria-role', 'presentation')
  })

  tabTriggers.forEach(tabTrigger => {
    tabTrigger.addEventListener('click', e => {
      e.preventDefault();
      let id = tabTrigger.getAttribute('href')
      let targetContent = tabbedComponent.querySelector(id)

      tabTriggers.forEach(tabTrigger => {
        tabTrigger.classList.remove(applied.tabTriggerActiveClass);
      })

      tabContents.forEach(tabContent => {
        tabContent.setAttribute('hidden', '')
        tabContent.setAttribute('aria-hidden', 'true')
      })

      tabTrigger.classList.add(applied.tabTriggerActiveClass)
      targetContent.removeAttribute('hidden')
      targetContent.removeAttribute('aria-hidden')
    })
  })

  const separator = document.createElement('div');
  separator.id = 'end-of-tab';
  separator.setAttribute('role', 'separator');
  separator.setAttribute('aria-labelledby', 'end-of-tab');
  separator.setAttribute('aria-label', 'End of');
  tabbedComponent.appendChild(separator);
}


