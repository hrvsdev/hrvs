import type { ReactNode } from "react";

export interface INameProps {
  name: string;
  development?: boolean;
}

export interface ILinksProps {
  appLink: string;
  githubLink: string;
}

export interface IBadgesProps {
  badges?: ReactNode[];
}

export interface IProject extends INameProps, ILinksProps, IBadgesProps {
  desc: string;
}
