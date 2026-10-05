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

(function () {
  //fadeInUp
  const targets = document.querySelectorAll('.js-fadeInUp, .js-fadeIn');
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-inView');
        observer.unobserve(entry.target);
      }
    });
  };
  const options = {
    root: null,
    rootMargin: '-10% 0px',
    threshold: 0,
  };
  const observer = new IntersectionObserver(callback, options);
  if (targets) {
    targets.forEach((target) => observer.observe(target));
  }
})();
