var menuIzquierdo = document.querySelector('.menu-izquierdo');

menuIzquierdo.addEventListener('click', (e)  => {

      var classMenu = e.target.classList;

      //cread variable de fecla de menu
      var contenedor = document.querySelector('.pagina'),
      flechaIzq = document.querySelector('.fa-arrow-left'),
      flechaDer = document.querySelector('.fa-arrow-right');


      if (classMenu.contains('fa-arrow-right')) {
            console.log('abre menu');
            flechaDer.style.display = 'none';
            flechaIzq.style.display = 'block';
            contenedor.classList.add('no-menu');
           

      }else if(classMenu.contains('fa-arrow-left')){
            console.log('cierra menu');
            flechaDer.style.display = 'block';
            flechaIzq.style.display = 'none';
            contenedor.classList.remove('no-menu');

      }


});

