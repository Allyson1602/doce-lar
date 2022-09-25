import styled from "@emotion/styled";
import { Container, Stack, Typography } from "@mui/material";
import { ITheme } from "../../themes/themes";

export const FilterStyled = styled(Container)`
    background: ${props => (props.theme as ITheme).palette.secondary.main};
`;

export const TitleStyled = styled(Typography)`
    color: ${props => (props.theme as ITheme).palette.common.white};
`;

export const ChipsStyled = styled(Stack)`
    flex-direction: row;
    justify-content: space-around;
    gap: 3px;

    .MuiChip-root {
        color: ${props => (props.theme as ITheme).palette.common.white};
        border: 1px solid ${props => (props.theme as ITheme).palette.common.white};
    }
`;
