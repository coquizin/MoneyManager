import Head from "next/head";
import styled from "styled-components";

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

      <Cointainer>a</Cointainer>

      {/* <Footer /> */}
    </>
  );
}
