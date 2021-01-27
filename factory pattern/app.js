//memberFactory
//constructors
//push to array

function memberFactory(){
  this.createMember = function(name,type){
    let member;
    if(type=="simple"){
      member = new SimpleMembership(name);
    } else if(type=="standard"){
      member = new StandardMembership(name);
    } else if(type=="super"){
      member = new SuperMembership(name);
    }
    member.type =type;
    return member;
  }
}

const SimpleMembership = function(name){
  this.name = name;
  this.cost ='$5';
}
const StandardMembership = function(name){
  this.name = name;
  this.cost ='$15';
}
const SuperMembership = function(name){
  this.name = name;
  this.cost ='$25';
}

const members = [];
const factory = new memberFactory();

members.push(factory.createMember('John Doe','simple'));
members.push(factory.createMember('Rashid','standard'));
members.push(factory.createMember('Frook','super'));

// console.log(members);
members.forEach(member=>console.log(`Name: ${member.name}, type: ${member.type}, cost: ${member.cost}`));