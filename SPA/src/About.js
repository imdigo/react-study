import React from 'react';
import qs from 'qs';

const About = ({location}) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // 이 설정을 통해서 문자열 맨 앞의 ? 를 생략.
  });
  const showDetail = query.detail === 'true'; // 쿼리의 파싱 결과 값은 문자열
  return (
    <div>
      <h1>소개</h1>
      <p>어바웃 페이지 호출시</p>
      {showDetail && <p>쿼리 안의 detail을 true로 하고 호출하셨군요?</p>}
    </div>
  );
};

export default About;
