import { For, type JSXElement } from "solid-js";
import { Hr } from "./View/Hr";
import { Card } from "./View/Card";
import { Value } from "./View/Value";
import { Title } from "./View/Title";

export function App(): JSXElement {
  const attributes = [
    "Сила",
    "Ловкость",
    "Телосложение",
    "Интеллект",
    "Мудрость",
    "Харизма",
  ];

  const skills = [
    "Акробатика",
    "Анализ",
    "Атлетика",
    "Внимательность",
    "Выживание",
    "Выступление",
    "Запугивание",
    "История",
    "Ловкость рук",
    "Магия",
    "Медицина",
    "Обман",
    "Природа",
    "Проницательность",
    "Религия",
    "Скрытность",
    "Убеждение",
    "Уход за животными",
  ];

  return (
    <div class="bg-primary-800 relative h-full w-full overflow-y-scroll">
      <header class="bg-primary-600 text-primary-300 flex h-12 items-center justify-center shadow-sm">
        Персонаж
      </header>

      <main class="max-w-screen-xs mx-auto px-2 py-4">
        <Card>
          <Title>Имя</Title>
          <Value>Имя Отчество Фамилия</Value>
        </Card>
        <div class="h-2" />

        <div class="flex w-full flex-row gap-2">
          <div class="w-px basis-2/3">
            <Card>
              <Title>Класс</Title>
              <Value>Варвар-волшебник</Value>
            </Card>
          </div>
          <div class="w-px basis-1/3">
            <Card>
              <Title>Уровень</Title>
              <Value>3</Value>
            </Card>
          </div>
        </div>
        <div class="h-2" />

        <div class="flex w-full flex-row gap-2">
          <div class="w-px basis-2/3">
            <Card>
              <Title>Раса</Title>
              <Value>Человек</Value>
            </Card>
          </div>
          <div class="w-px basis-1/3">
            <Card>
              <Title>Опыт</Title>
              <Value>10000</Value>
            </Card>
          </div>
        </div>

        <Hr />

        <For each={attributes}>
          {(attribute) => (
            <>
              <div class="flex w-full flex-row gap-2">
                <div class="w-px basis-2/3">
                  <Card>
                    <Title>{attribute}</Title>
                    <Value>12</Value>
                  </Card>
                </div>
                <div class="w-px basis-1/3">
                  <Card>
                    <Title>Значение</Title>
                    <Value>+1</Value>
                  </Card>
                </div>
              </div>
              <div class="h-2" />
            </>
          )}
        </For>

        <Hr />

        <For each={skills}>
          {(skill) => (
            <>
              <div class="flex w-full flex-row gap-2">
                <div class="w-px basis-2/3">
                  <Card>
                    <Title>{skill}</Title>
                    <Value>12</Value>
                  </Card>
                </div>
                <div class="w-px basis-1/3">
                  <Card>
                    <Title>Значение</Title>
                    <Value>+1</Value>
                  </Card>
                </div>
              </div>
              <div class="h-2" />
            </>
          )}
        </For>
      </main>
    </div>
  );
}
