    let searchbt = document.querySelector('.searchbt');
    let closebt = document.querySelector('.closebt');
    let searchbox = document.querySelector('.searchbox');
    let navegacao = document.querySelector('.navegacao');
    let menu = document.querySelector('.menu');
    let header = document.querySelector('header');
    

    searchbt.onclick = function(){

      searchbox.classList.add('active');
      closebt.classList.add('active');
      searchbt.classList.add('active');
      menu.classList.add('hide');
      header.classList.remove('open');

    }

    closebt.onclick = function(){

      searchbox.classList.remove('active');
      closebt.classList.remove('active');
      searchbt.classList.remove('active');
      menu.classList.remove('hide');


    }

    menu.onclick = function(){

        header.classList.toggle('open');
        searchbox.classList.remove('active');
        closebt.classList.remove('active');
        searchbt.classList.remove('active');

    }

