// Module Pattern

const UIctrl = (function(){
  const text = 'Hello World!';

  const changeText = function(){
    const element = document.querySelector('h1');
    element.textContent = text;
  };

  return {
    callChangeText: function(){
      changeText();
      console.log(text);
    }
  }
})();

UIctrl.callChangeText();