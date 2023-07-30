document.addEventListener("DOMContentLoaded", function() {
    // Smoothly scroll to the slider section when the page loads
    const sliderWrapper = document.querySelector(".slider-wrapper");
    sliderWrapper.scrollIntoView({ behavior: "smooth", block: "start" });

    // Wait for a short time and then scroll back to the top to prevent automatic scrolling
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 100);

    const cards = document.querySelectorAll(".review-card-item");
    const cardCount = cards.length;
    let currentIndex = 0;
    const points = document.querySelectorAll(".point");

    function showNextCard() {
      cards[currentIndex].scrollIntoView({ behavior: "smooth", inline: "center" });

      points.forEach((point, index) => {
        point.classList.toggle("active", index === currentIndex);
      });

      currentIndex = (currentIndex + 1) % cardCount;
    }

    const cardShowInterval = 5000; // 5 seconds delay between each card appearance
    setInterval(showNextCard, cardShowInterval);

    // Update indicator points when the page loads
    updateIndicator();
  });