$( document ).ready(function() {    // apenas quando o documento estiver pronto
    // Progress bar
    let containerA = document.getElementById("circleA");
    let circleA = new ProgressBar.Circle(containerA, {
        
        color: '#65DAF9',
        strokeWidth: 8,   //largura do círculo, borda
        duration: 1400,
        from: { color: '#AAA'},   //o nome da propriedade é sem aspas e o valor, com aspas 
        to: { color: '#65DAF9'},

        step: function(state, circle){

            circle.path.setAttribute('stroke', state.color);
            
            var value = Math.round(circle.value() * 82);

            circle.setText(value);
        }
        
 

    });

    
    let containerB = document.getElementById("circleB");
    let circleB = new ProgressBar.Circle(containerB, {
        
        color: '#65DAF9',
        strokeWidth: 8,   //largura do círculo, borda
        duration: 1600,
        from: { color: '#aaa'},   //o nome da propriedade é sem aspas e o valor, com aspas 
        to: {color: '#65DAF9'},

        step: function(state, circle){

            circle.path.setAttribute('stroke', state.color);
            
            var value = Math.round(circle.value() * 271);

            circle.setText(value);
        }
        
 

    });

    let containerC = document.getElementById("circleC");
    let circleC = new ProgressBar.Circle(containerC, {
        
        color: '#65DAF9',
        strokeWidth: 8,   //largura do círculo, borda
        duration: 1800,
        from: { color: '#AAA'},   //o nome da propriedade é sem aspas e o valor, com aspas 
        to: {color: '#65DAF9'},

        step: function(state, circle){

            circle.path.setAttribute('stroke', state.color);
            
            let value = Math.round(circle.value() * 602);

            circle.setText(value);
        }
        
 

    });

    let containerD = document.getElementById("circleD");
    let circleD = new ProgressBar.Circle(containerD, {
        
        color: '#65DAF9',
        strokeWidth: 8,   //largura do círculo, borda
        duration: 2000,
        from: { color: '#AAA'},   //o nome da propriedade é sem aspas e o valor, com aspas 
        to: {color: '#65DAF9'},

        step: function(state, circle){

            circle.path.setAttribute('stroke', state.color);
            
            var value = Math.round(circle.value() * 847);

            circle.setText(value);
        }
        
 

    });

    //iniciando o loader quando o usuário chega no elemento
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0; //vai servir para parar animação após ela ser usada uma vez

    $(window).scroll(function(e){
        let scroll = $(window).scrollTop();  //tenho a posiçao do scroll do user

        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;      //ele não entra mais de uma vez nesse if

        }

    });

    // Paralax
    setTimeout(function() {    // serve para carregar as imagens do site em primeiro lugar
        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'})

    }, 250);
        
    

   
    

});