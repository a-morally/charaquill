import { InputBasic } from "./components/Input/Basic";
import { InputPill } from "./components/Input/Pill";

function App() {
  return (
    <>
      <div class="bg-primary-800 text-primary-500 flex h-10 items-center justify-center">
        Персонаж
      </div>
      <div class="mx-auto max-w-screen-2xs px-2 py-4">
        <InputBasic label="Имя персонажа"></InputBasic>
        <div class="my-1"></div>

        <div class="grid grid-cols-2 gap-2">
          <InputBasic label="Раса"></InputBasic>
          <InputBasic label="Класс"></InputBasic>
          <InputBasic label="Уровень"></InputBasic>
          <InputBasic label="Опыт"></InputBasic>
        </div>

        <InputBasic label="Оружие"></InputBasic>
        <div class="my-1"></div>

        <InputBasic label="Оружие"></InputBasic>
        <div class="my-1"></div>

        <InputBasic label="Оружие"></InputBasic>
        <div class="my-2"></div>

        <InputPill label="Test"></InputPill>
        <div class="my-2"></div>

        <InputPill label="Test"></InputPill>
        <div class="my-2"></div>

        <InputPill label="Test"></InputPill>
        <div class="my-2"></div>

        <InputPill label="Test"></InputPill>
        <div class="my-2"></div>

        <InputPill label="Test"></InputPill>
        <div class="my-2"></div>

        <InputPill label="Test"></InputPill>
      </div>
    </>
  );
}

export default App;
