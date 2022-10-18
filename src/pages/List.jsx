import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const List = () => {
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
  console.log('데이터', showData);
  return (
    <>
      {showData &&
        showData.map((data) => {
          return (
            <ListBlock>
              <div className='location'>
                <div>
                  <h3>{data.name}</h3>
                </div>
                <div className='align'>
                  <div>
                    <img className='img-style' alt='hospital' src={data.image} />
                  </div>
                  <div className='explain'>
                    <div>운영시간 : {data.Operation}</div>
                    <div>진료과목 : {data.major}</div>
                    <div>점심시간 : {data.lunch}</div>
                  </div>
                </div>
              </div>
            </ListBlock>
          );
        })}
    </>
  );
};
const ListBlock = styled.div`
  .location {
    border: 1px solid #eee;
    padding: 30px;
  }
  .align {
    display: flex;
    .img-style {
      width: 150px;
      border-radius: 10px;
    }
    .explain {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 30px;
    }
  }
`;
export default List;
