
        document.addEventListener("DOMContentLoaded", () => {
          const progressBars = document.querySelectorAll('.progress');
      
          const animateBars = () => {
            progressBars.forEach(bar => {
              const width = bar.style.width;
              bar.style.width = '0';
              setTimeout(() => {
                bar.style.width = width;
              }, 300);
            });
          };
      
          const aboutSection = document.getElementById("about");
          const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
              animateBars();
              observer.disconnect();
            }
          }, { threshold: 0.5 });
      
          observer.observe(aboutSection);
      
          const toggleBtn = document.querySelector(".menu-toggle");
          const navLinks = document.querySelector(".nav-links");
      
          toggleBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
          });
        });     