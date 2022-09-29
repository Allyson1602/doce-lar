import { Chip, Dialog, FormControl, IconButton, InputLabel, MenuItem, Select, Slider, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { DataFilter } from "../interfaces/filter";
import { DialogBoxSliderStyled, ChipsStyled, DialogChipsStyled, FilterStyled, DialogSlidersStyled, TitleStyled, DialogTextInputsStyled, DialogBoxTextStyled } from "../styles/components/filter";
import CloseIcon from '@mui/icons-material/Close';
import { Stack } from "@mui/system";

interface FilterProps {
    filters: DataFilter;
    setFilters: (filters: DataFilter) => void;
}

const Filter: FC<FilterProps> = (props) => {

    const [filters] = useState(props.filters);
    const [open, setOpen] = useState(false);

    const [bathrooms, setBathrooms] = useState(0);
    const [immobile, setImmobile] = useState(0);
    const [vacancyCar, setVacancyCar] = useState(0);
    const [people, setPeople] = useState(0);
    const [rooms, setRooms] = useState(0);

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
    
    const handleClickFurnished = () => {
        let changeFilters = filters;
        changeFilters.furnished = !changeFilters.furnished;

        props.setFilters(changeFilters);
    };
    
    const handleClickBarbecue = () => {
        let changeFilters = filters;
        changeFilters.barbecue = !changeFilters.barbecue;

        props.setFilters(changeFilters);
    };
    
    const handleClickSwimmingPool = () => {
        let changeFilters = filters;
        changeFilters.swimmingPool = !changeFilters.swimmingPool;

        props.setFilters(changeFilters);
    };
    
    const handleClickPorch = () => {
        let changeFilters = filters;
        changeFilters.porch = !changeFilters.porch;

        props.setFilters(changeFilters);
    };
    
    const handleClickGarden = () => {
        let changeFilters = filters;
        changeFilters.garden = !changeFilters.garden;

        props.setFilters(changeFilters);
    };
    
    const handleClickAirconditioning = () => {
        let changeFilters = filters;
        changeFilters.airconditioning = !changeFilters.airconditioning;

        props.setFilters(changeFilters);
    };
    
    const handleClickInternet = () => {
        let changeFilters = filters;
        changeFilters.internet = !changeFilters.internet;

        props.setFilters(changeFilters);
    };
    
    const handleClickSecurity = () => {
        let changeFilters = filters;
        changeFilters.security = !changeFilters.security;

        props.setFilters(changeFilters);
    };

    const handleChangeBathrooms = (event: Event, value: number | number[], activeThumb: number) => {
        setBathrooms(value as number);
        
        let changeFilters = filters;

        switch(value) {
            case 0:
                changeFilters.bathrooms = 0;
                break;

            case 20:
                changeFilters.bathrooms = 1;
                break;

            case 40:
                changeFilters.bathrooms = 2;
                break;

            case 60:
                changeFilters.bathrooms = 3;
                break;

            case 80:
                changeFilters.bathrooms = 4;
                break;

            case 100:
                changeFilters.bathrooms = 5;
                break;
        }

        props.setFilters(changeFilters);
    };

    const handleChangeImmobile = (event: Event, value: number | number[], activeThumb: number) => {
        setImmobile(value as number);
        
        let changeFilters = filters;

        switch(value) {
            case 0:
                changeFilters.floorImmobile = 0;
                break;

            case 10:
                changeFilters.floorImmobile = 1;
                break;

            case 20:
                changeFilters.floorImmobile = 2;
                break;

            case 30:
                changeFilters.floorImmobile = 3;
                break;

            case 40:
                changeFilters.floorImmobile = 4;
                break;

            case 50:
                changeFilters.floorImmobile = 5;
                break;

            case 60:
                changeFilters.floorImmobile = 6;
                break;

            case 70:
                changeFilters.floorImmobile = 7;
                break;

            case 80:
                changeFilters.floorImmobile = 8;
                break;

            case 90:
                changeFilters.floorImmobile = 9;
                break;

            case 100:
                changeFilters.floorImmobile = 10;
                break;
        }

        props.setFilters(changeFilters);
    };

    const handleChangeVacancyCar = (event: Event, value: number | number[], activeThumb: number) => {
        setVacancyCar(value as number);
        
        let changeFilters = filters;

        switch(value) {
            case 0:
                changeFilters.vacancyCar = 0;
                break;

            case 20:
                changeFilters.vacancyCar = 1;
                break;

            case 40:
                changeFilters.vacancyCar = 2;
                break;

            case 60:
                changeFilters.vacancyCar = 3;
                break;

            case 80:
                changeFilters.vacancyCar = 4;
                break;

            case 100:
                changeFilters.vacancyCar = 5;
                break;
        }

        props.setFilters(changeFilters);
    };

    const handleChangePeople = (event: Event, value: number | number[], activeThumb: number) => {
        setPeople(value as number);
        
        let changeFilters = filters;

        switch(value) {
            case 0:
                changeFilters.people = 0;
                break;

            case 20:
                changeFilters.people = 1;
                break;

            case 40:
                changeFilters.people = 2;
                break;

            case 60:
                changeFilters.people = 3;
                break;

            case 80:
                changeFilters.people = 4;
                break;

            case 100:
                changeFilters.people = 5;
                break;
        }

        props.setFilters(changeFilters);
    };

    const handleChangeRooms = (event: Event, value: number | number[], activeThumb: number) => {
        setRooms(value as number);
        
        let changeFilters = filters;

        switch(value) {
            case 0:
                changeFilters.rooms = 0;
                break;

            case 20:
                changeFilters.rooms = 1;
                break;

            case 40:
                changeFilters.rooms = 2;
                break;

            case 60:
                changeFilters.rooms = 3;
                break;

            case 80:
                changeFilters.rooms = 4;
                break;

            case 100:
                changeFilters.rooms = 5;
                break;
        }

        props.setFilters(changeFilters);
    };

    const handleClickMoreFilters = () => {
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };

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

            <Dialog open={open} fullScreen>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleCloseDialog}
                >
                    <CloseIcon />
                </IconButton>

                <DialogChipsStyled>
                    <Chip
                        size="small"
                        label="furnished"
                        variant={filters.furnished ? "outlined" : "filled"}
                        onClick={handleClickFurnished}
                    />
                    <Chip
                        size="small"
                        label="barbecue"
                        variant={filters.barbecue ? "outlined" : "filled"}
                        onClick={handleClickBarbecue}
                    />
                    <Chip
                        size="small"
                        label="swimmingPool"
                        variant={filters.swimmingPool ? "outlined" : "filled"}
                        onClick={handleClickSwimmingPool}
                    />
                    <Chip
                        size="small"
                        label="porch"
                        variant={filters.porch ? "outlined" : "filled"}
                        onClick={handleClickPorch}
                    />
                    <Chip
                        size="small"
                        label="garden"
                        variant={filters.garden ? "outlined" : "filled"}
                        onClick={handleClickGarden}
                    />
                    <Chip
                        size="small"
                        label="airconditioning"
                        variant={filters.airconditioning ? "outlined" : "filled"}
                        onClick={handleClickAirconditioning}
                    />
                    <Chip
                        size="small"
                        label="internet"
                        variant={filters.internet ? "outlined" : "filled"}
                        onClick={handleClickInternet}
                    />
                    <Chip
                        size="small"
                        label="security"
                        variant={filters.security ? "outlined" : "filled"}
                        onClick={handleClickSecurity}
                    />
                </DialogChipsStyled>

                <DialogSlidersStyled>
                    <DialogBoxSliderStyled>
                        <Typography>Quantidade de banheiros:</Typography>
                        <Slider
                            value={bathrooms}
                            onChange={handleChangeBathrooms}
                            marks={sliderMarksBathroom}
                            step={20}
                        />
                    </DialogBoxSliderStyled>
                    
                    <DialogBoxSliderStyled>
                        <Typography>Andar do imóvel:</Typography>
                        <Slider
                            value={immobile}
                            onChange={handleChangeImmobile}
                            marks={sliderMarksImmobile}
                            step={10}
                        />
                    </DialogBoxSliderStyled>
                    
                    <DialogBoxSliderStyled>
                        <Typography>Vaga para carro:</Typography>
                        <Slider
                            value={vacancyCar}
                            onChange={handleChangeVacancyCar}
                            marks={sliderMarksVacancyCar}
                            step={20}
                        />
                    </DialogBoxSliderStyled>
                    
                    <DialogBoxSliderStyled>
                        <Typography>Quantidade pessoas:</Typography>
                        <Slider
                            value={people}
                            onChange={handleChangePeople}
                            marks={sliderMarksPeople}
                            step={10}
                        />
                    </DialogBoxSliderStyled>
                    
                    <DialogBoxSliderStyled>
                        <Typography>Quantidade quartos:</Typography>
                        <Slider
                            value={rooms}
                            onChange={handleChangeRooms}
                            marks={sliderMarksRooms}
                            step={20}
                        />
                    </DialogBoxSliderStyled>
                </DialogSlidersStyled>

                <DialogTextInputsStyled>
                    <DialogBoxTextStyled>
                        <TextField label="Nome anunciante:" InputLabelProps={{shrink: true}} size="small" />
                    </DialogBoxTextStyled>

                    <FormControl fullWidth>
                        <InputLabel id="immobile-type-label" shrink>Tipo imóvel:</InputLabel>
                        <Select
                            size="small"
                            labelId="immobile-type-label"
                            label="Tipo imóvel:"
                            // value={age}
                            // onChange={handleChange}
                        >
                            <MenuItem value="apartment">Apartamento</MenuItem>
                            <MenuItem value="house">Casa</MenuItem>
                            <MenuItem value="store">Loja</MenuItem>
                            <MenuItem value="garage">Garagem</MenuItem>
                            <MenuItem value="kitnet">Kitnet</MenuItem>
                            <MenuItem value="lot/land">Lote/Terreno</MenuItem>
                            <MenuItem value="livingRoom">Sala</MenuItem>
                        </Select>
                    </FormControl>
                    
                    <Stack>
                        <DialogBoxTextStyled>
                            <TextField label="Área mínima:" InputLabelProps={{shrink: true}} size="small" />
                        </DialogBoxTextStyled>
                        
                        <DialogBoxTextStyled>
                            <TextField label="Área máxima:" InputLabelProps={{shrink: true}} size="small" />
                        </DialogBoxTextStyled>
                    </Stack>
                    
                    <Stack>
                        <DialogBoxTextStyled>
                            <TextField label="Valor mínimo:" InputLabelProps={{shrink: true}} size="small" />
                        </DialogBoxTextStyled>
                        
                        <DialogBoxTextStyled>
                            <TextField label="Valor máximo:" InputLabelProps={{shrink: true}} size="small" />
                        </DialogBoxTextStyled>
                    </Stack>
                </DialogTextInputsStyled>
            </Dialog>
        </FilterStyled>
    );
};

