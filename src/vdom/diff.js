import { createElement } from '../create-element';

function changed(node1, node2) {
  return (
    typeof node1 !== typeof node2 ||
    ((typeof node1 === 'string') && node1 !== node2) ||
    node1.nodeName !== node2.nodeName
  );
}

export function updateElement(dom, newNode, oldNode, index = 0) {
  if (!oldNode) {
    dom.appendChild(createElement(newNode));
  } else if (!newNode) {
    dom.removeChild(dom.childNodes[index]);
  } else if (changed(newNode, oldNode)) {
    dom.replaceChild(createElement(newNode), dom.childNodes[index]);
  } else if (newNode.nodeName) {
    const newLength = newNode.children.length;
    const oldLength = oldNode.children.length;
    for (let i = 0; i < newLength || i < oldLength; i++) {
      updateElement(
        dom.childNodes[index],
        newNode.children[i],
        oldNode.children[i],
        i
      );
    }
  }
}
