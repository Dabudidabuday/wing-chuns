(function () {
  let questions = [
    {
      button: document.querySelector('#question1 button'),
      answer: document.getElementById('answer1'),
      icon: document.getElementById('faq-icon1'),
    },
    {
      button: document.querySelector('#question2 button'),
      answer: document.getElementById('answer2'),
      icon: document.getElementById('faq-icon2'),
    },
    {
      button: document.querySelector('#question3 button'),
      answer: document.getElementById('answer3'),
      icon: document.getElementById('faq-icon3'),
    }
  ];

  /**
   * @method timedOutHtmlChange
   * @param element {HTMLElement}
   * @param value {String}
   * @param delay {Number}
   */
  function timedOutHtmlChange (element, value, delay) {
    setTimeout(function () {
      element.innerHTML = value;
    }, delay);
  }

  /**
   * @method toggleAccordion
   * @param emitter {HTMLElement}
   * @param content {HTMLElement}
   * @param icon {HTMLElement}
   */
  function toggleAccordion(emitter, content, icon) {
    $(emitter).click(function () {
      if (content.style.maxHeight === '0px') {
        timedOutHtmlChange(icon, `-`, 250);
        emitter.classList.add('expanded');
        return content.style.maxHeight = '250px';
      }

      timedOutHtmlChange(icon, `+`, 150);
      emitter.classList.remove('expanded');
      return content.style.maxHeight = '0px';
    });
  }

  questions.forEach(item => toggleAccordion(item.button, item.answer, item.icon));
})();