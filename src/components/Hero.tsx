import { Flex, Heading, Image, Spacer, Text, useBreakpointValue } from "@chakra-ui/react"

export const Hero = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Flex as="section" bgImage={"url('images/background.png')"} bgPos="center" bgRepeat="no-repeat" bgSize="cover" p={[4, 8, 16, 20]} justify="space-between">
      <Flex direction="column" justify="center" >
        <Heading fontSize={["20px", "24px", "28px", "36px", "48px"]} lineHeight={["30px", "36px", "42px", "54px", "76px"]} fontWeight="500" color="gray.50" mb={["20px", "35px"]}>
          5 Continentes, <Spacer />infinitas possibilidades.
        </Heading>
        <Text fontSize={["14px", "16px", "18px", "20px", "24px"]} color="gray.200" lineHeight={["21px", "24px", "27px", "30px"]} fontWeight="400">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
      </Flex>
      {isWideVersion && <Image src='images/airplane.svg' alt="airplane" pos="relative" top="120px" ml="80px" />}
    </Flex >
  )
}