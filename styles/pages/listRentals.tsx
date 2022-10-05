import styled from "@emotion/styled";
import { Stack, Box } from "@mui/material";
import { ITheme } from "../../themes/themes";

export const ListRentalsStyled = styled(Box)`
  background: ${props => (props.theme as ITheme).palette.secondary.main};
`;

export const ConfigsGetRentalsStyled = styled(Stack)`
  padding: ${props => (props.theme as ITheme).spacing(3, 0)};
  gap: ${props => (props.theme as ITheme).spacing(2)};
`;

export const TitleStyled = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
