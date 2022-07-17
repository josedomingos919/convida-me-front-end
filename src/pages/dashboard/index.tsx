import { useDashboard } from "./state";

export const Dashboard = () => {
  const { num } = useDashboard();

  return <>Dashboard: {num}</>;
};
