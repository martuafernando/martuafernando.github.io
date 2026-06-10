import { $, component$, useOnWindow, useSignal } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { LangToggle } from "./LangToggle";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks, profile } from "~/data/site";
import { t, ui, useLang } from "~/i18n";

/**
 * Fixed site header: brand, anchor nav, theme toggle, and mobile menu.
 * Anchor links resolve to in-page hashes on the homepage and to `/#…` from
 * any other route so the section is reachable from project pages too.
 */
export const SiteHeader = component$(() => {
	const loc = useLocation();
	const lang = useLang();
	const isHome = loc.url.pathname === "/";
	const menuOpen = useSignal(false);
	const stuck = useSignal(false);

	useOnWindow(
		"scroll",
		$(() => {
			stuck.value = window.scrollY > 12;
		}),
	);

	const closeMenu = $(() => {
		menuOpen.value = false;
		document.body.classList.remove("menu-open");
	});

	const toggleMenu = $(() => {
		menuOpen.value = !menuOpen.value;
		document.body.classList.toggle("menu-open", menuOpen.value);
	});

	const to = (hash: string) => (isHome ? hash : `/${hash}`);

	return (
		<header class={["site-header", stuck.value && "is-stuck"]}>
			<div class="wrap nav">
				<a
					class="brand"
					href={isHome ? "#top" : "/"}
					aria-label={`${profile.name} — home`}
				>
					<span class="mark">{profile.mark}</span>
					<span>{profile.name}</span>
				</a>
				<nav class="nav-links" aria-label="Primary">
					{navLinks.map((l) => (
						<a key={l.href} href={to(l.href)} onClick$={closeMenu}>
							{t(l.label, lang.value)}
						</a>
					))}
				</nav>
				<div class="nav-actions">
					<a class="btn btn-soft nav-cta-desktop" href={to("#contact")}>
						{t(ui.getInTouch, lang.value)}
					</a>
					<LangToggle />
					<ThemeToggle />
					<button
						class="menu-btn"
						type="button"
						aria-label="Menu"
						aria-expanded={menuOpen.value}
						onClick$={toggleMenu}
					>
						<span />
						<span />
						<span />
					</button>
				</div>
			</div>
		</header>
	);
});
