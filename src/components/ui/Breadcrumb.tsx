import { type ClassList, component$ } from "@builder.io/qwik";
import { Breadcrumb as BreadcrumbUi } from "./basic";
import { useLocation } from "@builder.io/qwik-city";

export interface BreadcrumbInterface {
	class?: ClassList;
}

export const Breadcrumb = component$((props: BreadcrumbInterface) => {
	const location = useLocation();
	const pathnames = location.url.pathname.split("/").filter((x) => x);

	let accumulatedPath = "";

	return (
		<BreadcrumbUi.Root class={props.class}>
			<BreadcrumbUi.List>
				<BreadcrumbUi.Item>
					<BreadcrumbUi.Link href="/">Home</BreadcrumbUi.Link>
				</BreadcrumbUi.Item>
				{pathnames.map((segment, idx) => {
					accumulatedPath += `/${segment}`;
					const isLast = idx === pathnames.length - 1;
					return (
						<>
							<BreadcrumbUi.Separator key={segment} />
							<BreadcrumbUi.Item key={segment}>
								{isLast ? (
									<BreadcrumbUi.Page>
										{decodeURIComponent(segment)}
									</BreadcrumbUi.Page>
								) : (
									<BreadcrumbUi.Link href={accumulatedPath}>
										{decodeURIComponent(segment)}
									</BreadcrumbUi.Link>
								)}
							</BreadcrumbUi.Item>
						</>
					);
				})}
			</BreadcrumbUi.List>
		</BreadcrumbUi.Root>
	);
});
