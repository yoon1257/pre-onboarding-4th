import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Map from '../components/list/map';
const Main = () => {
  const [showData, setShowData] = useState();

  useEffect(() => {
    axios
      .get('./data/hospital.json')
      .then((res) => {
        setShowData(res.data);
      })
      .catch((err) => {
        console.log('에러에러', err);
      });
  }, []);
  return (
    <MainBlock>
      <Map data={showData} />
    </MainBlock>
  );
};

const MainBlock = styled.div``;

export default Main;
