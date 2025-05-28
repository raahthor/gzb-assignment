import BookDetail from "@/components/BookDetail";
import BookInfo from "@/components/BookInfo";
import Description from "@/components/Description";
import Headline from "@/components/Headline";
import Navbar from "@/components/Navbar";
import Navmenu from "@/components/Navmenu";
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
      <Description/>
    </>
  );
}
