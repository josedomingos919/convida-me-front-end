import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { NotFound } from "../pages/notFound";

export const AppRautes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
