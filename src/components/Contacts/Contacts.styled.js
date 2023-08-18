import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

export const StyledContact = styled.li`
  display: flex;
  align-items: center;
  font-family: inherit;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  font-weight: 600;
  color: #4d5ae5;
`;

export const StyledBtnDelete = styled.button`
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  min-width: 60px;
  justify-content: center;
  color: #ffffff;
  background-color: #4d5ae5;
  margin: 8px 0 8px auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 8px 16px;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #404bbf;
  }
`;
