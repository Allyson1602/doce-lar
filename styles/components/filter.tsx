import styled from "@emotion/styled";
import { Box, Button, Container, Dialog, Stack, Typography } from "@mui/material";
import { ITheme } from "../../themes/themes";

export const FilterStyled = styled(Container)``;

export const TitleStyled = styled(Typography)`
    color: ${props => (props.theme as ITheme).palette.common.white};
    margin-bottom: ${props => (props.theme as ITheme).spacing(1)};
`;

export const DialogStyled = styled(Dialog)`

`;

export const ContentDialogStyled = styled(Box)`
    background-color: ${props => (props.theme as ITheme).palette.secondary.light};
    padding: ${props => (props.theme as ITheme).spacing(0, 4)};
`;

export const DialogChipsStyled = styled(Stack)`
    flex-direction: row;
    max-width: 100vw;
    flex-wrap: wrap;
    gap: ${props => (props.theme as ITheme).spacing(1)};
    margin-top: ${props => (props.theme as ITheme).spacing(6)};
    margin-bottom: ${props => (props.theme as ITheme).spacing(2)};

    .MuiChip-root {
        cursor: pointer;
    }
    
    .MuiChip-filled {
        color: ${props => (props.theme as ITheme).palette.common.white};
        background-color: ${props => (props.theme as ITheme).palette.secondary.main};
        border: 1px solid transparent;
        
        :hover {
            opacity: 0.8;
        };
    };

    .MuiChip-outlined {
        color: ${props => (props.theme as ITheme).palette.secondary.main};
        border: 1px solid ${props => (props.theme as ITheme).palette.secondary.main};
    };
`;

export const DialogSlidersStyled = styled(Stack)`

`;

export const DialogBoxSliderStyled = styled(Box)`
    margin-top: ${props => (props.theme as ITheme).spacing(2)};
`;

export const DialogTextInputsStyled = styled(Stack)`
    margin: ${props => (props.theme as ITheme).spacing(4, 0)};
    gap: ${props => (props.theme as ITheme).spacing(2)};
`;

export const DialogBoxTextStyled = styled(Box)`
    #immobile-type-label {
        font-size: 12px;
        top: -4px;
    };

    .MuiTextField-root, .MuiFormControl-root {
        background: #FFFFFFAA;
    };
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

    .filter__more-chip {
        background-color: ${props => (props.theme as ITheme).palette.secondary.light};
        color: ${props => (props.theme as ITheme).palette.common.black};
    };
`;

export const GroupButtonsStyled = styled(Stack)`
    justify-content: space-between;
    margin-bottom: ${props => (props.theme as ITheme).spacing(3)};
`;

export const ButtonStyled = styled(Button)`

    :last-child {
        color: ${props => (props.theme as ITheme).palette.common.white};
    }
`;
