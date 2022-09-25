import { Box } from '@mui/material';
import { ReactElement, useState } from 'react';

import type { NextPageWithLayout } from './_app';
import NavBar from '../components/globals/navBar';
import Layout from '../components/layout';

import { dataFilter } from '../model/filter';
import { DataFilter } from '../interfaces/filter';
import Filter from '../components/filter';

const ListRentals: NextPageWithLayout = () => {

  const [filters, setFilters] = useState(dataFilter);

  const changeFilters = (newFilters: DataFilter) => {
    setFilters({...newFilters});
  };
  
  return (
    <Box sx={{backgroundColor: (theme) => theme.palette.secondary.main}}>
      <Filter filters={filters} setFilters={changeFilters} />

      {/* <Order />

      {rentals.map(rent => <Rent datas={rent} />)}

      <Button>nossa recomendação de aluguel</Button>

      <Pagination /> */}
    </Box>
  )
};

ListRentals.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <>
        <NavBar />
        {page}
      </>
    </Layout>
  );
}

export default ListRentals
