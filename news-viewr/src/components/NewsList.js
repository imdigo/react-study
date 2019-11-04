import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottm: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;


const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=53d9a3b51432449a827323c7a4229387`,);
  }, [category]);
  
  // 대기중일때
  if (loading) {
    return <NewsListBlock>로딩중</NewsListBlock>;
  }
  // 아직 response 값이 설정 안됐으면
  if (!response) {
    return null;
  }
  // 에러 발생
  if (error) {
    return <NewsListBlock>에러 발생함 ㅋㅋ</NewsListBlock>;
  }
  
  
  // articles 값 유효하면
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
}; 

export default NewsList;
