class heroDio{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
       

    }
    atacar(){
        let atack = ""
        if (this.type === "mago"){
            atack = "magia"
        }
        else if(this.type === "guerreiro"){
            atack = "espada"
        }
        else if(this.type === "monge"){
            atack = "artes marciais"
        }
        else if(this.type === "ninja"){
            atack= "shuriken"

        }
        console.log(`o ${this.type} atacou usando ${atack}`)
       
    }

}

let primeiroHero = new heroDio ("flaviao", 20, "guerreiro")
let segundoHero = new heroDio ("felipao", 28, "monge")
let terceiroHero = new heroDio ("fazer", 70, "ninja")
let quartoHero = new heroDio ("fagner", 289, "mago")
primeiroHero.atacar()
segundoHero.atacar()
terceiroHero.atacar()
quartoHero.atacar()