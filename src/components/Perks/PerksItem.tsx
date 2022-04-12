import { Flex, Icon, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface PerksItemProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
}

export const PerksItem = ({ imgAlt, imgSrc, title }: PerksItemProps) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Flex direction="column" justify="end" align="center">
      {isWideVersion && <Image src={imgSrc} alt={imgAlt} />}
      <Text mt={6} fontSize={["18px", "24px"]} fontWeight={[500, 600]} lineHeight={["27px", "36px"]}>
        {
          !isWideVersion && <Icon boxSize={2} color="yellow.900" bgColor="yellow.900" borderRadius="4px" mr="8px" />
        }

        {title}
      </Text>
    </Flex>
  )
}