import Compose from "./Badges/Badges/Compose.astro";
import Firebase from "./Badges/Badges/Firebase.astro";
import JS from "./Badges/Badges/JS.astro";
import Kotlin from "./Badges/Badges/Kotlin.astro";
import Mongo from "./Badges/Badges/Mongo.astro";
import Next from "./Badges/Badges/Next.astro";
import React from "./Badges/Badges/React.astro";
import ReactNative from "./Badges/Badges/ReactNative.astro";
import Svelte from "./Badges/Badges/Svelte.astro";
import TS from "./Badges/Badges/TS.astro";

export default [
	{
		name: "CardNest",
		desc: "CardNest stores payment cards details, locally or synced with an account, always encrypted.",
		appLink: "https://cn.hrvs.dev",
		codeLink: "https://github.com/hrvsdev/cardnest",
		badges: [TS, React, ReactNative, Firebase],
		isInDev: false,
	},
	{
		name: "CardNest Native",
		desc: "Same as CardNest, but native Android, means better performance, usability and more features like biometric authentication.",
		appLink: "https://github.com/hrvsdev/cardnest-native/releases/latest",
		codeLink: "https://github.com/hrvsdev/cardnest-native",
		badges: [Kotlin, Compose, Firebase],
		isInDev: false,
	},
	{
		name: "Secretly",
		desc: "An end-to-end encrypted app to securely share sensitive data such as passwords, API keys, and OTPs through a one-time link.",
		appLink: "https://st.hrvs.dev",
		codeLink: "https://github.com/hrvsdev/secretly",
		badges: [TS, React, Next, Firebase],
		isInDev: false,
	},
	{
		name: "Tic Tac Toe",
		desc: "A multiplayer and online fun game to play with your friend online or offline or even with the AI and computer.",
		appLink: "https://t3.hrvs.dev",
		codeLink: "https://github.com/hrvsdev/tic-tac-toe",
		badges: [TS, Svelte, Firebase],
		isInDev: true,
	},
	{
		name: "Secured Text",
		desc: "A no-nonsense simple online note taking app with end-to-end encryption and no account required.",
		appLink: "https://securedtext.vercel.app",
		codeLink: "https://github.com/hrvsdev/secured-text",
		badges: [JS, Svelte, Mongo],
		isInDev: false,
	},
];
