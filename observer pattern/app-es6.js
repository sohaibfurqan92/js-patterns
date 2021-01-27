class EventObserver{
  constructor(){
    this.observer =[];
  }

   subscribe(fn) {
     this.observer.push(fn);
     console.log(`You are now subscribed to ${fn.name}`); 
  }

  unsubscribe(fn){
    this.observer = this.observer.filter(item=>{
      if(item!==fn){
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire(){
    this.observer.forEach(item=>item.call());
  }
}

const click = new EventObserver();
document.querySelector('.sub-ms').addEventListener('click',function () {
  click.subscribe(getCurrMilliSeconds);
});

document.querySelector('.unsub-ms').addEventListener('click',function () {
  click.unsubscribe(getCurrMilliSeconds);
});

document.querySelector('.fire').addEventListener('click',function(){
  click.fire();
});

document.querySelector('.sub-s').addEventListener('click',function(){
  click.subscribe(getCurrSeconds);
});
document.querySelector('.unsub-s').addEventListener('click',function(){
  click.unsubscribe(getCurrSeconds);
});

function getCurrMilliSeconds() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

function getCurrSeconds(){
  console.log(`Current seconds: ${new Date().getSeconds()}`);
}