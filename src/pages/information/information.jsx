import React, { useState, useEffect } from 'react';
import List from './components/List';
import styled from 'styled-components';
import { blue } from '../../styles/theme';
import axios from 'axios';

const Information = () => {
  const [showData, setShowData] = useState('');

  useEffect(() => {
    axios
      .get('./data/hospital.json')
      .then((res) => {
        setShowData(res.data);
        console.log('성공');
      })
      .catch((err) => {
        console.log('에러에러', err);
      });
  }, []);

  return (
    <InformationContainer>
      <div className='contentContainer '>
        <List showData={showData} setShowData={setShowData} />
      </div>
    </InformationContainer>
  );
};
const InformationContainer = styled.div`
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
export default Information;
