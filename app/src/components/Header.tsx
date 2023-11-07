import { type JSXElement } from "solid-js";

interface P {
  children?: JSXElement;
}

export function Header(props: P): JSXElement {
  return (
    <header class="bg-primary-600 text-primary-300 flex h-12 items-center justify-center shadow-sm">
      {props.children}
    </header>
  );
}
