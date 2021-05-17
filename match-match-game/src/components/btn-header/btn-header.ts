const cancelRegisterForm = document.querySelector('.cancel');
const registerNewPlayer = document.querySelector('.register-new-player');
const btnHeaderToggle = document.querySelector('#start-game');
const imgBtnAvatar = document.querySelector('.img-btn-avatar');

if (!btnHeaderToggle) throw Error('App root element not found');

const btnRegisterPlayer = () => {
    document.body.classList.add('popup');
    registerNewPlayer?.classList.remove('non-visible');
    btnHeaderToggle.classList.remove('create-new-player');
    btnHeaderToggle.classList.add('start-game');
    imgBtnAvatar?.classList.remove('non-visible');
    btnHeaderToggle.innerHTML = 'new game';
}
if (btnHeaderToggle.classList.contains('create-new-player')) {
    btnHeaderToggle.addEventListener('mousedown', () => {
        btnRegisterPlayer();
  })
  }

  cancelRegisterForm?.addEventListener('mousedown', () => {
    document.body.classList.remove('popup');
    registerNewPlayer?.classList.add('non-visible');
    btnHeaderToggle.classList.add('create-new-player');
    btnHeaderToggle.classList.remove('start-game');
    imgBtnAvatar?.classList.add('non-visible');
    btnHeaderToggle.innerHTML = 'register new player'
  })