import { h, createElement } from '../src';

const app = (
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
);

const $root = document.getElementById('root');
$root.appendChild(createElement(app));