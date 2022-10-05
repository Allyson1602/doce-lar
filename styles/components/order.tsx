import styled from "@emotion/styled";
import { Container, Stack, Typography } from "@mui/material";
import { ITheme } from "../../themes/themes";

export const OrderStyled = styled(Container)``;

export const TitleStyled = styled(Typography)`
    color: ${props => (props.theme as ITheme).palette.common.white};
    margin-bottom: ${props => (props.theme as ITheme).spacing(1)};
`;

export const ChipsStyled = styled(Stack)`
    flex-direction: row;
    justify-content: space-around;
    gap: 3px;

    .MuiChip-filled {
        background-color: ${props => (props.theme as ITheme).palette.common.white};
        color: ${props => (props.theme as ITheme).palette.secondary.main};
        border: 1px solid transparent;
        
        :hover {
            opacity: 0.8;
            background-color: ${props => (props.theme as ITheme).palette.common.white};
        };
    };

    .MuiChip-outlined {
        color: ${props => (props.theme as ITheme).palette.common.white};
        border: 1px solid ${props => (props.theme as ITheme).palette.common.white};
    };
`;