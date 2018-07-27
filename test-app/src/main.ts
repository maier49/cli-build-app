import has from '@dojo/framework/has/has';
import App from './App';
import * as css from './app.m.css';
import './Bar';
import { toDom } from 'dojo/dom-construct';
import LazyApp from './LazyApp';

'!has("bar")';

if (has('foo')) {
	console.log('foo');
}

const btr = has('build-time-render');

App().then(result => {
	console.log(result());
});
let div = document.getElementById('div');
if (!div) {
	div = document.createElement('div');
	div.id = 'div';
}
if (btr) {
	div.setAttribute('hasBtr', 'true');
}

if (process.env.NODE_ENV === 'production') {
	div.setAttribute('nodeenv', 'production');
}

div.textContent = `Built with Build Time Render: ${!!div.getAttribute('hasBtr')}
Currently Rendered by BTR: ${has('build-time-render')}`;

const dojoDiv = toDom('<div>This div was rendered by Dojo 1</div>');

dojoDiv.classList.add(...css.root.split(' '));
div.classList.add(...css.root.split(' '));
const root = document.getElementById('app');
if (div.parentNode === null) {
	root!.appendChild(div);
}

if (dojoDiv.parentNode === null) {
	root!.appendChild(dojoDiv);
}

const appRoot = document.getElementById('app-root')!;
console.log(appRoot);

const projector = new LazyApp();
projector.append(appRoot);

if (!btr) {
	setTimeout(() => {
		projector.setProperties({ render: true });
	}, 2000);
}
