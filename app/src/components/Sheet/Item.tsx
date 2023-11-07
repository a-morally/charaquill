import { For, type JSXElement, Match, Switch } from "solid-js";
import { Card } from "../View/Card";
import { Title } from "../View/Title";
import { Value } from "../View/Value";

interface ItemCard {
  type: "card";
  items: P[];
}

interface ItemTitle {
  type: "title";
  value: string | number;
}

interface ItemValue {
  type: "value";
  key: string;
}

type P = ItemCard | ItemTitle | ItemValue;

export function Item(props: P): JSXElement {
  return (
    <Switch>
      <Match when={props.type === "card" ? props : false}>
        {(item) => (
          <Card>
            <For each={item().items}>{(item) => <Item {...item} />}</For>
          </Card>
        )}
      </Match>

      <Match when={props.type === "title" ? props : false}>
        {(item) => <Title>{item().value}</Title>}
      </Match>

      <Match when={props.type === "value" ? props : false}>
        {(item) => <Value>{item().key}</Value>}
      </Match>
    </Switch>
  );
}
