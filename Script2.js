var counter = 1;
    
    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        
        var allRadios = document.querySelectorAll('input[type="radio"]');
        allRadios.forEach(function(radio) {
            radio.classList.remove('selected-radio');
        });

        document.getElementById('radio' + counter).classList.add('selected-radio');
        
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 5000);