import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HeroSection } from "~/components/sections/HeroSection";

export default component$(() => {
  return (
    <main>
      <HeroSection class="w-full h-[calc(100vh-72px)] relative z-10 bg-background rounded-b-[64px] sm:rounded-b-[120px]" />
      <div class="h-[200vh]" />
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
