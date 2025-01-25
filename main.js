(function () {
    "use strict";

    // Spinner
    const spinner = function () {
        setTimeout(function () {
            const spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1);
    };
    spinner();

    // Sticky Navbar
    window.addEventListener('scroll', function () {
        const stickyTop = document.querySelector('.sticky-top');
        if (window.scrollY > 300) {
            if (stickyTop) {
                stickyTop.classList.add('bg-white', 'shadow-sm');
                stickyTop.style.top = '-1px';
            }
        } else {
            if (stickyTop) {
                stickyTop.classList.remove('bg-white', 'shadow-sm');
                stickyTop.style.top = '-100px';
            }
        }
    });

    // Experience
    const experience = document.querySelectorAll('.experience');
    experience.forEach((exp) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const progressBars = document.querySelectorAll('.progress .progress-bar');
                    progressBars.forEach((bar) => {
                        bar.style.width = bar.getAttribute('aria-valuenow') + '%';
                    });
                }
            });
        }, { threshold: 0.8 }); // 80%
        observer.observe(exp);
    });

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            if (backToTop) backToTop.style.display = 'block';
        } else {
            if (backToTop) backToTop.style.display = 'none';
        }
    });
    if (backToTop) {
        backToTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Modal Video
    let videoSrc;
    const playButtons = document.querySelectorAll('.btn-play');
    playButtons.forEach((btn) => {
        btn.addEventListener('click', function () {
            videoSrc = this.getAttribute('data-src');
        });
    });
    const videoModal = document.getElementById('videoModal');
    const videoElement = document.getElementById('video');
    if (videoModal) {
        videoModal.addEventListener('shown.bs.modal', function () {
            if (videoElement) videoElement.setAttribute('src', videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        });
        videoModal.addEventListener('hide.bs.modal', function () {
            if (videoElement) videoElement.setAttribute('src', videoSrc);
        });
    }

})();
