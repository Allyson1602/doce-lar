import { Typography } from "@mui/material";
import { FC } from "react";

import { DataRentals } from "../interfaces/rentals";
import { RentDemoStyled } from "../styles/components/rentDemo";

interface RendDemoProps {
    data: DataRentals;
}

const RentDemo: FC<RendDemoProps> = ({data}) => {
    return (
        <RentDemoStyled>
            <Typography>{data.price}</Typography>
        </RentDemoStyled>
    );
};

export default RentDemo;
