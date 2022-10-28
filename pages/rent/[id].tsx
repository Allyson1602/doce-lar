import { useRouter } from "next/router";
import { ReactElement } from "react";
import NavBar from "../../components/globals/navBar";
import Layout from "../../components/layout";
import { NextPageWithLayout } from "../_app";

const Rent: NextPageWithLayout = () => {
    const router = useRouter()
    const { pid } = router.query
    
    return (
        <>aluguel {pid}</>
    );
};

Rent.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <>
        <NavBar />
        {page}
      </>
    </Layout>
  );
}

export default Rent;