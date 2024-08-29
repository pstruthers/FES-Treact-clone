document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.reviews');
    const reviewCount = document.querySelectorAll('.review').length;
    let currentReview = 0;

    function updateSlide() {
        slides.style.transform = `translateX(-${currentReview * 100}%)`;
    }

    function handleLoop() {
        if (currentReview === reviewCount) {
            // Reset to the first slide without transition
            slides.style.transition = 'none';
            currentReview = 0;
            updateSlide();

            // Force reflow to enable transition back
            slides.offsetHeight; // trigger reflow

            // Re-enable transition and move to the next slide
            slides.style.transition = 'transform 0.5s ease-in-out';
            setTimeout(() => {
                currentReview = 1;
                updateSlide();
            }, 50); // Small delay to ensure reflow is applied
        } else if (currentReview < 0) {
            // Move to the last slide without transition
            slides.style.transition = 'none';
            currentReview = reviewCount - 1;
            updateSlide();

            // Force reflow to enable transition back
            slides.offsetHeight; // trigger reflow

            // Re-enable transition and move to the previous slide
            slides.style.transition = 'transform 0.5s ease-in-out';
            setTimeout(() => {
                currentReview = reviewCount - 2;
                updateSlide();
            }, 50); // Small delay to ensure reflow is applied
        } else {
            updateSlide();
        }
    }

    document.querySelectorAll('.right').forEach(button => {
        button.addEventListener('click', () => {
            currentReview++;
            handleLoop();
        });
    });

    document.querySelectorAll('.left').forEach(button => {
        button.addEventListener('click', () => {
            currentReview--;
            handleLoop();
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                return;
            }
        });
    });

    const allAnimatedElements = document.querySelectorAll('.animate');

    allAnimatedElements.forEach((element) => observer.observe(element));
});