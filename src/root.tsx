import { component$, isDev } from "@builder.io/qwik";
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";
import { QwikPartytown } from "./components/partytown/partytown";

export default component$(() => {
  const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID
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
					// biome-ignore lint/security/noDangerouslySetInnerHtml: pre-paint theme guard
					dangerouslySetInnerHTML={`(function(){var el=document.documentElement;try{el.dataset.theme=localStorage.getItem('fs-theme')||'dark';}catch(e){el.dataset.theme='dark';}})();`}
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
				/>
				{!isDev && (
					<link
						rel="manifest"
						href={`${import.meta.env.BASE_URL}manifest.json`}
					/>
				)}
				<QwikPartytown forward={["gtag", "dataLayer.push"]} />

				<script
					async
					type="text/partytown"
					src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
				/>
				<script
					type="text/partytown"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
					dangerouslySetInnerHTML={`
            window.dataLayer = window.dataLayer || [];
            window.gtag = function() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
				/>

				<RouterHead />
			</head>
			<body lang="en">
				<RouterOutlet />
				{!isDev && <ServiceWorkerRegister />}
			</body>
		</QwikCityProvider>
	);
});
