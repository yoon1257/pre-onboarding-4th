import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHospitalAlt } from 'react-icons/fa';
import styled from 'styled-components';
import { blue } from '../../styles/theme';
import { Link } from 'react-router-dom';

const Main = () => {
  const [showData, setShowData] = useState();

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
    <MainContainer>
      <div className='contentContainer'>
        <h1>병원예약 시스템 룰루랩입니다</h1>
        <FaHospitalAlt className='icon' />
        <div className='buttonContainer'>
          <Link to='information'>
            <button>진료예약하기</button>
          </Link>
          <Link to='inquiry'>
            <button>예약조회하기</button>
          </Link>
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
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

    h1 {
      width: 80%;
      border: 3px solid transparent;
      border-image: linear-gradient(to right, ${blue} 0%, #b026ff 100%);
      border-image-slice: 1;

      margin: 50px auto;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      color: ${blue};
    }
    .icon {
      color: ${blue};
      margin: 0 auto;
      font-size: 5rem;
    }
    .buttonContainer {
      display: flex;
      flex-direction: column;
      margin: auto;
      width: 50%;

      a {
        text-align: center;
      }
      button {
        margin-bottom: 10px;
        padding: 30px;
        border: 1px solid ${blue};
        border-radius: 10px;
        background-color: transparent;
        font-size: 30px;
        font-family: 900;
        color: ${blue};
        &:hover {
          background-color: ${blue};
          color: white;
          font-size: 900;
          cursor: pointer;
          box-shadow: 0px 15px 25px -5px rgba(darken(dodgerblue, 40%));
          transform: scale(1.03);
        }
        &:active {
          box-shadow: 0px 4px 8px rgba(darken(dodgerblue, 30%));
          transform: scale(0.98);
        }
      }
    }
  }
`;

export default Main;
