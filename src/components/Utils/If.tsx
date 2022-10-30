interface Props {
  children: React.ReactNode;
  condition: boolean | undefined;
}

export default function If({ children, condition }: Props) {
  return condition ? <>{children}</> : <></>;
}
