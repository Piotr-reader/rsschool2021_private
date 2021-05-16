import './styles/style.sass';
import { App } from './app';

window.onload = () => {
    const appElement = document.getElementById('app');
    const startGame = document.querySelector('#start-game');

    if (!appElement) throw Error('App root element not found');
    startGame?.addEventListener('mousedown', () => {
        new App(appElement).start();
    })

}



