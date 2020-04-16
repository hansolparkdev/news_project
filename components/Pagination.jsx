/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';

const Ul = Styled.ul`
  text-align:center
`;
const Li = Styled.li`
  display:inline-block;
  padding: 0 10px;
  cursor: pointer;
`;
const Button = Styled.button`
  padding:5px;
`;
const Pagination = (props) => {
  const [pages, setPages] = useState([]);
  const pageSize = 10;
  const {
    totalResults, onPageChange,
  } = props;
  const pageCount = Math.ceil(totalResults / pageSize);
  useEffect(() => {
    for (let i = 1; i <= pageCount; i += 1) {
      setPages((prevArray) => [...prevArray, i]);
    }
  }, []);
  return (
    <Ul>
      {pages.map((v, i) => (
        <Li
          key={`${v + i}`}
        >
          <Button type="button" onClick={() => onPageChange(i + 1)}>{v}</Button>
        </Li>
      ))}
    </Ul>
  );
};

export default Pagination;
