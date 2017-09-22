function Character(name, role) {
    this.name = name;
    this.role = role;
    this.age = age;
    this.printStats = function() {
      console.log(this.name + " " + this.role);
    }
  }
  
var wizard = new Character("white", "wizard", "10");
wizard.printStats();

var troll = new Character("slimy", "troll");
troll.printStats();