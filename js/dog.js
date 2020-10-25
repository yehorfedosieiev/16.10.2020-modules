import Pet from './pet.js';
import {soundDog} from './var.js';

export default class Cat extends Pet{
    constructor(name, img){
        super (name, img);
    }
    createSound (){
        super.createSound(soundDog);
    }
}