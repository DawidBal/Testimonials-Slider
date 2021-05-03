const buttonsContainer = document.querySelectorAll('.js-swap');
const reviews = document.querySelectorAll('.review');
const swapReview = (event) => {
  reviews.forEach(review => {
      review.classList.toggle('hidden');
  })
}

buttonsContainer.forEach(btnContainer => btnContainer.addEventListener('click', swapReview));

