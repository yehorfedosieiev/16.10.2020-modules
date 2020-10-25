import Pet from './pet.js';
import {soundCat} from './var.js';

export default class Cat extends Pet{
    constructor(name, img){
        super (name, img);
    }
    createSound (){
        super.createSound(soundCat);
    }
}