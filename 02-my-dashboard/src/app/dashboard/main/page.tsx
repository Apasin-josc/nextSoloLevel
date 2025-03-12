import { SimpleWidget } from "@/components";

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Hello Page Main</h1>
      <span className="text-xl">This is the main page</span>
      <div className="flex flex-wrap p-2 justify-center">
        <SimpleWidget />
      </div>
    </div>
  );
}
