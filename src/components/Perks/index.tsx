import { Flex } from "@chakra-ui/react";
import { PerksItem } from "./PerksItem";

export const Perks = () => {

  return (
    <Flex p={[4, 8, 16, 20]} justify="space-around" wrap="wrap" gap={["24px", "48px", "96px", "120px"]}>
      <PerksItem title="vida noturna" imgAlt="cocktail" imgSrc="images/cocktail.svg" />
      <PerksItem title="praia" imgAlt="surf" imgSrc="images/surf.svg" />
      <PerksItem title="moderno" imgAlt="building" imgSrc="images/building.svg" />
      <PerksItem title="clássico" imgAlt="museum" imgSrc="images/museum.svg" />
      <PerksItem title="e mais..." imgAlt="earth" imgSrc="images/earth.svg" />
    </Flex>
  )
}