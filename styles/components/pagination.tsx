import styled from "@emotion/styled";
import { Pagination } from "@mui/material";
import { ITheme } from "../../themes/themes";

export const PaginationStyled = styled(Pagination)`
    margin: ${props => (props.theme as ITheme).spacing(2, 1)};

    .MuiPagination-ul {
        justify-content: center;
    };

    .MuiPaginationItem-root {
        min-width: 25px;
    };
`;