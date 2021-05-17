import './header.sass';
import BaseComponent from '../base-components';

export default class Header extends BaseComponent {
  constructor() {
    super();

    this.element.innerHTML = `
    <header class="header">
    <section class="header-left">
        <div class="btn-container">
            <button class="btn-left header-btn-active">match</button>
            <button class="btn-left">match</button>
        </div>
        <nav>
            <ul class="nav-header">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                       <img class="img-header" src="../src/assets/icon-about.svg" alt="about">
                       <p>About Game</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <img class="img-header" src="../src/assets/icon-score.svg" alt="score">
                       <p>Best Score</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <img class="img-header" src="../src/assets/icon-settings.svg" alt="settings">
                       <p>Game Settings</p>
                    </a>
                </li>
            </ul>
        </nav>
    </section>
    <section class="header-right">
        <button id="register-game" class="register-player create-new-player">register new player</button>
        <button id="start-game" class="register-player start-game non-visible">start game</button>
        <button id="stop-game" class="register-player stop-game non-visible">stop-game</button>
        <img class="img-btn-avatar non-visible" src="../src/assets/Ellipse 2.jpg" alt="avatar">
    </section>
</header>
            `;

  }
}
