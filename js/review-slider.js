document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".review-card-item");
    const cardCount = cards.length;
    let currentIndex = 0;
    const points = document.querySelectorAll(".point");

    function showNextCard() {
      cards[currentIndex].scrollIntoView({ behavior: "smooth", inline: "start" });

      points.forEach((point, index) => {
        point.classList.toggle("active", index === currentIndex);
      });

      currentIndex = (currentIndex + 1) % cardCount;
    }

    const cardShowInterval = 5000; // 5 seconds delay between each card appearance
    setInterval(showNextCard, cardShowInterval);
});