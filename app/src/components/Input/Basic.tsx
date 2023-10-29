import { Show, type Component } from "solid-js";
import { UniqueGenerator } from "../../services/UniqueGenerator";

interface P {
  label?: string;
  value?: string | number;
}

export const InputBasic: Component<P> = (props: P) => {
  const label = props.label === undefined ? "" : props.label;
  const value = props.value === undefined ? "" : props.value;

  const id = UniqueGenerator.generate();

  return (
    <div>
      <Show when={label !== ""}>
        <label for={id} class="text-primary-500 block w-full cursor-pointer">
          {label}
        </label>
      </Show>
      <input
        id={id}
        class="bg-primary-500 text-primary-900 block w-full rounded-lg px-2 py-1"
        value={value}
      />
    </div>
  );
};