let sliderMarksRooms = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 20,
      label: '1',
    },
    {
      value: 40,
      label: '2',
    },
    {
      value: 60,
      label: '3',
    },
    {
      value: 80,
      label: '4',
    },
    {
      value: 100,
      label: '5',
    },
];

let sliderMarksPeople = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 10,
      label: '1',
    },
    {
      value: 20,
      label: '2',
    },
    {
      value: 30,
      label: '3',
    },
    {
      value: 40,
      label: '4',
    },
    {
      value: 50,
      label: '5',
    },
    {
      value: 60,
      label: '6',
    },
    {
      value: 70,
      label: '7',
    },
    {
      value: 80,
      label: '8',
    },
    {
      value: 90,
      label: '9',
    },
    {
      value: 100,
      label: '10',
    },
];

let sliderMarksVacancyCar = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 20,
      label: '1',
    },
    {
      value: 40,
      label: '2',
    },
    {
      value: 60,
      label: '3',
    },
    {
      value: 80,
      label: '4',
    },
    {
      value: 100,
      label: '5',
    },
];

let sliderMarksImmobile = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 10,
      label: '1',
    },
    {
      value: 20,
      label: '2',
    },
    {
      value: 30,
      label: '3',
    },
    {
      value: 40,
      label: '4',
    },
    {
      value: 50,
      label: '5',
    },
    {
      value: 60,
      label: '6',
    },
    {
      value: 70,
      label: '7',
    },
    {
      value: 80,
      label: '8',
    },
    {
      value: 90,
      label: '9',
    },
    {
      value: 100,
      label: '10',
    },
];

let sliderMarksBathroom = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 20,
      label: '1',
    },
    {
      value: 40,
      label: '2',
    },
    {
      value: 60,
      label: '3',
    },
    {
      value: 80,
      label: '4',
    },
    {
      value: 100,
      label: '5',
    },
];

export default Filter;
