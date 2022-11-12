import { Box, Button, Chip, Container, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Paper, Select, Slider, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FormEvent, ReactElement, useState } from "react";
import { TypeColorFooter } from "../../components/globals/footer";
import NavBar from "../../components/globals/navBar";
import Layout from "../../components/layout";
import { ButtonSubmitImmobileStyled, ChipsStyled, FieldGroupStyled } from "../../styles/pages/rent/new";
import { NextPageWithLayout } from "../_app";

interface Fields {
    // firstName: string;
}

const RegisterRent: NextPageWithLayout = () => {

    // const [lastName, setLastName] = useState("");

    // const validate = (values: any) => {
    //     return {};
    // };

    const onSubmit = (values: Fields) => {
        console.log(values);
    };
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // onSubmit();
    };

    const goBackRentals = () => {

    };

    return (
        <Container>
            <Button
                sx={{mt: 2}}
                color="secondary"
                onClick={goBackRentals}
                variant="outlined"
                size="small"
            >voltar</Button>

            <form onSubmit={handleSubmit}>
                <FieldGroupStyled container rowGap={2}>
                    <Grid item xs={12}>
                        {/* Criar theme para Typography A */}
                        <Typography>Informações do aluguel</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            size="small"
                            label="Título do aluguel"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                            // value={age}
                            // onChange={handleChange}
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <FormControl fullWidth size="small">
                            <InputLabel
                                id="immobile-type-label"
                                shrink
                                className="fields__type_immobile"
                            >Tipo do imóvel</InputLabel>
                            <Select
                                labelId="immobile-type-label"
                                label="Tipo do imóvel"
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
                    </Grid>
                    
                    <Grid container item xs={12} className="fields__images">
                        <Grid item xs={12}>
                            {/* Criar theme para Typography A */}
                            <Typography>Imagens</Typography>
                        </Grid>

                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={4}>
                                <Paper elevation={1} sx={{width: "100%", height: "100px"}} />
                            </Grid>
                            
                            <Grid item xs={4}>
                                <Paper elevation={1} sx={{width: "100%", height: "100px"}} />
                            </Grid>
                            
                            <Grid item xs={4}>
                                <Paper elevation={1} sx={{width: "100%", height: "100px"}} />
                            </Grid>
                            
                            <Grid item xs={4}>
                                <Paper elevation={1} sx={{width: "100%", height: "100px"}} />
                            </Grid>
                            
                            <Grid item xs={4}>
                                <Paper elevation={1} sx={{width: "100%", height: "100px"}} />
                            </Grid>
                            
                            <Grid item xs={4}>
                                <Paper elevation={1} sx={{width: "100%", height: "100px"}} />
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    <Grid container item columnSpacing={1}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                size="small"
                                label="Valor total"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">R$</InputAdornment>
                                }}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                size="small"
                                label="Dimensões"
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">m²</InputAdornment>
                                }}
                            />
                        </Grid>
                    </Grid>
                </FieldGroupStyled>

                <FieldGroupStyled container rowGap={2}>
                    <Grid item xs={12}>
                        {/* Criar theme para Typography A */}
                        <Typography>Local</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            size="small"
                            label="CEP"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            size="small"
                            label="Endereço"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            size="small"
                            label="Cidade"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                </FieldGroupStyled>

                <FieldGroupStyled container>
                    <Grid item xs={12}>
                        {/* Criar theme para Typography A */}
                        <Typography>Características do imóvel</Typography>
                    </Grid>

                    <ChipsStyled item gap={0.5}>
                        <Chip
                            label="mobiliado"
                            className="features__chip"
                            // variant={filters.furnished ? "filled" : "outlined"}
                            // onClick={handleClickFurnished}
                        />
                        <Chip
                            label="churrasqueira"
                            className="features__chip"
                            // variant={filters.barbecue ? "filled" : "outlined"}
                            // onClick={handleClickBarbecue}
                        />
                        <Chip
                            label="piscina"
                            className="features__chip"
                            // variant={filters.swimmingPool ? "filled" : "outlined"}
                            // onClick={handleClickSwimmingPool}
                        />
                        <Chip
                            label="varanda"
                            className="features__chip"
                            // variant={filters.porch ? "filled" : "outlined"}
                            // onClick={handleClickPorch}
                        />
                        <Chip
                            label="jardim"
                            className="features__chip"
                            // variant={filters.garden ? "filled" : "outlined"}
                            // onClick={handleClickGarden}
                        />
                        <Chip
                            label="ar-condicionado"
                            className="features__chip"
                            // variant={filters.airconditioning ? "filled" : "outlined"}
                            // onClick={handleClickAirconditioning}
                        />
                        <Chip
                            label="animais"
                            className="features__chip"
                            // variant={filters.animals ? "filled" : "outlined"}
                            // onClick={handleClickAnimals}
                        />
                        <Chip
                            label="internet"
                            className="features__chip"
                            // variant={filters.internet ? "filled" : "outlined"}
                            // onClick={handleClickInternet}
                        />
                        <Chip
                            label="seguro"
                            className="features__chip"
                            // variant={filters.security ? "filled" : "outlined"}
                            // onClick={handleClickSecurity}
                        />
                        <Chip
                            label="crianças"
                            className="features__chip"
                            // variant={filters.kids ? "filled" : "outlined"}
                            // onClick={handleClickKids}
                        />
                        <Chip
                            label="garagem"
                            className="features__chip"
                            // variant={filters.garage ? "filled" : "outlined"}
                            // onClick={handleClickGarage}
                        />
                    </ChipsStyled>

                    <Grid item xs={12} className="fields__bathrooms">
                        {/* Criar theme para Typography B */}
                        <Typography>Quantidade de banheiros:</Typography>
                        <Slider
                            // value={bathrooms}
                            // onChange={handleChangeBathrooms}
                            // marks={sliderMarksBathroom}
                            step={20}
                            color="secondary"
                        />
                    </Grid>

                    
                    <Grid item xs={12} className="fields__floor_immobile">
                        {/* Criar theme para Typography B */}
                        <Typography>Andar do imóvel:</Typography>
                        <Slider
                            // value={immobile}
                            // onChange={handleChangeImmobile}
                            // marks={sliderMarksImmobile}
                            step={10}
                            color="secondary"
                        />
                    </Grid>
                    
                    <Grid item xs={12} className="fields__vacancy_car">
                        {/* Criar theme para Typography B */}
                        <Typography>Vaga para carro:</Typography>
                        <Slider
                            // value={vacancyCar}
                            // onChange={handleChangeVacancyCar}
                            // marks={sliderMarksVacancyCar}
                            step={20}
                            color="secondary"
                        />
                    </Grid>
                    
                    <Grid item xs={12} className="fields__people">
                        {/* Criar theme para Typography B */}
                        <Typography>Quantidade pessoas:</Typography>
                        <Slider
                            // value={people}
                            // onChange={handleChangePeople}
                            // marks={sliderMarksPeople}
                            step={10}
                            color="secondary"
                        />
                    </Grid>
                    
                    <Grid item xs={12} className="fields__rooms">
                        {/* Criar theme para Typography B */}
                        <Typography>Quantidade quartos:</Typography>
                        <Slider
                            // value={rooms}
                            // onChange={handleChangeRooms}
                            // marks={sliderMarksRooms}
                            step={20}
                            color="secondary"
                        />
                    </Grid>
                </FieldGroupStyled>

                <FieldGroupStyled container rowGap={2}>
                    <Grid item xs={12}>
                        {/* Criar theme para Typography A */}
                        <Typography>Suas informações</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            size="small"
                            fullWidth
                            label="Nome"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            size="small"
                            fullWidth
                            label="Sobrenome"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <TextField
                            size="small"
                            fullWidth
                            label="Data de nascimento"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                </FieldGroupStyled>

                <FieldGroupStyled container rowGap={2}>
                    <Grid item xs={12}>
                        {/* Criar theme para Typography A */}
                        <Typography>Contato</Typography>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <TextField
                            size="small"
                            fullWidth
                            label="Celular/WhatsApp"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <TextField
                            size="small"
                            fullWidth
                            label="Email"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                </FieldGroupStyled>

                <Box>
                    <ButtonSubmitImmobileStyled
                        className="form__submit_immobile"
                        variant="contained"
                        fullWidth
                        color="secondary"
                    >Cadastrar imóvel</ButtonSubmitImmobileStyled>
                </Box>
            </form>
        </Container>
    );
};

RegisterRent.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <>
        <NavBar rent={false} title="cadastro de aluguel" />
        {page}
      </>
    </Layout>
  );
}

export default RegisterRent;