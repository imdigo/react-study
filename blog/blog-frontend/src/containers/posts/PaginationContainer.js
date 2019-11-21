import React from 'react';
import Pagination from '../../components/posts/Pagination';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

const PaginationContainer = ({ location }) => {
  const { lastPage, posts, loading } = useSelector(({ posts, loading}) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS'],
  }));
  
  // 포스트 데이터가 없거나 로딩중이면 아무것도 안보여줌
  if (!posts || loading) return null;
  
  // page가 없으면 1 기본 사용
  const { tag, username, page = 1 } = qs.parse(location.seacrh, {
    ignoreQueryPrefix: true,
  });
  
  return (
    <Pagination
      tag={tag}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default withRouter(PaginationContainer);