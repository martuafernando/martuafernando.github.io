import { component$, Slot, useVisibleTask$ } from "@builder.io/qwik";
import { type RequestHandler, useLocation } from "@builder.io/qwik-city";
import { SiteHeader } from "~/components/SiteHeader";
import { SiteFooter } from "~/components/SiteFooter";

export const onGet: RequestHandler = async ({ cacheControl }) => {
	cacheControl({
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		maxAge: 5,
	});
};

export default component$(() => {
	const loc = useLocation();

	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(({ track, cleanup }) => {
		// Re-arm motion + observers on every client-side navigation.
		track(() => loc.url.pathname);

		const reduce = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		document.body.classList.add("page-enter");

		// Hero stagger entrance (transition-based, final state is always visible).
		const heroEl = document.querySelector(".hero");
		if (heroEl && !reduce) {
			heroEl.classList.add("armed");
			void (heroEl as HTMLElement).offsetWidth;
			heroEl.classList.add("entered");
		}

		const reveals = Array.from(
			document.querySelectorAll<HTMLElement>(".reveal"),
		);

		// Leave everything visible (the default) when we won't animate.
		if (reduce || !("IntersectionObserver" in window)) {
			return;
		}

		// Opt in to the hidden start state now that JS is running, then reveal
		// above-the-fold elements immediately and observe the rest on scroll.
		document.documentElement.classList.add("reveal-ready");
		void document.documentElement.offsetWidth; // commit hidden state

		const revealIO = new IntersectionObserver(
			(entries) => {
				entries.forEach((en) => {
					if (en.isIntersecting) {
						en.target.classList.add("in");
						revealIO.unobserve(en.target);
					}
				});
			},
			{ threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
		);
		reveals.forEach((el) => {
			const r = el.getBoundingClientRect();
			const inView = r.top < window.innerHeight && r.bottom > 0;
			if (inView) {
				el.classList.add("in");
			} else {
				revealIO.observe(el);
			}
		});

		// Scrollspy — highlight the active section in the nav.
		const navAnchors = Array.from(
			document.querySelectorAll<HTMLAnchorElement>('.nav-links a[href*="#"]'),
		);
		const sections = navAnchors
			.map((a) => {
				const href = a.getAttribute("href") ?? "";
				const hash = href.slice(href.indexOf("#"));
				return hash.length > 1 ? document.querySelector(hash) : null;
			})
			.filter((el): el is Element => Boolean(el));

		let spy: IntersectionObserver | undefined;
		if (sections.length) {
			spy = new IntersectionObserver(
				(entries) => {
					entries.forEach((en) => {
						if (!en.isIntersecting) return;
						const id = `#${en.target.id}`;
						navAnchors.forEach((a) =>
							a.classList.toggle(
								"active",
								(a.getAttribute("href") ?? "").endsWith(id),
							),
						);
					});
				},
				{ rootMargin: "-45% 0px -50% 0px" },
			);
			sections.forEach((s) => spy?.observe(s));
		}

		// Subtle pointer parallax on the hero orbs.
		const orbs = Array.from(document.querySelectorAll<HTMLElement>(".hero-orb"));
		const onMove = (e: PointerEvent) => {
			const cx = e.clientX / window.innerWidth - 0.5;
			const cy = e.clientY / window.innerHeight - 0.5;
			orbs.forEach((o, i) => {
				const d = (i + 1) * 14;
				o.style.transform = `translate(${cx * d}px,${cy * d}px)`;
			});
		};
		if (orbs.length) {
			window.addEventListener("pointermove", onMove, { passive: true });
		}

		cleanup(() => {
			revealIO.disconnect();
			spy?.disconnect();
			window.removeEventListener("pointermove", onMove);
		});
	});

	return (
		<>
			<SiteHeader />
			<main id="top">
				<Slot />
			</main>
			<SiteFooter />
		</>
	);
});
