let box1 = document.querySelector('.box1');
let main = document.querySelector('.main');
let startButton = document.querySelector('.start');



let press = false;



let start = () => {

    press = !press;
    
    box1.classList.add('deactive');
    main.classList.remove('deactive');

    
    if(press == true)
    {
        let song = document.querySelector('.song');

        let timer = setTimeout(() => {
        
        
            song.play();
        },1200) ;
        
    }

    


  let inc = 1;
    setInterval(() => {
    
    
        if(inc >8)
        {
            inc = 1;
        }
    
        document.querySelector('.image').src = `./img-${inc}.jpeg`;
    
        inc++;
    },2000);
}
    




startButton.addEventListener('click', start);











