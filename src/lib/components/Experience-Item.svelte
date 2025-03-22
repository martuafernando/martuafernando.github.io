<script lang="ts">
	import type Experience from '$lib/models/Experience';
	import { onMount } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	const props: { class?: ClassValue; experience: Experience } = $props();

	const { experience } = props;

	function getReadableDuration(startDate: string, endDate?: string): string {
		const start = new Date(startDate);
		const end = endDate ? new Date(endDate) : new Date();
		const totalMonth =
			(end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
		const year = Math.floor(totalMonth / 12);
		const month = totalMonth % 12;

		let duration = '';
		if (year > 0) duration += `${year} ${year === 1 ? 'year' : 'years'}`;
		if (month > 0)
			duration += (duration ? ' ' : '') + `${month} ${month === 1 ? 'month' : 'months'}`;

		return duration;
	}

	function getReadableDurationFromDuration(year: number, month: number): string {
		let duration = '';
		if (year > 0) duration += `${year} ${year === 1 ? 'year' : 'years'}`;
		if (month > 0)
			duration += (duration ? ' ' : '') + `${month} ${month === 1 ? 'month' : 'months'}`;
		return duration;
	}

	let experienceDuration: string = $state('');

	onMount(() => {
		const totalMonth = experience.position.reduce((acc, position) => {
			const start = new Date(position.startDate);
			const end = position.endDate ? new Date(position.endDate) : new Date();
			return (
				acc + (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
			);
		}, 0);

		const totalYear = Math.floor(totalMonth / 12);
		experienceDuration = getReadableDurationFromDuration(totalYear, totalMonth % 12);
	});
</script>

<div class={props.class}>
	<a href={experience.companyUrl} class="block hover:opacity-80">
		<div class="flex items-center space-x-4">
			<img
				src={experience.companyLogoUrl}
				alt={experience.companyName + ' logo'}
				class="w-16 h-auto object-cover"
			/>
			<div>
				<h3 class="text-xl font-medium text-black">{experience.companyName}</h3>
				<p class="text-sm text-black-400">{experienceDuration}</p>
			</div>
		</div>
		<p class="text-sm mt-2 text-black-400">{experience.companyDescription}</p>
	</a>

	<div class="mt-4" class:pl-4={experience.position.length > 1}>
		{#each experience.position as position (position.title)}
			<div
				class={`mt-6 relative ${
					experience.position.length > 1
						? `
				before:content-[''] before:absolute before:w-2 before:h-2 before:bg-gray-300 before:-left-5 before:top-3 before:rounded-full
				last:after:content-none after:content-[''] after:absolute after:w-[2px] after:h-full after:bg-gray-300 after:-left-[17px] after:top-7 after:rounded-full
				`
						: ''
				}`}
			>
				<h4 class="text-lg font-semibold text-black">{position.title}</h4>
				<p class="text-sm text-black-400">{position.employmentType}</p>
				<p class="text-sm text-black-400">{position.location} ({position.locationType})</p>
				<p class="text-sm text-black-400">
					<span>{position.startDate} - {position.endDate ? position.endDate : 'Present'}</span>
					<span class="mx-2">•</span>
					<span>{getReadableDuration(position.startDate, position.endDate)}</span>
				</p>
				<ul class="list-disc list-outside ml-4 mt-2 text-black">
					{#each position.descriptionPoints as point}
						<li>{point}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>
