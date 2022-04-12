import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const router = useRouter();

  return (
    <Flex as="header" justify="center" align="center" h={100} pl={[4, 8, 16, 20]} pr={[4, 8, 16, 20]}>
      {router.asPath !== "/" &&
        <ChevronLeftIcon w="32px" h="32px" onClick={() => router.back()} />
      }

      <Link href="/" passHref>
        <ChakraLink m="auto">
          <Image src='/images/logo.svg' alt="worldtrip logo" width="185px" height="45px" />
        </ChakraLink>
      </Link>
    </Flex>
  )
}
