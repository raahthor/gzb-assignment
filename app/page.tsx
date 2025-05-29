import BookDetail from "@/components/BookDetail";
import BookInfo from "@/components/BookInfo";
import Cards from "@/components/Cards";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Headline from "@/components/Headline";
import Navbar from "@/components/Navbar";
import Navmenu from "@/components/Navmenu";
import PopularBooks from "@/components/PopularBooks";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Headline />
      <Navbar />
      <Navmenu />
      <BookDetail />
      <Box border="1px solid" borderColor="gray.200" my="10"></Box>
      <BookInfo />
      <Description />
      <Box
        bgColor="blue.100"
        p="8"
        m="24"
        textAlign="center"
        fontSize="4xl"
        fontWeight={"bold"}
        color="white"
      >
        Z-Block Banner Section
      </Box>
      <Cards />
      <PopularBooks />
      <Footer />
    </>
  );
}
