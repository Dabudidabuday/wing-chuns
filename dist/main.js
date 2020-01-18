(function () {
  let questions = [
    {
      button: document.getElementById('question1'),
      answer: document.getElementById('answer1')
    },
    {
      button: document.getElementById('question2'),
      answer: document.getElementById('answer2')
    },
    {
      button: document.getElementById('question3'),
      answer: document.getElementById('answer3')
    }
  ];

  function toggleAccordion(emitter, content) {
    $(emitter).click(function () {
      if (content.style.height === '0') {
        return content.style.height = auto;
      }

      return content.style.height = 'auto';
    });
  }

  questions.forEach(item => toggleAccordion(item.button, item.answer));
})();