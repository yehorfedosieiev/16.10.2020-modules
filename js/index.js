import {
    imgCat,
    imgDog
} from './var.js';

import Cat from './cat.js';
import Dog from './dog.js';

let cat = new Cat('Tom', imgCat);
cat.createSound();

let dog = new Dog('Spike', imgDog);
dog.createSound();