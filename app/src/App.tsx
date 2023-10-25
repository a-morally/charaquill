import { Card } from "./components/Card";

function App() {
  return (
    <div id="app" class="bg-primary-900 h-screen w-screen pt-12">
      <div class="bg-primary-800 fixed top-0 flex h-12 w-full justify-between self-center p-2 shadow-md">
        <button class="text-primary-100">Menu</button>
        <button class="text-primary-100">Settings</button>
      </div>

      <div class="grid grid-cols-1 gap-2 p-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:max-w-screen-lg lg:mx-auto">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
