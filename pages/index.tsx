import { Box, Button, Stack } from '@mui/material';
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
import { ButtonRecommendationStyled, ConfigsGetRentalsStyled, ListRentalsStyled } from '../styles/pages/listRentals';
import { DataRentals } from '../interfaces/rentals';
import Rental from '../services/rental';
import RentDemo from '../components/rentDemo';
import { useRouter } from 'next/router';

const ListRentals: NextPageWithLayout = () => {

  const [filters, setFilters] = useState<DataFilter>(dataFilter);
  const [orders, setOrders] = useState<DataOrder>(dataOrder);
  const [rentals, setRentals] = useState<DataRentals[]>([]);
  
  const router = useRouter();

  const changeFilters = (newFilters: DataFilter) => {
    setFilters({...newFilters});
  };
  
  const changeOrders = (newOrders: DataOrder) => {
    setOrders({...newOrders});
  };

  const rentRecommendation = () => {
    let recomendation = rentals[0].id;
    router.push(`rent/${recomendation}`);
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

      {rentals.map(rent => <RentDemo key={rent.id} data={rent} />)}

      <Stack justifyContent="center" direction="row">
        <ButtonRecommendationStyled variant="outlined" onClick={rentRecommendation}>nossa recomendação de aluguel</ButtonRecommendationStyled>
      </Stack>

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

export default ListRentals;
