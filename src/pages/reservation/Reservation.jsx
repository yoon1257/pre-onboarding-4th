import React from 'react';
import styled from 'styled-components';
import { blue } from '../../styles/theme';

const Reservation = () => {
  return (
    <ReservationContainer>
      <div className='contentContainer'></div>
    </ReservationContainer>
  );
};

const ReservationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${blue};
  .contentContainer {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 80%;
    border-radius: 10px;
    background-color: white;
    overflow: auto;
  }
`;
export default Reservation;
