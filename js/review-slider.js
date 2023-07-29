// document.addEventListener("DOMContentLoaded", function() {
//     const cards = document.querySelectorAll(".review-card-item");
//     const cardCount = cards.length;
//     let currentIndex = 0;
//     const points = document.querySelectorAll(".point");

//     function showNextCard() {
//       cards[currentIndex].scrollIntoView({ behavior: "smooth", inline: "start" });

//       points.forEach((point, index) => {
//         point.classList.toggle("active", index === currentIndex);
//       });

//       currentIndex = (currentIndex + 1) % cardCount;
//     }

//     const cardShowInterval = 5000; // 5 seconds delay between each card appearance
//     setInterval(showNextCard, cardShowInterval);
// });

  document.addEventListener("DOMContentLoaded", function() {
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

  // Delay the script execution if the scroller is not in view
  window.addEventListener("load", function() {
    const scroller = document.querySelector(".review-card-list");
    if (!isScrollerInView(scroller)) {
      setTimeout(function() {
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
      }, 100);
    }
  });

  function isScrollerInView(scroller) {
    const rect = scroller.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }
