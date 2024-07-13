document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.typed');
    elements.forEach((element) => {
      let typed_strings = element.getAttribute('data-typed-items');
      typed_strings = typed_strings.split(',');
      new Typed(element, {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 2000
      });
    });
  });

  