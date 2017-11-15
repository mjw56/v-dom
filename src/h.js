import { VNode } from './vnode';

export function h(nodeName, attributes, ...children) {
  let v = new VNode();
  v.nodeName = nodeName;
  v.children = children;
  v.attributes = attributes == null ? undefined : attributes;
  return v;
}
