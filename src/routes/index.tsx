import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {

  const chicosId = useSignal(1); // primitivos,booleans,string

  const changeImagenId = $((value: number) => {
    if ((chicosId.value + value) <= 0) return;

    chicosId.value += value;
  })



  return (
    <>
      <span>Buscador simple</span>
      <span class="text-9xl">{chicosId}</span>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${chicosId.value}.png`}
        alt="imagen poque"
        width={"200"}
        height={"200"}
      />

      <div class="mt-2">
        <button onClick$={() => changeImagenId(-1)} class="btn btn-primary mr-2">anterior</button>
        <button onClick$={() => changeImagenId(+1)} class="btn btn-primary">Siguiente</button>
      </div>

    </>
  );
});



export const head: DocumentHead = {
  title: "Equipo!",
  meta: [
    {
      name: "description",
      content: "Esta es una demo para el frontend",
    },
  ],
};
