export interface INameProps {
  development?: boolean;
}

export interface ILinksProps {
  appLink: string;
  githubLink: string;
}

export interface IProject extends INameProps, ILinksProps {}
