import './styles/style.sass';
import AppHeader from './components/module/module-header';

window.onload = () => {
  const appElement = document.getElementById('app');

  if (!appElement) throw Error('App root element not found');

  new AppHeader(appElement).load();


};
