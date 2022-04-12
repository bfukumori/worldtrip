import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react"

interface LocationCardProps {
  city: string;
  country: string;
  image: string;
  flag: string;
}

export const LocationCard = ({ city, country, image, flag }: LocationCardProps) => {
  return (

    <Box>
      <Image src={image} alt={city} objectFit="cover" height={280} w="100%" borderTopRadius="md" />
      <Flex p={6} justify="space-between" borderBottom="1px" borderRight="1px" borderLeft="1px" borderColor="yellow.450" borderRadius="md">
        <Box>
          <Text fontSize="20px" fontWeight={600} lineHeight="25px" color="gray.900">{city}</Text>
          <Text fontSize="16px" fontWeight={500} lineHeight="26px" color="gray.700">{country}</Text>
        </Box>
        <Avatar name={country} src={flag} />
      </Flex>
    </Box >
  )
}