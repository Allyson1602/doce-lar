import styled from "@emotion/styled";
import { Container, Stack, Typography } from "@mui/material";
import { ITheme } from "../../themes/themes";

export const FilterStyled = styled(Container)``;

export const TitleStyled = styled(Typography)`
    color: ${props => (props.theme as ITheme).palette.common.white};
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
        };
    };

    .MuiChip-outlined {
        color: ${props => (props.theme as ITheme).palette.common.white};
        border: 1px solid ${props => (props.theme as ITheme).palette.common.white};
    };

    .filter__more-chip {
        background-color: ${props => (props.theme as ITheme).palette.secondary.light};
        color: ${props => (props.theme as ITheme).palette.common.black};
    };
`;
