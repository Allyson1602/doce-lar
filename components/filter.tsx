import { Chip, FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, Slider, TextField, Typography } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { DataFilter } from "../interfaces/filter";
import { DialogBoxSliderStyled, ChipsStyled, DialogChipsStyled, FilterStyled, DialogSlidersStyled, TitleStyled, DialogTextInputsStyled, DialogBoxTextStyled, DialogStyled, ContentDialogStyled, ButtonStyled, GroupButtonsStyled } from "../styles/components/filter";
import CloseIcon from '@mui/icons-material/Close';
import { Stack } from "@mui/system";

interface FilterProps {
    filters: DataFilter;
    setFilters: (filters: DataFilter) => void;
}

const Filter: FC<FilterProps> = (props) => {

    const [filters, setFilters] = useState<DataFilter>(props.filters);
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

        setFilters({...changeFilters});
    };
    
    const handleClickBarbecue = () => {
        let changeFilters = filters;
        changeFilters.barbecue = !changeFilters.barbecue;

        setFilters({...changeFilters});
    };
    
    const handleClickSwimmingPool = () => {
        let changeFilters = filters;
        changeFilters.swimmingPool = !changeFilters.swimmingPool;

        setFilters({...changeFilters});
    };
    
    const handleClickPorch = () => {
        let changeFilters = filters;
        changeFilters.porch = !changeFilters.porch;

        setFilters({...changeFilters});
    };
    
    const handleClickGarden = () => {
        let changeFilters = filters;
        changeFilters.garden = !changeFilters.garden;

        setFilters({...changeFilters});
    };
    
    const handleClickAirconditioning = () => {
        let changeFilters = filters;
        changeFilters.airconditioning = !changeFilters.airconditioning;

        setFilters({...changeFilters});
    };
    
    const handleClickInternet = () => {
        let changeFilters = filters;
        changeFilters.internet = !changeFilters.internet;

        setFilters({...changeFilters});
    };
    
    const handleClickSecurity = () => {
        let changeFilters = filters;
        changeFilters.security = !changeFilters.security;

        setFilters({...changeFilters});
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

        setFilters({...changeFilters});
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

        setFilters({...changeFilters});
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

        setFilters({...changeFilters});
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

        setFilters({...changeFilters});
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

        setFilters({...changeFilters});
    };

    const handleChangeImmobileType = (event: SelectChangeEvent<string>) => {
        let changeFilters = filters;
        changeFilters.immobileType = event.target.value;

        setFilters({...changeFilters});
    };

    const handleChangeAdvertiserName = (event: ChangeEvent<HTMLInputElement>) => {
        let changeFilters = filters;
        changeFilters.advertiserName = event.target.value;

        setFilters({...changeFilters});
    };

    const handleChangeMinimumArea = (event: ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(event.target.value);

        if(!isNaN(value)) {
            let changeFilters = filters;
            changeFilters.minimumArea = value;

            setFilters({...changeFilters});
        }
    };

    const handleChangeMaximumArea = (event: ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(event.target.value);
        
        if(!isNaN(value)) {
            let changeFilters = filters;
            changeFilters.maximumArea = value;

            setFilters({...changeFilters});
        }
    };

    const handleChangeMinimumValue = (event: ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(event.target.value);
        
        if(!isNaN(value)) {
            let changeFilters = filters;
            changeFilters.minimumValue = value;

            setFilters({...changeFilters});
        }
    };

    const handleChangeMaximumValue = (event: ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(event.target.value);
        
        if(!isNaN(value)) {
            let changeFilters = filters;
            changeFilters.maximumValue = value;

            setFilters({...changeFilters});
        }
    };

    const handleClickMoreFilters = () => {
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };

    const handleClickChangeFilter = () => {
        changeFilters();
        setOpen(false);
    };

    const changeFilters = () => {
        props.setFilters(filters);
    }

    return (
        <FilterStyled className="filter">
            <TitleStyled variant="subtitle2">Filtros:</TitleStyled>

            <ChipsStyled>
                <Chip
                    size="small"
                    label="animais"
                    variant={filters.animals ? "filled" : "outlined"}
                    onClick={handleClickAnimals}
                />
                <Chip
                    size="small"
                    label="crianças"
                    variant={filters.kids ? "filled" : "outlined"}
                    onClick={handleClickKids}
                />
                <Chip
                    size="small"
                    label="garagem"
                    variant={filters.garage ? "filled" : "outlined"}
                    onClick={handleClickGarage}
                />
                <Chip
                    size="small"
                    label="mais filtros"
                    className="filter__more-chip"
                    onClick={handleClickMoreFilters}
                />
            </ChipsStyled>

            <DialogStyled open={open} fullScreen>
                <ContentDialogStyled>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={handleCloseDialog}
                        sx={{
                        position: 'absolute',
                        right: 15,
                        top: 5,
                        color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <DialogChipsStyled>
                        <Chip
                            label="mobiliado"
                            className="dialog__chip"
                            variant={filters.furnished ? "filled" : "outlined"}
                            onClick={handleClickFurnished}
                        />
                        <Chip
                            label="churrasqueira"
                            className="dialog__chip"
                            variant={filters.barbecue ? "filled" : "outlined"}
                            onClick={handleClickBarbecue}
                        />
                        <Chip
                            label="piscina"
                            className="dialog__chip"
                            variant={filters.swimmingPool ? "filled" : "outlined"}
                            onClick={handleClickSwimmingPool}
                        />
                        <Chip
                            label="varanda"
                            className="dialog__chip"
                            variant={filters.porch ? "filled" : "outlined"}
                            onClick={handleClickPorch}
                        />
                        <Chip
                            label="jardim"
                            className="dialog__chip"
                            variant={filters.garden ? "filled" : "outlined"}
                            onClick={handleClickGarden}
                        />
                        <Chip
                            label="ar-condicionado"
                            className="dialog__chip"
                            variant={filters.airconditioning ? "filled" : "outlined"}
                            onClick={handleClickAirconditioning}
                        />
                        <Chip
                            label="internet"
                            className="dialog__chip"
                            variant={filters.internet ? "filled" : "outlined"}
                            onClick={handleClickInternet}
                        />
                        <Chip
                            label="seguro"
                            className="dialog__chip"
                            variant={filters.security ? "filled" : "outlined"}
                            onClick={handleClickSecurity}
                        />
                    </DialogChipsStyled>

                    <DialogSlidersStyled>
                        <DialogBoxSliderStyled>
                            <Typography variant="body2">Quantidade de banheiros:</Typography>
                            <Slider
                                value={bathrooms}
                                onChange={handleChangeBathrooms}
                                marks={sliderMarksBathroom}
                                step={20}
                                color="secondary"
                            />
                        </DialogBoxSliderStyled>
                        
                        <DialogBoxSliderStyled>
                            <Typography variant="body2">Andar do imóvel:</Typography>
                            <Slider
                                value={immobile}
                                onChange={handleChangeImmobile}
                                marks={sliderMarksImmobile}
                                step={10}
                                color="secondary"
                            />
                        </DialogBoxSliderStyled>
                        
                        <DialogBoxSliderStyled>
                            <Typography variant="body2">Vaga para carro:</Typography>
                            <Slider
                                value={vacancyCar}
                                onChange={handleChangeVacancyCar}
                                marks={sliderMarksVacancyCar}
                                step={20}
                                color="secondary"
                            />
                        </DialogBoxSliderStyled>
                        
                        <DialogBoxSliderStyled>
                            <Typography variant="body2">Quantidade pessoas:</Typography>
                            <Slider
                                value={people}
                                onChange={handleChangePeople}
                                marks={sliderMarksPeople}
                                step={10}
                                color="secondary"
                            />
                        </DialogBoxSliderStyled>
                        
                        <DialogBoxSliderStyled>
                            <Typography variant="body2">Quantidade quartos:</Typography>
                            <Slider
                                value={rooms}
                                onChange={handleChangeRooms}
                                marks={sliderMarksRooms}
                                step={20}
                                color="secondary"
                            />
                        </DialogBoxSliderStyled>
                    </DialogSlidersStyled>

                    <DialogTextInputsStyled>
                        <DialogBoxTextStyled>
                            <TextField
                                label="Nome anunciante:"
                                value={filters.advertiserName}
                                onChange={handleChangeAdvertiserName}
                                size="small"
                                color="secondary"
                                InputLabelProps={{shrink: true}}
                                fullWidth
                            />
                        </DialogBoxTextStyled>

                        <DialogBoxTextStyled>
                            <FormControl fullWidth color="secondary">
                                <InputLabel id="immobile-type-label">Tipo imóvel:</InputLabel>
                                <Select
                                    size="small"
                                    labelId="immobile-type-label"
                                    label="Tipo imóvel:"
                                    value={filters.immobileType}
                                    onChange={handleChangeImmobileType}
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
                        </DialogBoxTextStyled>
                        
                        <Stack direction="row" gap={2}>
                            <DialogBoxTextStyled>
                                <TextField
                                    label="Área mínima:"
                                    value={filters.minimumArea || ""}
                                    onChange={handleChangeMinimumArea}
                                    size="small"
                                    color="secondary"
                                    InputLabelProps={{shrink: true}}
                                />
                            </DialogBoxTextStyled>
                            
                            <DialogBoxTextStyled>
                                <TextField
                                    label="Área máxima:"
                                    value={filters.maximumArea || ""}
                                    onChange={handleChangeMaximumArea}
                                    size="small"
                                    color="secondary"
                                    InputLabelProps={{shrink: true}}
                                />
                            </DialogBoxTextStyled>
                        </Stack>
                        
                        <Stack direction="row" gap={2}>
                            <DialogBoxTextStyled>
                                <TextField
                                    label="Valor mínimo:"
                                    value={filters.minimumValue || ""}
                                    onChange={handleChangeMinimumValue}
                                    size="small"
                                    color="secondary"
                                    InputLabelProps={{shrink: true}}
                                />
                            </DialogBoxTextStyled>
                            
                            <DialogBoxTextStyled>
                                <TextField
                                    label="Valor máximo:"
                                    value={filters.maximumValue || ""}
                                    onChange={handleChangeMaximumValue}
                                    size="small"
                                    color="secondary"
                                    InputLabelProps={{shrink: true}}
                                />
                            </DialogBoxTextStyled>
                        </Stack>
                    </DialogTextInputsStyled>

                    <GroupButtonsStyled direction="row">
                        <ButtonStyled
                            sx={{opacity: 0}}
                            variant="outlined"
                            color="secondary"
                            size="large"
                        >limpar</ButtonStyled>

                        <ButtonStyled
                            variant="contained"
                            color="secondary"
                            size="large"
                            onClick={handleClickChangeFilter}
                        >filtrar</ButtonStyled>
                    </GroupButtonsStyled>
                </ContentDialogStyled>
            </DialogStyled>
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
