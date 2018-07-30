'use strict';

(function () {
  var demoContainers = document.querySelectorAll('.demo-container');
  var demoTitle = document.querySelector('.demo-title');
  var demoClass = document.querySelector('.demo-class');
  var themeButtons = Array.from(document.querySelectorAll('.jsThemeButton'));

  var setDemoClass = demoClass.getAttribute('class').split(' ');
  themeButtons.forEach(function (themeButton) {

    var themeAttribute = themeButton.getAttribute('data-theme-class');
    if (themeAttribute === setDemoClass[1]) {
      document.querySelector('[data-theme-class=' + themeAttribute + ']').classList.add('theme-button-active');
    }

    themeButton.addEventListener('click', function (e) {
      themeButtons.forEach(function (themeButton) {
        themeButton.classList.remove('theme-button-active');
      });

      var theme = e.currentTarget;
      var themeClass = theme.getAttribute('data-theme-class');
      var themeTitle = theme.innerHTML;
      demoTitle.innerHTML = 'The "' + themeTitle + '"';
      demoClass.setAttribute('class', themeClass + " demo-class");
      theme.classList.add('theme-button-active');

      demoContainers.forEach(function (demoContainer) {
        demoContainer.classList.remove('reveal-opacity');
        var demo = demoContainer.querySelector('.demo-class');
        if (demo.classList.contains(themeClass)) {
          setTimeout(function () {
            demo.closest('.demo-container').classList.add('reveal-opacity');
          }, 125);
        }
      });
    });
  });
})();