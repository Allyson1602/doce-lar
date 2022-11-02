import { FC, useState } from "react";
import { PaginationStyled } from "../styles/components/pagination";

interface PaginationProps {
    pages: number;
    defaultPage?: number;
}

const Pagination: FC<PaginationProps> = (props) => {
    const [page, setPage] = useState(props.defaultPage ?? 0);

    const handleChangePagination = (event: React.ChangeEvent<unknown>, page: number) => {
        setPage(page);
    };

    return (
        <PaginationStyled
            defaultPage={page}
            count={props.pages}
            page={page}
            onChange={handleChangePagination}
        />
    );
};

export default Pagination;
