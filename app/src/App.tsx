import { InputBasic } from "./components/Input/Basic";

function App() {
  return (
    <div class="bg-primary-800 h-full w-full">
      <header class="bg-primary-500 text-primary-300 flex h-12 items-center justify-center shadow-sm">
        Персонаж
      </header>

      <main class="max-w-screen-xs mx-auto px-2 py-4">
        <InputBasic label="Имя"></InputBasic>
        <div class="h-2" />

        <div class="flex flex-row gap-2">
          <div class="basis-2/3">
            <InputBasic label="Раса"></InputBasic>
          </div>
          <div class="basis-1/3">
            <InputBasic label="Уровень"></InputBasic>
          </div>
        </div>
        <div class="h-2" />

        <div class="flex flex-row gap-2">
          <div class="basis-2/3">
            <InputBasic label="Класс"></InputBasic>
          </div>
          <div class="basis-1/3">
            <InputBasic label="Опыт"></InputBasic>
          </div>
        </div>

        <hr class="bg-primary-700 border-none h-0.5 my-4" />
      </main>
    </div>
  );
}

export default App;
