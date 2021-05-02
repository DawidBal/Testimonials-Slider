const buttonsContainer = document.querySelector('.js-swap');
const reviews = document.querySelectorAll('.review');

const swapReview = (event) => {
  reviews.forEach(review => {
      review.classList.toggle('hidden');
  })
}

buttonsContainer.addEventListener('click', swapReview);