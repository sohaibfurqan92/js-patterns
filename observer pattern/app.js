//create ui

// constructor function

function EventObserver(){
  this.observer =[];
}

EventObserver.prototype ={
  subscribe: function(fn){
    this.observer.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },

  unsubscribe:function(fn){
    this.observer = this.observer.filter(function(item){
      if(item!==fn){
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },

  fire:function(){
    this.observer.forEach(item=>item.call());
  }
}

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click',function(){
  click.subscribe(getCurrMilliSeconds);
});
document.querySelector('.sub-s').addEventListener('click',function(){
  click.subscribe(getCurrSeconds);
});
document.querySelector('.unsub-ms').addEventListener('click',function(){
  click.unsubscribe(getCurrMilliSeconds);
});
document.querySelector('.unsub-s').addEventListener('click',function(){
  click.unsubscribe(getCurrSeconds);
});
document.querySelector('.fire').addEventListener('click',function(){
  click.fire();
});

function getCurrMilliSeconds(){
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}
function getCurrSeconds(){
  console.log(`Current seconds: ${new Date().getSeconds()}`);
}