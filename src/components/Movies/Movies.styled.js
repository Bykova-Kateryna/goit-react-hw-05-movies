import styled from 'styled-components';

export const SearchMovieForm = styled.form`
  display: flex;
  align-items: center;
  max-width: 400px;
  background-color: transparent;
  border-radius: 3px;
  margin-top: 24px;
  margin-bottom: 24px;
  margin-left: 15px;
`;

export const SearchMovieBtn = styled.button`
  display: inline-block;
  cursor: pointer;
  height: 27px;
  margin-left: 15px;
  border: 2px, solid, #abb4be;

  &:hover {
    background-color: #2384f5;
    color: #fff;
    border: 2px, solid, #abb4be;
  }
`;

export const SearchMovieInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 14px;
  padding-left: 4px;
  padding-right: 4px;
`;
