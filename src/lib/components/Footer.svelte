<script lang="ts">
	import type { ClassValue } from "svelte/elements";

  const props: { class?: ClassValue } = $props();

  const socialLinks = [
    { href: "https://linkedin.com/in/martuafernando", label: "LinkedIn" },
    { href: "https://github.com/martuafernando", label: "GitHub" },
    { href: "https://instagram.com/martuafernando", label: "Instagram" }
  ];
</script>

<footer class="bg-black text-white py-16 {props.class}">
  <a href="/" class="block mx-auto w-fit">
    <img src="/logos/logo-white.svg" alt="Logo" width="64" height="64" />
  </a>

  <div class="my-12 flex flex-col items-center">
    <h2 class="text-2xl font-bold mb-4 text-mint-500">Let's work together</h2>
    <a href="mailto:fernandosibarani45@gmail.com" class="flex items-center outline-1 mt-4 p-4 rounded-lg bg-black text-white">
      <span class="icon-[mdi--envelope] text-4xl"></span>
      <span class="flex items-center ml-2 gap-1 hover:underline">
        Email Me <span class="icon-[lets-icons--external]"></span>
      </span>
    </a>
  </div>

  <div class="flex flex-wrap justify-center gap-x-8 gap-y-2 w-fit mx-auto mt-8 text-xl">
    {#each socialLinks as link}
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        class="hover-underline-white-animation"
      >
        <span>{link.label}</span>
        <span class="icon-[lets-icons--external] text-lg"></span>
      </a>
    {/each}
  </div>

  <p class="text-center mt-8">&copy; 2024 Martua Fernando</p>
</footer>
