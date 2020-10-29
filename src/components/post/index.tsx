import React from 'react';
import styled from 'styled-components';
import { ShortDescription } from './ShortDescription';
import { Title } from './Title';
import { Website } from './Website';
import { UserAndPostProps } from '../../types';

const PostWrapper = styled.div`
  text-align: left;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #e4eaef;
  border-radius: 0 0 5px 5px;

  h2 {
    font-size: 18px;
  }

  p {
    margin-bottom: 0;
  }
`;

export const Post: React.FC<UserAndPostProps> = ({ title, body, website }) => {
  return (
    <div className='col-sm-12 p-0'>
      <PostWrapper className='pl-3'>
        {title && <Title text={'Learning React? Start Small.'} />}
        {body && <ShortDescription body={body} />}

        <Website website={website} />
      </PostWrapper>
    </div>
  );
};
