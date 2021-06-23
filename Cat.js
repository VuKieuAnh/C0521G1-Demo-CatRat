class Cat{
    constructor(_name, _weight, _speed) {
        this.name = _name;
        this.weight = _weight;
        this.speed = _speed;
    }
    sound(text){
        alert(this.name +" " + text);
    }
    catchRat(rat){
        if (this.speed>rat.speed){
            alert(this.name + " da bat dc chuot" + rat.name);
        }
    }

    eatRat(rat){
        if (rat.status){
            this.weight += rat.weight;
            rat.status = false;
            alert(this.name + " da bat an chuot" + rat.name);
        }
    }
}