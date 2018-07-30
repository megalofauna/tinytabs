'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function TinyTabs(tabSelector) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


  var tabbedComponent = document.querySelector(tabSelector);

  var defaults = {
    tabList: tabbedComponent.querySelector('ul'),
    tabTrigger: '[data-tab-trigger]',
    tabContent: '[data-tab-content]',
    tabTriggerActiveClass: 'is-active',
    equalizeTabHeight: false
  };

  var applied = _extends({}, defaults, options);
  var tabTriggers = Array.from(tabbedComponent.querySelectorAll(applied.tabTrigger));
  var tabContents = Array.from(tabbedComponent.querySelectorAll(applied.tabContent));

  var setEqualHeight = function setEqualHeight() {
    var tallest = 0;
    tabContents.forEach(function (tabContent) {
      tabContent.removeAttribute('hidden');
      var currentHeight = tabContent.offsetHeight;
      console.log(tallest);
      if (currentHeight > tallest) {
        tallest = currentHeight;
      }
      tabContent.style.height = tallest + 'px';
      tabContent.setAttribute('hidden', '');
    });
  };

  if (applied.equalizeTabHeight === true) {
    setEqualHeight();
  }

  tabContents[0].removeAttribute('hidden');
  tabContents[0].removeAttribute('aria-hidden');
  tabTriggers[0].setAttribute('aria-selected', 'true');
  applied.tabList.setAttribute('aria-role', 'tablist');

  tabTriggers.forEach(function (tabTrigger) {
    tabTrigger.setAttribute('role', 'tab');
    tabTrigger.parentNode.setAttribute('aria-role', 'presentation');
  });

  tabContents.forEach(function (tabContent) {
    tabContent.setAttribute('aria-role', 'tabpanel');
    tabContent.setAttribute('aria-hidden', "");
  });

  tabTriggers.forEach(function (tabTrigger) {
    tabTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      var id = tabTrigger.getAttribute('href');
      var targetContent = tabbedComponent.querySelector(id);

      tabTriggers.forEach(function (tabTrigger) {
        tabTrigger.classList.remove(applied.tabTriggerActiveClass);
        tabTrigger.removeAttribute('aria-selected');
      });

      tabContents.forEach(function (tabContent) {
        tabContent.setAttribute('hidden', '');
        tabContent.setAttribute('aria-hidden', 'true');
      });

      tabTrigger.classList.add(applied.tabTriggerActiveClass);
      tabTrigger.setAttribute('aria-selected', 'true');
      targetContent.removeAttribute('hidden');
      targetContent.removeAttribute('aria-hidden');
    });
  });

  var separator = document.createElement('div');
  separator.id = 'end-of-tab';
  separator.setAttribute('role', 'separator');
  separator.setAttribute('aria-labelledby', 'end-of-tab');
  separator.setAttribute('aria-label', 'End of');
  tabbedComponent.appendChild(separator);
}