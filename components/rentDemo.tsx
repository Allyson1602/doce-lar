import { FC } from "react";

import { DataRentals } from "../interfaces/rentals";
import { RentDemoStyled } from "../styles/components/rentDemo";

interface RendDemoProps {
    data: DataRentals;
}

const RentDemo: FC<RendDemoProps> = (props) => {
    return (
        <RentDemoStyled></RentDemoStyled>
    );
};

export default RentDemo;
