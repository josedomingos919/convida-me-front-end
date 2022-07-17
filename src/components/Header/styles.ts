import styled from "styled-components";
import { util } from "../../util";

export const Container = styled.div`
  font-size: ${util.fontSize.big};
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const UserInfoContainer = styled.div`
  padding: 5px 10px;
  background-color: ${util.colors.bluewithopacity2};
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const UserNameLabel = styled.label`
  font-size: ${util.fontSize.normal};
  color: ${util.colors.blackWithOpacity};
  font-weight: bold;
`;

export const UserImageContainer = styled.div`
  width: 31px;
  height: 31px;
  border-radius: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${util.colors.bluewithopacity};
`;
