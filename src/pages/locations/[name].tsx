import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { LocationCard } from "../../components/LocationCard";

interface Location {
  id: string;
  city: string;
  country: string;
  image: string;
  flag: string;
}

type ContinentData = {
  id: string;
  name: string;
  text: string;
  totalCountries: number;
  totalLanguages: number;
  totalCities: number;
  locations: Location[];
}

const Location = ({ continent }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <Flex bgImage={`/images/${continent.name}.jpg`} bgPosition="center" objectFit="cover" height={[150, 250, 400, 500]} align={["center", "center", "center", "end"]} justify={["center", "center", "start"]}>
        <Heading textTransform="capitalize" fontSize={["28px", "48px"]} fontWeight={600} lineHeight={["42px", "72px"]} color="gray.50" p={[4, 8, 16, 20]} >
          {(continent.name)}
        </Heading>
      </Flex>
      <SimpleGrid p={[4, 8, 16, 20]} columns={[1, 2]} spacing={["16px", "70px"]} alignItems="center">

        <Text fontSize={["14px", "18px", "24px"]} lineHeight={["21px", "36px"]} color="gray.900" align="justify">
          {continent.text}
        </Text>

        <Flex justify="center" gap={10} align="baseline" wrap="wrap">
          <Box textAlign="center">
            <Text fontSize={["24px", "32px", "48px"]} lineHeight={["36px", "48px", "72px"]} fontWeight={600} color="yellow.900">{continent.totalCountries}</Text>
            <Text fontSize={["18px", "21px", "24px"]} lineHeight={["18px", "30px", "36px"]} fontWeight={600} color="gray.900">países</Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize={["24px", "32px", "48px"]} lineHeight={["36px", "48px", "72px"]} fontWeight={600} color="yellow.900">{continent.totalLanguages}</Text>
            <Text fontSize={["18px", "21px", "24px"]} lineHeight={["18px", "30px", "36px"]} fontWeight={600} color="gray.900">línguas</Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize={["24px", "32px", "48px"]} lineHeight={["36px", "48px", "72px"]} fontWeight={600} color="yellow.900">{continent.totalCities}</Text>
            <Text fontSize={["18px", "21px", "24px"]} lineHeight={["18px", "30px", "36px"]} fontWeight={600} color="gray.900" >cidades +100
              <Tooltip hasArrow label="Número de cidades que fazem parte da lista das 100 melhores para se visitar" bg="yellow.450" color="gray.900" >
                <InfoOutlineIcon boxSize={[2, 4]} ml="5px" color="gray.700" />
              </Tooltip>
            </Text>
          </Box>
        </Flex>
      </SimpleGrid>
      <Box p={[4, 8, 16, 20]}>
        <Heading fontSize={["24px", "36px"]} lineHeight={["36px", "54px"]} fontWeight={500} mb={[5, 10]}>Cidades +100</Heading>
        <SimpleGrid minChildWidth={250} spacing={["20px", "45px"]} >
          {
            continent.locations.map((location: Location) => <LocationCard key={location.id} city={location.city} country={location.country} image={location.image} flag={location.flag} />)
          }
        </SimpleGrid>
      </Box>
    </>
  )
}

export default Location;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/locations");
  const continents: ContinentData[] = await res.json();

  const paths = continents.map((continent) => ({ params: { name: continent.name } }))

  return {
    paths,
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/locations/${params.name}`);
  const continent: ContinentData = await res.json();

  return {
    props: {
      continent
    },
    revalidate: 60 * 30
  }
}
