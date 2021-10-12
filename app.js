let numbers= [3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 1];

let holder = [];


function loop(number){
    let that = this;


    this.number = numbers[i];


    this.ele = document.createElement("div");
    this.num = document.createElement("a");
    this.message = document.createElement("a");

    this.num.innerHTML = "The value is " + this.number;

    if(this.number < 10){
        this.message.innerHTML += " and it is below 10"
    }else if(this.number === 15){
        this.message.innerHTML += " and is exactly 15"
    } else if(this.number.length > 5){
        this.message.innerHTML += " and the string length is more than 5"
    }else{
        this.message.innerHTML += " and is normal"
    }

    this.num.addEventListener("click", function(){
        that.changeColor();
    })

    this.ele.appendChild(this.num);
    this.ele.appendChild(this.message);
    document.body.appendChild(this.ele);
}
loop.prototype.changeColor = function(){
    this.message = this.message.style.color = "blue";
    this.num = this.num.style.color = "blue";


}
for (var i=0; i<numbers.length; i++){
    holder.push(new loop(numbers[i]))
}

