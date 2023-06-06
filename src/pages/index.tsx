import Head from "next/head";
import styled from "styled-components";
import HomeScreen from "@/modules/home/screens/home";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const Cointainer = styled.div`
  background-color: white;
  width: 100%;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>MM - dashboard</title>
      </Head>

      <Cointainer>
        <HomeScreen />
      </Cointainer>

      {/* <Footer /> */}
    </>
  );
}
