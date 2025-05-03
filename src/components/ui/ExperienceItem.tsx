import { $, component$ } from "@builder.io/qwik";
import type { ClassList } from "@builder.io/qwik";
import type Experience from "~/domains/Experience";

export interface ExperienceItemProps {
	class?: ClassList;
	experience: Experience;
}

export const ExperienceItem = component$((props: ExperienceItemProps) => {
	const formatMonthSpan = $((months: number): string => {
		const years = Math.floor(months / 12);
		const rem = months % 12;
		const parts = [];
		if (years) {
			parts.push(`${years} year${years > 1 ? "s" : ""}`);
		}

		if (rem) {
			parts.push(`${rem} month${rem > 1 ? "s" : ""}`);
		}

		return parts.join(" ") || "0 months";
	});

	const experience = props.experience;

	const positions = experience.position;
	const totalMonths = positions.reduce((sum, { startDate, endDate }) => {
		const s = new Date(startDate);
		const e = endDate ? new Date(endDate) : new Date();
		return (
			sum +
			(e.getFullYear() - s.getFullYear()) * 12 +
			(e.getMonth() - s.getMonth())
		);
	}, 0);
	const experienceDuration = formatMonthSpan(totalMonths);
	const hasMultiple = positions.length > 1;

	return (
		<div class={["max-w-xl mx-auto", props.class]}>
			<a
				href={experience.companyUrl}
				class="block hover:opacity-80"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div class="flex items-center space-x-4">
					<img
						src={experience.companyLogoUrl}
						alt={`${experience.companyName} logo`}
						width={48}
						height={48}
						class="h-8 w-auto object-cover"
					/>
					<div>
						<h3 class="text-xl font-medium text-black">
							{experience.companyName}
						</h3>
						<p class="text-sm text-gray-400">{experienceDuration}</p>
					</div>
				</div>
				<p class="text-sm mt-2 text-gray-400">
					{experience.companyDescription}
				</p>
			</a>

			<div class={{ "mt-4": true, "pl-4": hasMultiple }}>
				{positions.map((pos) => {
					const s = new Date(pos.startDate);
					const e = pos.endDate ? new Date(pos.endDate) : new Date();
					const months =
						(e.getFullYear() - s.getFullYear()) * 12 +
						(e.getMonth() - s.getMonth());
					const posDuration = formatMonthSpan(months);

					return (
						<div
							key={`${pos.startDate}-${pos.title}`}
							class={{
								"mt-6 relative": true,
								"before:content-[''] before:absolute before:w-2 before:h-2 before:bg-gray-300 before:-left-5 before:top-3 before:rounded-full after:content-[''] after:absolute after:w-[2px] after:h-full after:bg-gray-300 after:-left-[17px] after:top-7 after:rounded-full last:after:content-none":
									hasMultiple,
							}}
						>
							<h4 class="text-lg font-semibold text-black">{pos.title}</h4>
							<p class="text-sm text-gray-400">{pos.employmentType}</p>
							<p class="text-sm text-gray-400">
								{pos.location} ({pos.locationType})
							</p>
							<p class="text-sm text-gray-400">
								{pos.startDate} - {pos.endDate ?? "Present"}
								<span class="mx-2">•</span>
								{posDuration}
							</p>
							<ul class="list-disc list-outside ml-4 mt-2 text-black">
								{pos.descriptionPoints.map((pt) => (
									<li key={pt}>{pt}</li>
								))}
							</ul>
						</div>
					);
				})}
			</div>
		</div>
	);
});
