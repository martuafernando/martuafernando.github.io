<script lang="ts">
	import type Experience from "$lib/models/Experience";
	import ExperienceItem from "./Experience-Item.svelte";

  export let experience: Experience[] = [];
  export let className = "";
</script>

<div class={className}>
  {#each experience as exp}
    <ExperienceItem 
      experience={exp}
      className="border-t first:border-none py-8"
    />
  {/each}
</div>
