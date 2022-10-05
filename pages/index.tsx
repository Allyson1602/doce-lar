import { Box } from '@mui/material';
import { ReactElement, useState } from 'react';

import type { NextPageWithLayout } from './_app';
import NavBar from '../components/globals/navBar';
import Layout from '../components/layout';
import Filter from '../components/filter';
import Order from '../components/order';
import { dataFilter } from '../model/filter';
import { DataFilter } from '../interfaces/filter';
import { DataOrder } from '../interfaces/orders';
import { dataOrder } from '../model/order';

const ListRentals: NextPageWithLayout = () => {

  const [filters, setFilters] = useState<DataFilter>(dataFilter);
  const [orders, setOrders] = useState<DataOrder>(dataOrder);

  const changeFilters = (newFilters: DataFilter) => {
    setFilters({...newFilters});
  };
  
  const changeOrders = (newOrders: DataOrder) => {
    setOrders({...newOrders});
  };
  
  return (
    <Box sx={{backgroundColor: (theme) => theme.palette.secondary.main}}>
      <Filter filters={filters} setFilters={changeFilters} />

      <Order orders={orders} setOrders={changeOrders} />

      {/* {rentals.map(rent => <Rent datas={rent} />)} */}

      {/* <Button>nossa recomendação de aluguel</Button> */}

      {/* <Pagination /> */}
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
