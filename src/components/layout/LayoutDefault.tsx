import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

export const LayoutDefault = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <MobileContainer>{children}</MobileContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #000000;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const MobileContainer = styled.div`
  background-color: #272c30;
  display: flex;
  flex-direction: column;
  width: 384px;
  height: 100vh;
  max-height: 100vh;
  overflow: auto;
`;
