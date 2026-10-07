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

(function () {
  //character slideIn
  const charSlides = document.querySelectorAll('.character__box');
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
    rootMargin: '-50% 0px',
    threshold: 0,
  };
  const observer = new IntersectionObserver(callback, options);
  if (charSlides) {
    charSlides.forEach((charSlide) => observer.observe(charSlide));
  }
})();

(function () {
  //current section
  const currentSections = document.querySelectorAll('.section');
  const gnavLink = document.querySelectorAll('.gnav__link');
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      const currentId = entry.target.id;
      console.log(currentId);
      if (entry.isIntersecting) {
        currentSections.forEach((elm) => {
          elm.classList.remove('is-current');
        });
        gnavLink.forEach((gnav) => {
          gnav.classList.remove('is-current');
          if (gnav.hash === '#' + currentId) {
            gnav.classList.add('is-current');
          }
        });
        entry.target.classList.add('is-current');
        // observer.unobserve(entry.target);
      } else {
        gnavLink.forEach((gnav) => {
          if (gnav.hash === '#' + currentId) {
            gnav.classList.remove('is-current');
          }
        });
        if (entry.target.classList.contains('is-current')) {
          entry.target.classList.remove('is-current');
        }
      }
    });
  };
  const options = {
    root: null,
    rootMargin: '-48% 0px',
    threshold: 0,
  };
  const observer = new IntersectionObserver(callback, options);
  if (currentSections) {
    currentSections.forEach((currentSection) =>
      observer.observe(currentSection),
    );
  }
})();
