import { Chip } from "@mui/material";
import { FC, useState } from "react";
import { DataOrder } from "../interfaces/orders";
import { ChipsStyled, OrderStyled, TitleStyled } from "../styles/components/order";

interface OrderProps {
    orders: DataOrder;
    setOrders: (orders: DataOrder) => void;
}

const Order: FC<OrderProps> = (props) => {

    const [orders] = useState<DataOrder>(props.orders);

    const handleClickRelevance = () => {
        let changeOrders = orders;
        changeOrders.relevance = !orders.relevance;

        if(changeOrders.relevance === true) {
            changeOrders.higherPrice = false;
            changeOrders.lowestPrice = false;
        }

        props.setOrders(changeOrders);
    };

    const handleClickHigherPrice = () => {
        let changeOrders = orders;
        changeOrders.higherPrice = !orders.higherPrice;

        if(changeOrders.higherPrice === true) {
            changeOrders.relevance = false;
            changeOrders.lowestPrice = false;
        }

        props.setOrders(changeOrders);
    };

    const handleClickLowestPrice = () => {
        let changeOrders = orders;
        changeOrders.lowestPrice = !orders.lowestPrice;

        if(changeOrders.lowestPrice === true) {
            changeOrders.relevance = false;
            changeOrders.higherPrice = false;
        }

        props.setOrders(changeOrders);
    };

    return (
        <OrderStyled>
            <TitleStyled variant="body2">Ordernar por:</TitleStyled>
            
            <ChipsStyled>
                <Chip
                    size="small"
                    label="relevância"
                    variant={orders.relevance ? "filled" : "outlined"}
                    onClick={handleClickRelevance}
                />
                <Chip
                    size="small"
                    label="maior preço"
                    variant={orders.higherPrice ? "filled" : "outlined"}
                    onClick={handleClickHigherPrice}
                />
                <Chip
                    size="small"
                    label="menor preço"
                    variant={orders.lowestPrice ? "filled" : "outlined"}
                    onClick={handleClickLowestPrice}
                />
            </ChipsStyled>
        </OrderStyled>
    );
};

export default Order;