
/////////////////////////////////Q1////////////////////////////////////
class Open_Account{
    constructor(name,balance){
        this.name=name
        this.balance=balance
    }
    display_Info(){
        return `your username is => ${this.name}, amount available in your account is => ${this.balance}`
    }

}
// let obj= new Open_Account("mariam", 2000)
// console.log(obj.display_Info())
//////////////////////////////////////////////////////
class Current_Account{
    constructor(name,balance){
        this.name=name
        this.balance=balance
    }
    create_Current_Account(name,balance,address){
        this.name=name
        this.balance=balance
        this.address=address
        return `your username is => ${this.name}, amount available in your current account is => ${this.balance}`
    }
    withdraw_Money(money){
        if(money<this.balance){
            this.balance=this.balance-money
            return `your new balance is => ${this.balance}`
        }
    }
    deposit_Money(money){
        this.balance=this.balance+money
    }
    transfer_Money(money,A,B){
        if(A.balance>money){
            B.balance=B.balance+money
        }
    }
}
//////////////////////////////////////////////////////
class Saving_Account{
    constructor(name,balance){
        this.name=name
        this.balance=balance
    }
    create_Saving_Account(name,balance,address){
        this.name=name
        this.balance=balance
        this.address=address
        return `your username is => ${this.name}, amount available in your saving account is => ${this.balance}`
    }
}

/////////////////////////////////Q2////////////////////////////////////

class Monster{
    constructor(name,hp){
        this.name=name
        this.hp=hp
    }
    get_Name(){
        return this.name
    }
    get_Hp(){
        return this.hp
    }
    attack(){

    }
}

class Alien extends Monster{
    constructor(name,hp,super_power1,super_power2,super_power3){
        super(name,hp)
        this.super_power1=super_power1
        this.super_power2=super_power2
        this.super_power3=super_power3
    }
    attack(){
        return `Alien has superpowers =>${this.super_power1}, ${this.super_power2} and ${this.super_power3} `
    }
}
class Vampire extends Monster{
    constructor(name,hp,super_power1,super_power2,super_power3){
        super(name,hp)
        this.super_power1=super_power1
        this.super_power2=super_power2
        this.super_power3=super_power3
    }
    attack(){
        return `Alien has superpowers =>${this.super_power1}, ${this.super_power2} and ${this.super_power3} `
    }
}

class Decorated_Monster{
    constructor(updated_Name,updated_Hp,life){
        this.updated_Hp=updated_Hp
        this.updated_Name=updated_Name
        this.life=life
    }
}

class Speed extends Decorated_Monster{
    constructor(updated_Name,updated_Hp,life){
        super(updated_Name,updated_Hp,life)
    }
}

class Fly extends Decorated_Monster{
    constructor(updated_Name,updated_Hp,life){
        super(updated_Name,updated_Hp,life)
    }
}

class Poison extends Decorated_Monster{
    constructor(updated_Name,updated_Hp,life){
        super(updated_Name,updated_Hp,life)
    }
}

let power1= new Poison("monster_Alien",1000,5);
let power2= new Fly("monster_Alien",1000,5);
let power3= new Fly("monster_Alien",1000,5)
let monster_Alien= new Alien("alien",1000,power1,power2,power3)