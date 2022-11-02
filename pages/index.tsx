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
import Pagination from '../components/pagination';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ListRentals: NextPageWithLayout = () => {

  const [filters, setFilters] = useState<DataFilter>(dataFilter);
  const [orders, setOrders] = useState<DataOrder>(dataOrder);
  const [rentals, setRentals] = useState<DataRentals[]>([]);
  const [lengthPages, setLengthPages] = useState(1);
  
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

  const getRentalLengthPages = useCallback(
    () => {
      getService().getRentalLengthPages().then(({ data }) => {
          setLengthPages(data.lengthPages);
      }).catch((error) => {
        console.log("Não foi possível quantidade de pages"); // snackbar
      });
    }, [getService]
  );

  useEffect(() => {
    getRentals();
  }, [getRentals]);

  useEffect(() => {
    getRentalLengthPages();
  }, [getRentalLengthPages]);
  
  return (
    <ListRentalsStyled>
      <ConfigsGetRentalsStyled>
        <Filter filters={filters} setFilters={changeFilters} />
        <Order orders={orders} setOrders={changeOrders} />
      </ConfigsGetRentalsStyled>

      { rentals.length > 0
        ? (
          rentals.map(rent => <RentDemo key={rent.id} data={rent} />)
        )
        : (
          <>
            <Skeleton
              height="200px"
              style={{
                margin: "16px 8px",
                width:"calc(100% - 16px)"
              }}
            />
            
            <Skeleton
              height="200px"
              style={{
                margin: "16px 8px",
                width:"calc(100% - 16px)"
              }}
            />
            
            <Skeleton
              height="200px"
              style={{
                margin: "16px 8px",
                width:"calc(100% - 16px)"
              }}
            />
            
            <Skeleton
              height="200px"
              style={{
                margin: "16px 8px",
                width:"calc(100% - 16px)"
              }}
            />
          </>
        )
      }

      <Stack justifyContent="center" direction="row">
        <ButtonRecommendationStyled variant="outlined" onClick={rentRecommendation}>nossa recomendação de aluguel</ButtonRecommendationStyled>
      </Stack>

      <Pagination pages={lengthPages} />
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
