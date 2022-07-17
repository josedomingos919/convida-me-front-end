import styled from "styled-components";
import { util } from "../../util";

export const Container = styled.div`
  font-size: ${util.fontSize.large};
  font-weight: bold;
  letter-spacing: 2px;
`;

export const BlackText = styled.label`
  color: ${util.colors.black};
`;

export const BlueText = styled.label`
  color: ${util.colors.blue};
`;
