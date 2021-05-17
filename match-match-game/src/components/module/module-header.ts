import App from "../../app";
import Header from "../header/header";
import Main from "./module-main";

export default class AppHeader {
  private readonly header: Header;
  private readonly main: Main;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.rootElement.appendChild(this.header.element);
    this.main = new Main();
    this.rootElement.appendChild(this.main.element);
  }

  load() {

    const btnHeaderRegister = document.querySelector('#register-game');
    const btnHeaderStart = document.querySelector('#start-game');
    const appElement = document.getElementById('app');
    const btnHeaderStop = document.querySelector('#stop-game');
    const main = document.querySelector('.main');
    const cancelRegisterForm = document.querySelector('.cancel');
    const registerNewPlayer = document.querySelector('.register-new-player');
    const imgBtnAvatar = document.querySelector('.img-btn-avatar');
    const addUser = document.querySelector('.add-user');



      if (!btnHeaderStop) throw Error('btnHeaderToggle root element not found');

      if (!btnHeaderRegister) throw Error('btnHeaderToggle root element not found');
      btnHeaderRegister.addEventListener('mousedown', () => {
        document.body.classList.add('popup');
        registerNewPlayer?.classList.remove('non-visible');
      })

      cancelRegisterForm?.addEventListener('mousedown', () => {
        document.body.classList.remove('popup');
        registerNewPlayer?.classList.add('non-visible');
        imgBtnAvatar?.classList.add('non-visible');
        btnHeaderRegister?.classList.remove('non-visible');
        btnHeaderStart?.classList.add('non-visible');
      })

      if (!btnHeaderStart) throw Error('btnHeaderToggle root element not found');
      if (!appElement) throw Error('App root element not found');
      btnHeaderStart.addEventListener('mousedown', () => {
        main?.classList.add('non-visible');
        imgBtnAvatar?.classList.remove('non-visible');
        btnHeaderStart.classList.add('non-visible');
        btnHeaderStop.classList.remove('non-visible');
        new App(appElement).start();
      });
      if (!addUser) throw Error('addUser root element not found');
      addUser.addEventListener('mousedown', (event) => {
        event.preventDefault();

        btnHeaderRegister?.classList.add('non-visible');
        btnHeaderStart?.classList.remove('non-visible');
        // registerNewPlayer?.classList.add('non-visible');
      })
    }
  }
