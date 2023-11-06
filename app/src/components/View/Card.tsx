import { type JSXElement } from "solid-js";

interface P {
  children: JSXElement;
}

export function Card(props: P): JSXElement {
  return (
    <div class="bg-primary-600 flex flex-grow flex-col items-center justify-center rounded-md p-2">
      {props.children}
    </div>
  );
}
