import { Box, Stack } from '@mui/material';
import { ReactElement, useState } from 'react';

import type { NextPageWithLayout } from './_app';
import NavBar from '../components/globals/navBar';
import Layout from '../components/layout';
import Filter from '../components/filter';
import Order from '../components/order';
import { dataFilter } from '../models/filter';
import { DataFilter } from '../interfaces/filter';
import { DataOrder } from '../interfaces/orders';
import { dataOrder } from '../models/order';
import { ConfigsGetRentalsStyled, ListRentalsStyled } from '../styles/pages/listRentals';

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
    <ListRentalsStyled>

      <ConfigsGetRentalsStyled>
        <Filter filters={filters} setFilters={changeFilters} />
        <Order orders={orders} setOrders={changeOrders} />
      </ConfigsGetRentalsStyled>

      {rentals.map(rent => <Rent datas={rent} />)}

      {/* <Button>nossa recomendação de aluguel</Button> */}

      {/* <Pagination /> */}
    </ListRentalsStyled>
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
