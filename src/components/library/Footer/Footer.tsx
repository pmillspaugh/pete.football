import styled from "styled-components";
import { Fonts } from "../../../styles/constants";

const Footer = () => {
  return <StyledFooter>© 2022 Peter Millspaugh</StyledFooter>;
};

const StyledFooter = styled.footer`
  margin-top: auto;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${Fonts.Jost};
  font-weight: 400;
  font-size: 12px;
`;

export default Footer;
