import { Box } from '@mui/material';
import { ReactElement, useState } from 'react';

import type { NextPageWithLayout } from './_app';
import NavBar from '../components/globals/navBar';
import Layout from '../components/layout';

import Filter from '../components/Filter';
import { dataFilter } from '../model/filter';

const ListRentals: NextPageWithLayout = () => {

  const [filters, setFilters] = useState(dataFilter);
  
  return (
    <Box>
      <Filter />

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
