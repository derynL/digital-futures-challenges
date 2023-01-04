import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={476}
    height={124}
    viewBox='0 0 476 124'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='37' y='188' rx='3' ry='3' width='380' height='6' />
  </ContentLoader>
);

export default MyLoader;
