import { Header } from "../../components/Header";
import { useDashboard } from "./state";
import { Body, Container, FormContent, LeftMenuContainer } from "./styles";

export const Dashboard = () => {
  const { num } = useDashboard();

  return (
    <Container>
      <Header userName="José Ndonge" />
      <Body>
        <LeftMenuContainer>Menu</LeftMenuContainer>
        <FormContent>Form</FormContent>
      </Body>
    </Container>
  );
};
