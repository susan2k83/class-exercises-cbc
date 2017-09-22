var dog = {
    raining: true,
    noise: "Woof",
    makeNoise : function() {
        if(this.raining === true) {
            console.log(this.noise);
        }
        
    }
};

dog.makeNoise();

function doStuff() {
    console.log("Im doing some stuff");
}

doStuff();