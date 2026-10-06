import { useVisibleTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

/**
 * Wires up the page's motion behaviours: the hero stagger entrance,
 * scroll-reveal, and nav scrollspy.
 *
 * Content is visible by default; the hidden start state is only opted into
 * (via the `reveal-ready` class) once this runs, so nothing can be stranded
 * if the script is delayed or fails. Re-arms on client-side navigation.
 */
export const useScrollEffects = () => {
	const loc = useLocation();

	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(({ track, cleanup }) => {
		track(() => loc.url.pathname);

		const reduce = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		// Hero stagger entrance (transition-based; final state is always visible).
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
						en.target.setAttribute("data-revealed", "true");
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
				el.setAttribute("data-revealed", "true");
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

		cleanup(() => {
			revealIO.disconnect();
			spy?.disconnect();
		});
	});
};
