import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GoBackButton = styled(NavLink)`
  border: 2px solid #abb4be;
  padding: 5px;
  text-decoration: none;
  color: black;
  font-size: 16px;

  &:hover,
  &:focus {
    color: #2384f5;
  }
`;
export const MovieDetailsSection = styled.main`
  margin-top: 24px;
`;
export const MovieDetailsContainer = styled.section`
  margin-top: 15px;
  display: flex;
`;
export const MovieDetailsInfo = styled.div`
  margin-left: 15px;
`;
export const MovieDetailsInfoTittle = styled.h2`
  margin-bottom: 15px;
  margin-top: 15px;
`;
export const MovieDetailsInfoOverviewTittle = styled.h3`
  margin-bottom: 15px;
  margin-top: 15px;
`;
export const MovieDetailsInfoGenresTittle = styled.h4`
  margin-bottom: 15px;
  margin-top: 15px;
`;
export const MovieAdditionalInfo = styled.div`
  margin-top: 5px;
  padding: 24px 15px;
  border: 2px solid #abb4be;
`;
export const MovieAdditionalInfoList = styled.ul`
  margin-top: 24px;
  padding-left: 15px;
`;
