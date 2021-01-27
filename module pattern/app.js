// Module Pattern

// const UICtrl = (function(){
//   const text = 'Hello World';

//   const changeText = function(){
//     const element = document.querySelector('h1');
//     element.textContent = text;
    
//   }

//   return{
//     callChangeText: function(){
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();

// Revealing Module Pattern
const itemCtrl = (function(){
  const data =[];

  function add(item){
    data.push(item);
    console.log("Item Added...");
  }

  function get(id){
    return data.find(item=>item.id===id);
  }

  return{
    add:add,
    get:get
  }
})();

itemCtrl.add({id:1, name:"John"});
console.log(itemCtrl.get(1));