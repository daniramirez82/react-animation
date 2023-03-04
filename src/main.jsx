import { render } from 'preact';
import { App } from './app';
import './main.scss';

render(<App />, document.getElementById('app'));

window.addEventListener("load",function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});