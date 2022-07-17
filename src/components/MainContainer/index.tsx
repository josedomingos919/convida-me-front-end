import { Container } from "./styles";
import { Props } from "./types";

export const MainContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};
