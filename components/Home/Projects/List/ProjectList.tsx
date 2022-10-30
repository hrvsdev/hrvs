import BadgeFirebase from "../../../Badges/Chips/Firebase";
import BadgeNext from "../../../Badges/Chips/Next";
import BadgeReact from "../../../Badges/Chips/React";
import BadgeTS from "../../../Badges/Chips/TS";
import BadgeJS from "../../../Badges/Chips/JS";
import BadgeSvelte from "../../../Badges/Chips/Svelte";
import BadgeMongo from "../../../Badges/Chips/Mongo";
import BadgeExpress from "../../../Badges/Chips/Express";
import BadgeDeno from "../../../Badges/Chips/Deno";

const projects = [
  {
    key: 1,
    name: "Secretly",
    desc: "An end-to-end encrypted app to securely share sensitive data such as passwords, API keys, and OTPs through a one-time link.",
    appLink: "https://st.hrvs.me",
    githubLink: "https://github.com/hrvsdev/secretly",
    badges: [
      <BadgeTS key={1} />,
      <BadgeReact key={2} />,
      <BadgeNext key={3} />,
      <BadgeFirebase key={4} />,
    ],
  },
  {
    key: 2,
    name: "Secured Text",
    desc: "One of the most secure text and notes app on the Internet, Secured Text is the best way to take notes and access them from anywhere.",
    appLink: "https://securedtext.vercel.app",
    githubLink: "https://github.com/hrvsdev/secured-text",
    badges: [<BadgeJS key={1} />, <BadgeSvelte key={2} />, <BadgeMongo key={3} />],
  },
  {
    key: 3,
    name: "Tic Tac Toe",
    desc: "A multiplayer and online fun game to play with your friend online or offline or even with the AI and computer.",
    appLink: "https://t3.hrvs.me",
    githubLink: "https://github.com/hrvsdev/tic-tac-toe",
    badges: [<BadgeTS key={1} />, <BadgeSvelte key={2} />, <BadgeFirebase key={3} />],
  },
  {
    key: 4,
    name: "Your Mind",
    desc: "A simple and fast note-taking app with encryption and real-time sync.",
    appLink: "https://yourmind.vercel.app",
    githubLink: "https://github.com/hrvsdev/yourmind",
    badges: [
      <BadgeJS key={1} />,
      <BadgeReact key={2} />,
      <BadgeExpress key={3} />,
      <BadgeFirebase key={4} />,
    ],
  },
  {
    key: 5,
    name: "Secretly Telegram Bot",
    desc: "Extremely fast Telegram Bot for Secretly App with both Chat and Inline Mode for sharing confidential data.",
    appLink: "https://t.me/scrtlybot",
    githubLink: "https://github.com/hrvsdev/secretly-tg-bot",
    badges: [<BadgeTS key={1} />, <BadgeDeno key={2} />, <BadgeFirebase key={3} />],
  },
];

export default projects;
