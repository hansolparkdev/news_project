/* eslint-disable no-console */
import React, { useEffect } from 'react';
import {
  useDispatch, useSelector,
} from 'react-redux';
import Styled from 'styled-components';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {
  FETCH_NEWS_DATA_REQUEST, CHANGE_SEARCH_VALUE,
  CHANGE_FROM_DATE_VALUE, CHANGE_TO_DATE_VALUE,
} from '../redux/reducers/newsReducer';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';

const title = 'all';
const NewsList = Styled.div`
  position:relative;
  height:100px;
`;
const ImgDiv = Styled.div`
  position:absolute;
  top:10px;
  left:0;
`;
const NewsImg = Styled.img`
  width:80px;
  height:80px;
`;
const ContentDiv = Styled.div`
  padding-left:90px;
  padding-top:10px;
`;
const Title = Styled.div`
  font-weight:700;
  font-size:20px;
`;
const Description = Styled.div`
  font-weight:500;
  font-size:15px;
`;
const Input = Styled.input`
  width:90px;
  height:30px;
  border: 1px solid #BDBDBD;
  font-size:12px;
  padding-left:10px;
  margin-right:10px;
`;
const WrapperStyled = Styled.div`
  &&& {
    .DayPickerInput input{
      width:90px;
      height:30px;
      border: 1px solid #BDBDBD;
      font-size:12px;
      padding-left:10px;
      margin-right:10px;
    }
  }
`;
const Button = Styled.button`
  width:100px;
  height:32px;
  font-size:12px;
  border:1px solid black;
  color: white;
  cursor: pointer;
  background-color:rgb(0, 2, 48);
`;
const Index = () => {
  // console.log('index');
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_NEWS_DATA_REQUEST });
  }, []);

  const onPageChange = (currentPage) => {
    const { searchValue, from, to } = news;
    dispatch({
      type: FETCH_NEWS_DATA_REQUEST,
      currentPage,
      searchValue,
      from,
      to,
    });
  };
  const onChangeSearchValue = (e) => {
    const searchValue = e.target.value;
    dispatch({ type: CHANGE_SEARCH_VALUE, searchValue });
  };
  const onChangeFromDate = (day) => {
    const format = new Date(day);
    const dd = String(format.getDate());
    const mm = String(format.getMonth() + 1);
    const yyyy = format.getFullYear();

    const fromData = `${yyyy}-${mm}-${dd}`;
    dispatch({ type: CHANGE_FROM_DATE_VALUE, fromData });
  };
  const onChangeToDate = (day) => {
    const format = new Date(day);
    const dd = String(format.getDate());
    const mm = String(format.getMonth() + 1);
    const yyyy = format.getFullYear();

    const toData = `${yyyy}-${mm}-${dd}`;
    dispatch({ type: CHANGE_TO_DATE_VALUE, toData });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    const { searchValue, from, to } = news;
    dispatch({
      type: FETCH_NEWS_DATA_REQUEST,
      searchValue,
      from,
      to,
    });
  };
  return (
    <Layout title={title}>
      <form onSubmit={onSubmitForm}>
        <table>
          <tbody>
            <tr>
              <td>
                <Input type="text" placeholder="검색어 입력" value={news.searchValue} onChange={onChangeSearchValue} />
              </td>
              <td>
                <WrapperStyled>
                  <DayPickerInput onDayChange={onChangeFromDate} />
                </WrapperStyled>
              </td>
              <td>
                <WrapperStyled>
                  <DayPickerInput onDayChange={onChangeToDate} />
                </WrapperStyled>
              </td>
              <td>
                <Button type="submit">검색조건으로 검색</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      {news.fetchState === undefined || news.fetchState === 'fetch'
        ? 'loading'
        : (
          <div>
            {news.news.articles.map((v, i) => (
              <NewsList key={`${v.title + i}`}>
                <ImgDiv>
                  <NewsImg src={v.urlToImage} alt="" />
                </ImgDiv>
                <ContentDiv>
                  <Title>{v.title}</Title>
                  <Description>{v.description}</Description>
                </ContentDiv>
              </NewsList>
            ))}
            <div>
              <Pagination
                totalResults={news.news.totalResults}
                currentPage={news.news.currentPage}
                onPageChange={onPageChange}
              />
            </div>
          </div>
        )}
    </Layout>
  );
};

export default Index;
