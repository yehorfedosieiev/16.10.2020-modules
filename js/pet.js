export default class Pet{
    
    constructor(name, img){
        this.name = name;
        this.img = img;
    }

    createSound(sound){
        let image = document.createElement('img');
        image.setAttribute('src', this.img);
        document.querySelector('#idDiv').appendChild(image);

        let audio = document.createElement('audio');
        audio.setAttribute('src', sound);
        document.querySelector('#idDiv').appendChild(audio);

        image.addEventListener('click', () => {
            audio.play();
        });
    }
}

// export default Pet;