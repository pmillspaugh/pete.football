import { ReactNode } from "react";
import styled from "styled-components";
import { Breakpoints } from "../../../styles/constants";
import Footer from "../Footer";
import Header from "../Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Header />
      <FlexContainer>
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
      </FlexContainer>
      <Footer />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const MaxWidthWrapper = styled.div`
  max-width: 600px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 48px 24px;

  @media (min-width: ${Breakpoints.Tablet}) {
    padding: 60px 32px;
  }
`;

export default Layout;
