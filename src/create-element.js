export function createElement(vnode) {
  if (typeof vnode==='string' || typeof vnode==='number') return document.createTextNode(vnode);

  let node = document.createElement(vnode.nodeName);

  for (let name in Object(vnode.attributes))
    node.setAttribute(name, vnode.attributes[name]);

  for (let i = 0; i < vnode.children.length; i++)
    node.appendChild(createElement(vnode.children[i]));

  return node;
}
