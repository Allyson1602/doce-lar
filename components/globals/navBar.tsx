import { FC } from "react";
import { Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import { NavBarStyled } from "../../styles/components/globals/navBar";

interface NavBarProps {
    rent?: boolean;
    title?: string;
    // menu: boolean;
}

const NavBar: FC<NavBarProps> = ({ rent, title }) => {
    const rentButton = rent || true;

    return (
        <NavBarStyled>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>

                <Button color="inherit">Login</Button>
            </Toolbar>
        </NavBarStyled>
    );
}

export default NavBar;
