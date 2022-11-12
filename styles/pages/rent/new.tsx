import styled from "@emotion/styled";
import { Grid, Button } from "@mui/material";
import { ITheme } from "../../../themes/themes";

export const FieldGroupStyled = styled(Grid)`
    background-color: ${props => (props.theme as ITheme).palette.secondary.light};
    padding: ${props => (props.theme as ITheme).spacing(2)};
    margin: ${props => (props.theme as ITheme).spacing(2, 0)};
    border-radius: 10px;

    & .fields__images {
        margin: ${props => (props.theme as ITheme).spacing(2, 0, 4, 0)};
    };
    & .fields__type_immobile {
        background: ${props => (props.theme as ITheme).palette.secondary.light};
        padding: 0 4px;
    };

    & .fields__bathrooms,
    & .fields__floor_immobile,
    & .fields__vacancy_car,
    & .fields__people,
    & .fields__rooms {
        margin: ${props => (props.theme as ITheme).spacing(1)};
    };
    
    & .form__submit_immobile {
    };
`;

export const ChipsStyled = styled(Grid)`
    display: flex;
    flex-direction: row;
    max-width: 100vw;
    flex-wrap: wrap;
    margin: ${props => (props.theme as ITheme).spacing(2, 0, 2, 0)};

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

export const ButtonSubmitImmobileStyled = styled(Button)`
    color: ${props => (props.theme as ITheme).palette.common.white};
    margin-bottom: ${props => (props.theme as ITheme).spacing(2)};
`;
