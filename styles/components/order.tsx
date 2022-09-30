import styled from "@emotion/styled";
import { Container, Stack, Typography } from "@mui/material";
import { ITheme } from "../../themes/themes";

export const OrderStyled = styled(Container)``;

export const TitleStyled = styled(Typography)`
    color: ${props => (props.theme as ITheme).palette.common.white};
`;

export const ChipsStyled = styled(Stack)``;