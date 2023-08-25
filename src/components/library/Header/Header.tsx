import Link from "next/link";
import styled from "styled-components";
import { Colors, Fonts } from "../../../styles/constants";
import CrystalFootball from "./CrystalFootball";

const Header = () => {
  return (
    <OuterWrapper borderColor={Colors.VikingsPurple}>
      <OuterWrapper borderColor={Colors.BroncosOrange}>
        <HeaderWrapper>
          <Link href="/" passHref>
            <LogoWrapper>
              <CrystalFootball />
            </LogoWrapper>
          </Link>
        </HeaderWrapper>
      </OuterWrapper>
    </OuterWrapper>
  );
};

const HeaderWrapper = styled.div`
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0px;
  border-bottom: 2px solid ${Colors.DolphinsTeal};
`;

const LogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

type OuterWrapperProps = {
  borderColor: Colors;
};

const OuterWrapper = styled.div<OuterWrapperProps>`
  padding-bottom: 6px;
  border-bottom: 2px solid ${(p) => p.borderColor};
`;

export default Header;
