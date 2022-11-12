import styled from "@emotion/styled";
import { Typography, Box, Chip, Divider, Stack } from "@mui/material";
import { ITheme } from "../../../themes/themes";

export const ButtonsContactRentStyled = styled(Stack)`
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 9999;
    background: ${props => (props.theme as ITheme).palette.secondary.light};
    padding: ${props => (props.theme as ITheme).spacing(0, 1)};
    gap: ${props => (props.theme as ITheme).spacing(2)};

    .button-whatsapp {
        flex-grow: 1;
    }
`;

export const RentStyled = styled(Box)`
    position: relative;
    padding-top: ${props => (props.theme as ITheme).spacing(0.5)};
    padding-bottom: ${props => (props.theme as ITheme).spacing(5)};
    background: ${props => (props.theme as ITheme).palette.secondary.light};
`;

export const MainRentStyled = styled(Box)`
    margin: ${props => (props.theme as ITheme).spacing(2)};
`;

export const MainInfosStyled = styled(Box)`
    position: relative;
    border-radius: 15px;
    padding: ${props => (props.theme as ITheme).spacing(2)};
    padding-bottom: ${props => (props.theme as ITheme).spacing(0)};
    background: ${props => (props.theme as ITheme).palette.common.white};

    .swiper {
        border-radius: 8px;
        box-shadow: 0px 2px 8px grey;
    }
`;

export const TitleMainInfosStyled = styled(Typography)`
    text-align: center;
    font-weight: 500;
`;

export const DividerFlagStyled = styled(Box)`
    margin: ${props => (props.theme as ITheme).spacing(3, 0)};
    position: relative;
`;

export const DividerStyled = styled(Divider)`
    border-color: ${props => (props.theme as ITheme).palette.secondary.main};
`;

export const FlagRentStyled = styled(Chip)`
    position: absolute;
    right: 16px;
    top: -12px;
    color: ${props => (props.theme as ITheme).palette.common.white};
`;

export const AddressMainInfosStyled = styled(Typography)`
    display: block;
    line-height: 1.4;
    margin: ${props => (props.theme as ITheme).spacing(0, "auto")};
`;

export const ContentCarouselStyled = styled(Box)`
    height: 200px;
    margin-top: ${props => (props.theme as ITheme).spacing(2)};
`;

export const PositionCarouselStyled = styled('span')`
    position: absolute;
    height: 200px;
    width: calc(100% + ${props => (props.theme as ITheme).spacing(2)});
    left: ${props => (props.theme as ITheme).spacing(-1)};
`;

export const ViewsStyled = styled(Typography)`
    color: ${props => (props.theme as ITheme).palette.secondary.main};
    font-size: ${props => (props.theme as ITheme).typography.fontSize + -2 + "px"};
`;

export const RentDividerStyled = styled(Divider)`
    height: 50px;
    border-style: dashed;
    border-color: ${props => (props.theme as ITheme).palette.secondary.main};
`;

export const RentPlaceInfosStyled = styled(Box)`
    margin: ${props => (props.theme as ITheme).spacing(2)};
    border-top: 1px dashed ${props => (props.theme as ITheme).palette.secondary.main};
    background: ${props => (props.theme as ITheme).palette.common.white};

    .link-more-features {
        padding: ${props => (props.theme as ITheme).spacing(2, 0)};
    }
`;

export const RentPlaceInfosHeaderStyled = styled(Stack)`
    justify-content: space-around;
    align-items: center;
    padding: ${props => (props.theme as ITheme).spacing(1)};
    border-bottom: 3px solid ${props => (props.theme as ITheme).palette.secondary.light};

    svg {
        vertical-align: sub;
    }
`;

export const RentPlaceInfosBodyStyled = styled(Stack)`
    justify-content: space-around;
    padding: ${props => (props.theme as ITheme).spacing(1)};
`;

export const ContentRentDescriptionStyled = styled(Box)`
    margin: ${props => (props.theme as ITheme).spacing(2, 0)};
    margin-bottom: ${props => (props.theme as ITheme).spacing(5)};
    padding: ${props => (props.theme as ITheme).spacing(1)};
    background: ${props => (props.theme as ITheme).palette.common.white};
`;

export const TextRentDescriptionStyled = styled(Typography)`
    padding: ${props => (props.theme as ITheme).spacing(1)};
`;

export const ContentRentMapStyled = styled(Box)`
    height: 80vh;
    position: relative;
`;

export const RentGradientMapStyled = styled(Box)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 999;
    background: linear-gradient(to bottom, ${props => (props.theme as ITheme).palette.secondary.light}, #FFFFFF00, ${props => (props.theme as ITheme).palette.secondary.light});
`;
