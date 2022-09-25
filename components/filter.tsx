import { Chip } from "@mui/material";
import { FC } from "react";
import { ChipsStyled, FilterStyled, TitleStyled } from "../styles/components/filter";

const Filter: FC = () => {

    return (
        <FilterStyled>
            <TitleStyled variant="subtitle2">Filtros:</TitleStyled>

            <ChipsStyled>
                <Chip size="small" label="animais" variant="outlined" />
                <Chip size="small" label="crianças" variant="outlined" />
                <Chip size="small" label="garagem" variant="outlined" />
                <Chip size="small" label="mais filtros" variant="outlined" />
            </ChipsStyled>
        </FilterStyled>
    );
}

export default Filter;
