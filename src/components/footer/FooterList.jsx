import React, { useState } from 'react';
import styled from 'styled-components';
import pinOn from '../../assets/image/pin-on.png';
import pinOff from '../../assets/image/pin-off.png';
import noteOn from '../../assets/image/note-on.png';
import noteOff from '../../assets/image/note-off.png';
import phoneOn from '../../assets/image/phone-on.png';
import phoneOff from '../../assets/image/phone-off.png';

const FooterList = () => {
  const [isFooter, setIsFooter] = useState([true, false, false]);
  const changeFooter = (e) => {
    const targetId = Number(e.target.id);
    let result = [];

    for (let i = 0; i < isFooter.length; i++) {
      i === targetId ? result.push(true) : result.push(false);
    }

    setIsFooter(result);
  };
  const footerTypes = [
    {
      name: '병원/약국',
      onUrl: pinOn,
      offUrl: pinOff,
    },
    {
      name: '병원목록',
      onUrl: noteOn,
      offUrl: noteOff,
    },
    {
      name: '비대면진료',
      onUrl: phoneOn,
      offUrl: phoneOff,
    },
  ];
  return (
    <>
      {footerTypes.map((footerType, index) => {
        return (
          <Wrapper key={index}>
            <div
              id={index}
              onClick={changeFooter}
              style={{
                backgroundImage: `url(${isFooter[index] ? footerType.onUrl : footerType.offUrl})`,
              }}
            />
            <span style={{ color: isFooter[index] ? '#3183B5' : '#808588' }}>{footerType.name}</span>
          </Wrapper>
        );
      })}
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 100%;
  div {
    border: none;
    width: 5.5vh;
    height: 4.5vh;
    margin-bottom: 1vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
  }
  span {
    font-size: 0.9em;
  }
`;
export default FooterList;
