function DigitalPal(hungry, sleepy, bored, age) {
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;
    this.feed = function() {
        console.log(this.hungry + " " + this.sleepy + " " + this.bored + " " + this.age + " ")
    }

}
 var dog = new DigitalPal("true", "false", true, 0);

 dog.feed();
 
 