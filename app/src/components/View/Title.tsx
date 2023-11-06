import { type JSXElement } from "solid-js";

interface P {
  children?: JSXElement;
}

export function Title(props: P): JSXElement {
  return (
    <dt class="text-primary-200 w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
      {props.children}
    </dt>
  );
}
