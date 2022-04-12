import { Divider, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Carrousel } from "../components/Carrousel";
import { Hero } from "../components/Hero";
import { Perks } from "../components/Perks";

const Home = () => {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <Perks />
      <Divider w={90} border="2px" borderColor="gray.900" mr="auto" ml="auto" mt="36px" />
      <Text fontSize={["20px", "36px"]} fontWeight={500} color="gray.900" textAlign="center" mt="36px" lineHeight={["30px", "54px"]}>Vamos nessa?</Text>
      <Text fontSize={["20px", "36px"]} fontWeight={500} color="gray.900" textAlign="center" mb={["24px", "50px"]} lineHeight={["30px", "54px"]}>Então escolha seu continente</Text>
      <Carrousel />
    </>
  )
}

export default Home
