/* Star Rating Widget — Day 19 */
(function () {
  'use strict';

  const MAX_RATING = 5;

  const messages = {
    0: 'Hover or click a star to rate.',
    1: "We're sorry to hear that.",
    2: "We'll work to do better.",
    3: "Thanks for your feedback!",
    4: "We're glad you enjoyed it!",
    5: "Excellent! Thanks for the love!"
  };

  let selectedRating = 0;
  let hoverRating = 0;
  let focusRating = 1;

  const starsContainer = document.getElementById('stars');
  const stars = Array.from(document.querySelectorAll('.star'));
  const ratingValue = document.getElementById('ratingValue');
  const ratingMessage = document.getElementById('ratingMessage');
  const resetBtn = document.getElementById('resetBtn');

  function activeRating() {
    return hoverRating > 0 ? hoverRating : selectedRating;
  }

  function updateStars() {
    const active = activeRating();
    stars.forEach(function (star) {
      const value = parseInt(star.getAttribute('data-rating'), 10);
      const filled = value <= active;
      star.classList.toggle('star--filled', filled);
      star.setAttribute('aria-checked', String(value === selectedRating));
      star.tabIndex = value === focusRating ? 0 : -1;
    });
  }

  function updateText() {
    const sel = selectedRating;
    if (sel === 0) {
      ratingValue.textContent = 'No rating selected';
      ratingMessage.textContent = messages[0];
    } else {
      ratingValue.textContent = 'You rated this ' + sel + ' out of ' + MAX_RATING + ' stars.';
      ratingMessage.textContent = messages[sel];
    }
  }

  function updateUI() {
    updateStars();
    updateText();
  }

  function selectRating(value) {
    selectedRating = value;
    hoverRating = 0;
    focusRating = value;
    updateUI();
  }

  function resetRating() {
    selectedRating = 0;
    hoverRating = 0;
    focusRating = 1;
    updateUI();
    // return focus to first star for keyboard users
    const first = stars[0];
    if (first) first.focus();
  }

  // Hover preview
  stars.forEach(function (star) {
    const value = parseInt(star.getAttribute('data-rating'), 10);

    star.addEventListener('mouseenter', function () {
      hoverRating = value;
      updateStars();
    });

    star.addEventListener('mouseleave', function (e) {
      const to = e.relatedTarget;
      if (!to || !starsContainer.contains(to)) {
        hoverRating = 0;
        updateStars();
      }
    });

    star.addEventListener('click', function () {
      selectRating(value);
    });

    star.addEventListener('focus', function () {
      focusRating = value;
      // keep tabindex in sync
      stars.forEach(function (s) {
        const v = parseInt(s.getAttribute('data-rating'), 10);
        s.tabIndex = v === focusRating ? 0 : -1;
      });
    });

    star.addEventListener('keydown', function (e) {
      const current = parseInt(star.getAttribute('data-rating'), 10);
      let next = current;
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowUp':
          next = Math.min(MAX_RATING, current + 1);
          break;
        case 'ArrowLeft':
        case 'ArrowDown':
          next = Math.max(1, current - 1);
          break;
        case 'Home':
          next = 1;
          break;
        case 'End':
          next = MAX_RATING;
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          selectRating(current);
          return;
        default:
          return;
      }
      if (next !== current) {
        e.preventDefault();
        focusRating = next;
        const target = stars[next - 1];
        if (target) target.focus();
        updateStars();
      }
    });
  });

  // mouseleave on container restores selected rating
  starsContainer.addEventListener('mouseleave', function () {
    hoverRating = 0;
    updateStars();
  });

  resetBtn.addEventListener('click', resetRating);

  // initial
  updateUI();
})();
