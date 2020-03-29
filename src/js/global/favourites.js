'use strict';
(function() {
  var favouritesBtn = document.querySelectorAll('.card__favourites');
  var activeClass = 'card__favourites--active';

  favouritesBtn.forEach(function(it){
    it.addEventListener('click', function() {
      it.classList.toggle(activeClass);
    });
  });
})();