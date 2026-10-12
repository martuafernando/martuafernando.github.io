import { component$, isDev } from "@builder.io/qwik";
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";
import sansLatin from "@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2?url";
import { QwikPartytown } from "./components/partytown/partytown";

export default component$(() => {
	const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Don't remove the `<head>` and `<body>` elements.
	 */

	return (
		<QwikCityProvider>
			<head>
				<meta charset="utf-8" />
				{/* Set theme before paint to avoid a flash of the wrong theme. */}
				<script
					// pre-paint theme + lang guard
					dangerouslySetInnerHTML={`(function(){var el=document.documentElement;try{el.dataset.theme=localStorage.getItem('fs-theme')||'light';el.lang=localStorage.getItem('fs-lang')||'en';}catch(e){el.dataset.theme='light';el.lang='en';}})();`}
				/>
				{/* Latin subset of the UI font: needed on every page, so fetch it early. */}
				<link
					rel="preload"
					href={sansLatin}
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				{!isDev && (
					<link
						rel="manifest"
						href={`${import.meta.env.BASE_URL}manifest.json`}
					/>
				)}
				{/* Analytics only when an ID is configured; otherwise builds would request gtag/js?id=undefined. */}
				{googleAnalyticsId && (
					<>
						<QwikPartytown forward={["gtag", "dataLayer.push"]} />
						<script
							async
							type="text/partytown"
							src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
						/>
						<script
							type="text/partytown"
							// inline gtag bootstrap, executed by Partytown
							dangerouslySetInnerHTML={`
            window.dataLayer = window.dataLayer || [];
            window.gtag = function() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
						/>
					</>
				)}

				<RouterHead />
			</head>
			<body>
				<RouterOutlet />
				{!isDev && <ServiceWorkerRegister />}
			</body>
		</QwikCityProvider>
	);
});
