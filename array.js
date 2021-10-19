class Carro{
    #color;
    setColor(color){
        this.#color = color;
    }
    getColor(){
        return this.#color;
    }
}

let carro = new Carro();
carro.setColor('red');
console.log(carro.getColor());