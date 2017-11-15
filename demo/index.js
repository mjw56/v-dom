import { h, createElement, updateElement } from '../src';

const app = (
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
);

const next = (
    <ul>
        <li>one</li>
        <li>{Math.random()}</li>
    </ul>
);

const $root = document.getElementById('root');
$root.appendChild(createElement(app));

$root.addEventListener('click', () => {
    updateElement($root, next, app);
});

