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
    <div class="group">
      <Show when={label !== ""}>
        <label
          for={id}
          class="text-primary-300 group-focus-within:text-primary-200 block w-full cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-sm transition"
        >
          {label}
        </label>
      </Show>
      <input
        id={id}
        class="bg-primary-500 text-primary-200 group-focus-within:text-primary-100 group-focus-within:bg-primary-400 block w-full rounded-lg px-2 py-1 transition"
        value={value}
      />
    </div>
  );
};
