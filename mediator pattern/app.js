// chatroom is the mediator, users are the colleagues of the chatroom

const User = function(name){
  this.name =name;
  this.chatroom = null;
};

User.prototype.send = function(message,to){
  chatroom.send(message,this,to);
};

User.prototype.receive = function(message, from){
  console.log(`${from.name} to ${this.name}: ${message}`);
}

const Chatroom = function(){
  const users ={};

  return{
    register:function(user){
      users[user.name] = user;
      user.chatroom = this;
    },

    send: function(message,from,to){
      if(to){
        to.receive(message,from);
      } else{
        for (const key in users) {
          if(users[key]!==from){
            users[key].receive(message,from);
          }
          }
        }
      }
    }
  };

  const brad = new User('brad');
  const jeff = new User('jeff');
  const sara = new User('sara');

  const chatroom = new Chatroom();

  chatroom.register(brad);
  chatroom.register(jeff);
  chatroom.register(sara);

brad.send('Hi Jeff',jeff);
sara.send('Hello Brad',brad);
jeff.send('Hey everyone!');  