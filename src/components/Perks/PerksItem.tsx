import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

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
      <Text mt={6} fontSize={["18px", "24px"]} fontWeight={[500, 600]} lineHeight={["27px", "36px"]} _before={!isWideVersion && { content: `""`, width: "8px", height: "8px", bgColor: "yellow.900", display: "inline-block", verticalAlign: "middle", mr: "8px", borderRadius: "50%" }}>
        {title}
      </Text>
    </Flex>
  )
}