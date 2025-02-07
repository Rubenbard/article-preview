/*
const shareButton = document.getElementById('share-button');
const shareContainer = document.getElementById('share-container');
const avatarShare = document.getElementById('avatar-share');
const shareButtonActive = document.getElementById('share-button-active');

const isMobile = () => window.innerWidth < 768;

shareButton.addEventListener('click', () => {
  if (isMobile()) {
    // On mobile: toggle between avatar and share sections
    shareContainer.classList.toggle('hidden');
    avatarShare.classList.toggle('hidden');
  } else {
    // On desktop: just toggle share popup visibility
    shareContainer.classList.toggle('hidden');
  }
});

shareButtonActive.addEventListener('click', () => {
  shareContainer.classList.toggle('hidden');
  avatarShare.classList.toggle('hidden');

});

window.addEventListener('resize', () => {
  if (isMobile()) {
    // Reset visibility when switching to desktop
    avatarShare.classList.toggle('hidden');
  }
});