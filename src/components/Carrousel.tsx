import { Box, Image, Link as ChakraLink } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

export const Carrousel = () => {
  return (
    <Box maxW={1240} m="auto" pb={10}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        cssMode
        spaceBetween={50}
      >
        <SwiperSlide >
          <Link href="/locations/4" passHref>
            <ChakraLink>
              <Image src="/images/europa.jpg" alt="europa" />
            </ChakraLink>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/locations/1" passHref>
            <ChakraLink>
              <Image src="/images/asia.jpg" alt="asia" />
            </ChakraLink>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/locations/2" passHref>
            <ChakraLink>
              <Image src="/images/america.jpg" alt="america" />
            </ChakraLink>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/locations/3" passHref>
            <ChakraLink>
              <Image src="/images/africa.jpg" alt="africa" />
            </ChakraLink>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/locations/5" passHref>
            <ChakraLink>
              <Image src="/images/oceania.jpg" alt="oceania" />
            </ChakraLink>
          </Link>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};