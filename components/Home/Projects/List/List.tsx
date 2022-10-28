import React from "react";
import Project from "./Project";

export default function List() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Project
        name="Secretly"
        desc="An end-to-end encrypted app to securely share sensitive data such as passwords, API keys, and OTPs through a one-time link."
        appLink="https://st.hrvs.me"
        githubLink="https://github.com/hrvsdev/secretly"
      />
      <Project
        name="Secured Text"
        desc="One of the most secure text and notes app on the Internet, Secured Text is the
          best way to take notes and access them from anywhere."
        appLink="https://securedtext.vercel.app"
        githubLink="https://github.com/hrvsdev/secured-text"
      />
      <Project
        name="Tic Tac Toe"
        desc="A multiplayer and online fun game to play with your friend online or offline or even with the AI and computer."
        appLink="https://t3.hrvs.me"
        githubLink="https://github.com/hrvsdev/tic-tac-toe"
        development
      />
      <Project
        name="Your Mind"
        desc="A simple and fast note-taking app with encryption and real-time sync."
        appLink="https://yourmind.vercel.app"
        githubLink="https://github.com/hrvsdev/yourmind"
      />
      <Project
        name="Secretly Telegram Bot"
        desc="Extremely fast Telegram Bot for Secretly App with both Chat and Inline Mode for sharing confidential data."
        appLink="https://t.me/scrtlybot"
        githubLink="https://github.com/hrvsdev/secretly-tg-bot"
      />
    </div>
  );
}
