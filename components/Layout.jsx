/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import Styled from 'styled-components';

const Header = Styled.div`
  width:100%;
  height:50px;
  border-bottom: 1px solid black;
`;
const AComponent = Styled.a`
  color:black;
  text-decoration: none;
`;
const Li = Styled.li`
  display: inline-block;
  height: 50px;
  line-height: 55px;
  padding: 0 20px;
`;
const Ul = Styled.ul`
  padding: 0;
  margin: 0;
`;
const Row = Styled.div`
  padding:10px;
`;
const menu = [
  { url: '/', name: '최신기사' },
  { url: '/', name: '비즈니스' },
  { url: '/', name: '엔터테인먼트' },
  { url: '/', name: '건강' },
  { url: '/', name: '과학' },
  { url: '/', name: '스포츠' },
  { url: '/', name: '기술' },
];

const Layout = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header>
        <Ul>
          {menu.map((v) => (
            <Li key={v.name}>
              <AComponent href={v.url}>{v.name}</AComponent>
            </Li>
          ))}
        </Ul>
      </Header>
      <article>
        <Row>
          { children }
        </Row>
      </article>
      <div>
        Footer
      </div>
    </>
  );
});

// Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
