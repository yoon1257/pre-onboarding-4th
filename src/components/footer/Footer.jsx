import React from 'react';
import styled from 'styled-components';
import FooterList from './FooterList';

const Footer = () => {
  return (
    <Wrapper>
      <FooterList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0px;
  padding: 1vh 0 1vh 0;
  width: 100%;
  @media screen and (min-device-width: 1024px) {
  }
  @media screen and (min-device-width: 541px) and (max-device-width: 768px) {
  }
`;
export default Footer;
