import React from 'react';
import styled from 'styled-components';

const List = () => {
  return (
    <Wrapper>
      <div className='location'>
        <button className='list-btn'>목록보기</button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .location {
    display: flex;
    justify-content: center;
  }
  .list-btn {
    font-size: 15px;
    border-radius: 5px;
    background-color: #ffffff;
  }
`;
export default List;
