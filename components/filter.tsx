import { Chip } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { DataFilter } from "../interfaces/filter";
import { ChipsStyled, FilterStyled, TitleStyled } from "../styles/components/filter";

interface FilterProps {
    filters: DataFilter;
    setFilters: (filters: DataFilter) => void;
}

const Filter: FC<FilterProps> = (props) => {

    const [filters] = useState(props.filters);

    const handleClickAnimals = () => {
        let changeFilters = filters;
        changeFilters.animals = !changeFilters.animals;

        props.setFilters(changeFilters);
    };

    const handleClickKids = () => {
        let changeFilters = filters;
        changeFilters.kids = !changeFilters.kids;

        props.setFilters(changeFilters);
    };

    const handleClickGarage = () => {
        let changeFilters = filters;
        changeFilters.garage = !changeFilters.garage;

        props.setFilters(changeFilters);
    };

    const handleClickMoreFilters = () => {
        
    };

    useEffect(() => {
        console.log(filters.animals);
    }, [filters]);

    return (
        <FilterStyled className="filter">
            <TitleStyled variant="subtitle2">Filtros:</TitleStyled>

            <ChipsStyled>
                <Chip
                    size="small"
                    label="animais"
                    variant={filters.animals ? "outlined" : "filled"}
                    onClick={handleClickAnimals}
                />
                <Chip
                    size="small"
                    label="crianças"
                    variant={filters.kids ? "outlined" : "filled"}
                    onClick={handleClickKids}
                />
                <Chip
                    size="small"
                    label="garagem"
                    variant={filters.garage ? "outlined" : "filled"}
                    onClick={handleClickGarage}
                />
                <Chip
                    size="small"
                    label="mais filtros"
                    className="filter__more-chip"
                    onClick={handleClickMoreFilters}
                />
            </ChipsStyled>
        </FilterStyled>
    );
}

export default Filter;
