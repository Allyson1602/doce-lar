import { ReactElement } from 'react';
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
      {page}
    </Layout>
  );
}

export default ListRentals
