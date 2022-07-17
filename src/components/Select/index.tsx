import Select from "react-select";
import { defaultOptions } from "./util";

export const MyComponent = ({ options = defaultOptions }) => (
  <Select options={options} />
);
