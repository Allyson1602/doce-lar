import { Chip } from "@mui/material";
import { FC, useState } from "react";
import { ChipsStyled, OrderStyled, TitleStyled } from "../styles/components/order";

interface OrderProps {
    
}

const Order: FC<OrderProps> = (props) => {
    const [orders, setOrders] = useState();

    return (
        <OrderStyled>
            <TitleStyled variant="subtitle2">Ordernar por:</TitleStyled>
            
            <ChipsStyled>
                <Chip
                    size="small"
                    label="relevância"
                    variant={filters.animals ? "filled" : "outlined"}
                    onClick={handleClickAnimals}
                />
                <Chip
                    size="small"
                    label="maior preço"
                    variant={filters.kids ? "filled" : "outlined"}
                    onClick={handleClickKids}
                />
                <Chip
                    size="small"
                    label="menor preço"
                    variant={filters.garage ? "filled" : "outlined"}
                    onClick={handleClickGarage}
                />
            </ChipsStyled>
        </OrderStyled>
    );
};

export default Order;