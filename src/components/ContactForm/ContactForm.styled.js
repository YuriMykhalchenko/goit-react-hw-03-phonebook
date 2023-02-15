import styled from '@emotion/styled';
import { theme } from '../../utils/theme';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  font-size: ${theme.typography.text};
  margin-bottom: ${theme.space.main}px;
`;

export const Input = styled.input`
  font-size: ${theme.typography.text};
  padding: 8px 20px;
  color: ${theme.colors.text};
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: ${theme.typography.title};
  color: ${theme.colors.text};
  padding-bottom: ${theme.space.secondary}px;
  display: flex;
  flex-direction: column;
  line-height: 1.8;
`;

export const Button = styled.button`
  font-size: ${theme.typography.title};
  padding: ${theme.space.secondary}px;
  cursor: pointer;
  box-shadow: 1px 3px 5px ${theme.colors.button};
  border: none;
  border-radius: 5px;
  color: white;
  background-color: ${theme.colors.button};
  margin-top: ${theme.space.secondary}px;
  &:hover,
  &:focus {
    background-color: ${theme.colors.buttonHover};
    box-shadow: 1px 3px 5px ${theme.colors.buttonHover};
  }
`;
