import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = ({ showData }) => {
  return (
    <ListContainer>
      {showData &&
        showData.map((data) => {
          return (
            <>
              <div className='location'>
                <div>
                  <h3 className='title'>{data.name}</h3>
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
                  <div>
                    <div>
                      <button>상세보기</button>
                    </div>
                    <div>
                      <Link to='reservation'>
                        <button>예약하기</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  .title {
    text-align: initial;
    font-size: 30px;
  }

  .location {
    border-bottom: 1px solid #eee;
    padding: 30px;
  }
  .align {
    display: flex;
    justify-content: space-between;
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
