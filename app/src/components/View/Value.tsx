import { type JSXElement } from "solid-js";

export interface P {
  children?: JSXElement;
  center?: boolean;
}

export function Value(props: P): JSXElement {
  const center = props.center ?? false;

  return (
    <dd
      class="text-primary-100 w-full overflow-hidden text-ellipsis whitespace-nowrap"
      classList={{
        "text-center": center,
      }}
    >
      {props.children}
    </dd>
  );
}
