(function () {
  //pagetop
  const pagetop = document.querySelector('.pagetop');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      pagetop.classList.add('is-appear');
    } else {
      pagetop.classList.remove('is-appear');
    }
  });
})();
