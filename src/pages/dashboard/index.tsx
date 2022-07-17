import { Header } from "../../components/Header";
import { useDashboard } from "./state";
import { Container } from "./styles";

export const Dashboard = () => {
  const { num } = useDashboard();

  return (
    <Container>
      <Header userName="José Ndonge" />
    </Container>
  );
};
