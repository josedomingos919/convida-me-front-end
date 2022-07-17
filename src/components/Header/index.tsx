import { Logo } from "../Logo";
import {
  Container,
  UserNameLabel,
  UserInfoContainer,
  UserImageContainer,
} from "./styles";

import { FaUserAlt } from "react-icons/fa";
import { Props } from "./types";
import { util } from "../../util";

export const Header = ({ userName }: Props) => {
  return (
    <Container>
      <Logo />

      <UserInfoContainer>
        <UserNameLabel>{userName}</UserNameLabel>
        <UserImageContainer>
          <FaUserAlt color={util.colors.blue} />
        </UserImageContainer>
      </UserInfoContainer>
    </Container>
  );
};
