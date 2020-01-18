(function () {
  let questions = [
    {
      button: document.querySelector('#question1 button'),
      answer: document.getElementById('answer1'),
    },
    {
      button: document.querySelector('#question2 button'),
      answer: document.getElementById('answer2'),
    },
    {
      button: document.querySelector('#question3 button'),
      answer: document.getElementById('answer3'),
    }
  ];

  function toggleAccordion(emitter, content) {
    $(emitter).click(function () {
      if (content.style.maxHeight === '0px') {
        return content.style.maxHeight = '250px';
      }

      return content.style.maxHeight = '0px';
    });
  }

  questions.forEach(item => toggleAccordion(item.button, item.answer));
})();