/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import Styled from 'styled-components';
import {
  useSelector,
} from 'react-redux';

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

const Layout = memo((props) => {
  const { children } = props;
  const hello = useSelector((state) => state.news);

  return (
    <>
      {hello.hello === ''
        ? 'loading'
        : (
          <>
            <Header>
              <Ul>
                <Li>
                  <AComponent href="#">전체</AComponent>
                </Li>
                <Li>
                  <AComponent href="#">비즈니스</AComponent>
                </Li>
                <Li>
                  <AComponent href="#">엔터테인먼트</AComponent>
                </Li>
                <Li>
                  <AComponent href="#">건강</AComponent>
                </Li>
                <Li>
                  <AComponent href="#">과학</AComponent>
                </Li>
                <Li>
                  <AComponent href="#">스포츠</AComponent>
                </Li>
                <Li>
                  <AComponent href="#">기술</AComponent>
                </Li>
              </Ul>
            </Header>
            <div>
              { children }
            </div>
            <div>
              Footer
            </div>
          </>
        )}
    </>
  );
});

// Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
