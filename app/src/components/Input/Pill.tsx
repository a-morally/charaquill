import { Show, type Component } from "solid-js";
import { UniqueGenerator } from "../../services/UniqueGenerator";

interface P {
  label?: string;
  value?: string | number;
}

export const InputPill: Component<P> = (props: P) => {
  const label = props.label === undefined ? "" : props.label;
  const value = props.value === undefined ? "" : props.value;

  const id = UniqueGenerator.generate();

  return (
    <div class="flex w-full flex-row">
      <Show when={label !== ""}>
        <label
          for={id}
          class="text-primary-500 bg-primary-800 flex basis-3/4 cursor-pointer items-center justify-center rounded-l-md pl-2 pr-3"
        >
          {label}
        </label>
      </Show>
      <div class="ml-[-0.375rem] flex-grow basis-1/4">
        <input
          id={id}
          class="bg-primary-500 text-primary-900 block w-full rounded-lg px-2 py-1 text-center"
          value={value}
        />
      </div>
    </div>
  );
};
