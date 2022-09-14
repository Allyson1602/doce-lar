import { ReactElement } from 'react';
import NavBar from '../components/globals/navBar';
import Layout from '../components/layout';
import type { NextPageWithLayout } from './_app';

const ListRentals: NextPageWithLayout = () => {
  return (
    <div>
      
    </div>
  )
};

ListRentals.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <>
        <NavBar title="cadastro de aluguel" rent={false} />
        {page}
      </>
    </Layout>
  );
}

export default ListRentals
