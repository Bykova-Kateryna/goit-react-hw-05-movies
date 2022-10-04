import styled from 'styled-components';

export const ReviewsSection = styled.section`
  margin-top: 5px;
  padding: 24px 15px;
  border: 2px solid #abb4be;
`;
export const ReviewsItem = styled.li`
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  padding-top: 5px;
  padding-bottom: 10px;
  padding-left: 5px;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0px;
  }
`;
export const ReviewsItemTittle = styled.h2`
  font-size: 20px;
  padding-left: 5px;
`;
export const ReviewsItemDescription = styled.p`
  padding-left: 10px;
  margin-top: 15px;
`;
