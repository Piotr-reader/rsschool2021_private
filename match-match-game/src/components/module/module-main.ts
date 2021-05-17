import BaseComponent from '../base-components';

export default class Main extends BaseComponent {
    constructor() {
      super('div', ['wrapper']);

      this.element.innerHTML = `
        <main class="main">
            <p class="title-description">How to Play?</p>
            <div class="rules-sections">
                <section class="rules-left">
                    <div class="rules-all">
                        <div class="number-rule">1</div>
                        <p>Register new player in game</p>
                    </div>
                    <div class="rules-all">
                        <div class="number-rule">2</div>
                        <p>Configure your game settings</p>
                    </div>
                    <div class="rules-all">
                        <div class="number-rule">3</div>
                        <p>Start you new game! Remember card positions and match it before times up.</p>
                    </div>
                </section>
                <section class="rules-right">
                    <div class="rules-register-user">
                        <img class="rules-register-user-img" src="../src/assets/rules-register-players.jpg" alt="register-user">
                    </div>

                    <a class="rules-game-settings" href="#">
                        <img class="rules-game-settings-img" src="../src/assets/icon-settings.svg" alt="settings">
                        <p>Game Settings</p>
                    </a>


                    <div class="rules-game-img">
                        <img class="rules-game-img" src="../src/assets/rules-game-img.jpg" alt="rules-game">
                    </div>
                </section>
            </div>

            <div class="register-new-player non-visible">
                <p class="form-description">Register new Player</p>
                <form id="add-user"action="#">
                    <div class="form-register-new-user">
                        <div class="form-left">
                            <input class="register-input" type="text" name="name" placeholder="your name" pattern="[A-z]+" required>
                            <input class="register-input" type="text" name="surname" placeholder="your firstname" pattern="[A-z]+" required>
                            <input class="register-input" type="email" name="email" placeholder="E-mail" required>
                        </div>
                        <div class="form-right">
                            <img class="form-avatar" src="../src/assets/Ellipse 2.jpg" alt="avatar">
                        </div>
                    </div>
                    <div class="form-down">
                        <input class="add-user" type="submit" value="add user">
                        <input class="cancel" type="button" value="cancel">
                    </div>
                </form>
            </div>
        </main>
              `;

    }
  }