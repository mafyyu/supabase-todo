import Image from "next/image";
import Todoapp from "../components/TodoApp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <section className="flex justify-center items-center h-screen">
        <Todoapp>

        </Todoapp>
      </section>
    </main>
  );
}
