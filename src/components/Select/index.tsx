import ReactSelect from "react-select";
import { defaultOptions } from "./util";

export const Select = ({ options = defaultOptions }) => (
  <ReactSelect options={options} />
);
