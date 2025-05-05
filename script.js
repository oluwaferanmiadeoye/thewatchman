 // Scroll observer for the nav bar

 const nav = document.querySelector('nav');

   
    const handleScroll = () => {
      if (window.scrollY > 10) { 
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);