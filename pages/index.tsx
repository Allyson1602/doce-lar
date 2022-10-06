import { Box, Stack } from '@mui/material';
import { ReactElement, useCallback, useEffect, useState } from 'react';

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
import { DataRentals } from '../interfaces/rentals';
import Rental from '../services/rental';
import RentDemo from '../components/rentDemo';

const ListRentals: NextPageWithLayout = () => {

  const [filters, setFilters] = useState<DataFilter>(dataFilter);
  const [orders, setOrders] = useState<DataOrder>(dataOrder);
  const [rentals, setRentals] = useState<DataRentals[]>([]);

  const changeFilters = (newFilters: DataFilter) => {
    setFilters({...newFilters});
  };
  
  const changeOrders = (newOrders: DataOrder) => {
    setOrders({...newOrders});
  };

  const getService = useCallback(
    () => new Rental(), []
  );

  const getRentals = useCallback(
    () => {
      getService().getRentals().then((rentals) => {
        if(rentals.data.length > 0) {
          setRentals(rentals.data);
        }
      }).catch((error) => {
        console.log("Não foi possível buscar aluguéis"); // snackbar
      });
    }, [getService]
  );

  useEffect(() => {
    getRentals();
  }, [getRentals]);
  
  return (
    <ListRentalsStyled>
      <ConfigsGetRentalsStyled>
        <Filter filters={filters} setFilters={changeFilters} />
        <Order orders={orders} setOrders={changeOrders} />
      </ConfigsGetRentalsStyled>

      <RentDemo key={"100"} data={rentals[0]} />
      <RentDemo key={"200"} data={rentals[0]} />
      {/* {rentals.map(rent => <RentDemo key={rent.id} data={rent} />)} */}

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
