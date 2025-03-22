<script>
	import { onMount } from 'svelte';

	export let className = '';
	export const experience = [
		{
			id: '1',
			companyName: 'Google',
			companyUrl: 'https://google.com',
			companyLogoUrl: 'https://t3.ftcdn.net/jpg/05/17/82/24/360_F_517822417_cW17ljcETUNX8BylhlNesxWyhxHXO3Nc.jpg',
			companyLogoHorizontalUrl: '/logos/google-horizontal.png',
			companyDescription:
				'A multinational technology company specializing in search, cloud computing, and AI.',
			position: [
				{
					title: 'Software Engineer',
					startDate: '2022-06-01',
					endDate: 'Present',
					responsibilities: [
						'Developed scalable web applications using Next.js and Svelte.',
						'Optimized search ranking algorithms for better user experience.',
						'Led a team of 5 engineers in agile development.'
					]
				}
			]
		},
		{
			id: '2',
			companyName: 'Microsoft',
			companyUrl: 'https://microsoft.com',
			companyLogoUrl: 'https://t3.ftcdn.net/jpg/05/17/82/24/360_F_517822417_cW17ljcETUNX8BylhlNesxWyhxHXO3Nc.jpg',
			companyLogoHorizontalUrl: '/logos/microsoft-horizontal.png',
			companyDescription: 'A leading software company, known for Windows, Azure, and Office 365.',
			position: [
				{
					title: 'Frontend Developer',
					startDate: '2020-04-01',
					endDate: '2022-05-31',
					responsibilities: [
						'Built interactive dashboards using React and Tailwind CSS.',
						'Worked on Microsoft Teams web app performance optimization.',
						'Collaborated with UX designers to improve accessibility.'
					]
				}
			]
		},
		{
			id: '3',
			companyName: 'Amazon',
			companyUrl: 'https://amazon.com',
			companyLogoUrl: 'https://t3.ftcdn.net/jpg/05/17/82/24/360_F_517822417_cW17ljcETUNX8BylhlNesxWyhxHXO3Nc.jpg',
			companyLogoHorizontalUrl: '/logos/amazon-horizontal.png',
			companyDescription: 'A global e-commerce and cloud computing giant.',
			position: [
				{
					title: 'Backend Engineer',
					startDate: '2018-01-01',
					endDate: '2020-03-31',
					responsibilities: [
						'Designed and implemented RESTful APIs for AWS services.',
						'Improved server response times by 40% through caching strategies.',
						'Automated deployment pipelines using AWS CDK.'
					]
				}
			]
		},
		{
			id: '1',
			companyName: 'Google',
			companyUrl: 'https://google.com',
			companyLogoUrl: 'https://t3.ftcdn.net/jpg/05/17/82/24/360_F_517822417_cW17ljcETUNX8BylhlNesxWyhxHXO3Nc.jpg',
			companyLogoHorizontalUrl: '/logos/google-horizontal.png',
			companyDescription:
				'A multinational technology company specializing in search, cloud computing, and AI.',
			position: [
				{
					title: 'Software Engineer',
					startDate: '2022-06-01',
					endDate: 'Present',
					responsibilities: [
						'Developed scalable web applications using Next.js and Svelte.',
						'Optimized search ranking algorithms for better user experience.',
						'Led a team of 5 engineers in agile development.'
					]
				}
			]
		},
		{
			id: '2',
			companyName: 'Microsoft',
			companyUrl: 'https://microsoft.com',
			companyLogoUrl: 'https://t3.ftcdn.net/jpg/05/17/82/24/360_F_517822417_cW17ljcETUNX8BylhlNesxWyhxHXO3Nc.jpg',
			companyLogoHorizontalUrl: '/logos/microsoft-horizontal.png',
			companyDescription: 'A leading software company, known for Windows, Azure, and Office 365.',
			position: [
				{
					title: 'Frontend Developer',
					startDate: '2020-04-01',
					endDate: '2022-05-31',
					responsibilities: [
						'Built interactive dashboards using React and Tailwind CSS.',
						'Worked on Microsoft Teams web app performance optimization.',
						'Collaborated with UX designers to improve accessibility.'
					]
				}
			]
		},
		{
			id: '3',
			companyName: 'Amazon',
			companyUrl: 'https://amazon.com',
			companyLogoUrl: 'https://t3.ftcdn.net/jpg/05/17/82/24/360_F_517822417_cW17ljcETUNX8BylhlNesxWyhxHXO3Nc.jpg',
			companyLogoHorizontalUrl: '/logos/amazon-horizontal.png',
			companyDescription: 'A global e-commerce and cloud computing giant.',
			position: [
				{
					title: 'Backend Engineer',
					startDate: '2018-01-01',
					endDate: '2020-03-31',
					responsibilities: [
						'Designed and implemented RESTful APIs for AWS services.',
						'Improved server response times by 40% through caching strategies.',
						'Automated deployment pipelines using AWS CDK.'
					]
				}
			]
		},
		{
			id: '1',
			companyName: 'Google',
			companyUrl: 'https://google.com',
			companyLogoUrl: 'https://t3.ftcdn.net/jpg/05/17/82/24/360_F_517822417_cW17ljcETUNX8BylhlNesxWyhxHXO3Nc.jpg',
			companyLogoHorizontalUrl: '/logos/google-horizontal.png',
			companyDescription:
				'A multinational technology company specializing in search, cloud computing, and AI.',
			position: [
				{
					title: 'Software Engineer',
					startDate: '2022-06-01',
					endDate: 'Present',
					responsibilities: [
						'Developed scalable web applications using Next.js and Svelte.',
						'Optimized search ranking algorithms for better user experience.',
						'Led a team of 5 engineers in agile development.'
					]
				}
			]
		},
		{
			id: '2',
			companyName: 'Microsoft',
			companyUrl: 'https://microsoft.com',
			companyLogoUrl: 'https://t3.ftcdn.net/jpg/05/17/82/24/360_F_517822417_cW17ljcETUNX8BylhlNesxWyhxHXO3Nc.jpg',
			companyLogoHorizontalUrl: '/logos/microsoft-horizontal.png',
			companyDescription: 'A leading software company, known for Windows, Azure, and Office 365.',
			position: [
				{
					title: 'Frontend Developer',
					startDate: '2020-04-01',
					endDate: '2022-05-31',
					responsibilities: [
						'Built interactive dashboards using React and Tailwind CSS.',
						'Worked on Microsoft Teams web app performance optimization.',
						'Collaborated with UX designers to improve accessibility.'
					]
				}
			]
		},
		{
			id: '3',
			companyName: 'Amazon',
			companyUrl: 'https://amazon.com',
			companyLogoUrl: 'https://t3.ftcdn.net/jpg/05/17/82/24/360_F_517822417_cW17ljcETUNX8BylhlNesxWyhxHXO3Nc.jpg',
			companyLogoHorizontalUrl: '/logos/amazon-horizontal.png',
			companyDescription: 'A global e-commerce and cloud computing giant.',
			position: [
				{
					title: 'Backend Engineer',
					startDate: '2018-01-01',
					endDate: '2020-03-31',
					responsibilities: [
						'Designed and implemented RESTful APIs for AWS services.',
						'Improved server response times by 40% through caching strategies.',
						'Automated deployment pipelines using AWS CDK.'
					]
				}
			]
		},
	];

	let windowWidth = 0;
	let itemCount = 1;

	function updateItemCount() {
		const breakpoint = { sm: 640, md: 768, lg: 1024 };
		if (windowWidth >= breakpoint.lg) itemCount = 4;
		else if (windowWidth >= breakpoint.md) itemCount = 3;
		else if (windowWidth >= breakpoint.sm) itemCount = 2;
		else itemCount = 1;
	}

	function handleResize() {
		windowWidth = window.innerWidth;
		updateItemCount();
	}

	onMount(() => {
		windowWidth = window.innerWidth;
		updateItemCount();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});
</script>

<div
	class={`animate-marquee ${className}`}
	style="
    width: {(experience.length / itemCount) * 100}%;
    animation-duration: {experience.length}s;
  "
>
	{#each experience as exp, index}
		<div class="flex-1" key={`experience-${exp.id}-${index}`}>
			<img
				class="w-fit mx-auto h-12 block grayscale hover:grayscale-0 transition-all duration-300"
				width="48"
				height="48"
				src={exp.companyLogoUrl}
				alt={`${exp.companyName} logo`}
			/>
		</div>
		<div class="flex-0 w-4"></div>
	{/each}
</div>

<style>
	.animate-marquee {
		display: flex;
		will-change: transform;
		animation: marquee-scroll linear infinite;
	}

	@keyframes marquee-scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
</style>
