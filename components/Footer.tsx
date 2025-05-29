import { Box, Button, Center, Flex, Link, Text } from "@chakra-ui/react";
import { IoMdMail } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";
import Image from "next/image";
import {
  FaApplePay,
  FaFacebook,
  FaGooglePay,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaCcAmex, LiaCcDiscover } from "react-icons/lia";
import { RiMastercardLine } from "react-icons/ri";

export default function Footer() {
  return (
    <>
      <Flex px="24" pb="24" pt="12rem" gap={"10"}>
        <Flex p="10" bgColor={"yellow.300"} gap={"8"} align="center">
          <Box p="4" w="16" h="16" bgColor="blue.900" borderRadius="full">
            <IoMdMail size={30} />
          </Box>
          <Box>
            <Text color="black" fontSize={"xl"} fontWeight={"bold"}>
              Stay Updated. Get Inspired
            </Text>
            <Text my="3" color={"gray.600"}>
              Sign up for our newsletter for great deals and business insights.
            </Text>
            <Button bgColor={"yellow.400"} borderRadius={"full"} px="6">
              Newsletter Sign Up
            </Button>
          </Box>
        </Flex>

        <Flex p="10" bgColor={"yellow.300"} gap={"8"} align="center">
          <Box p="4" w="16" h="16" bgColor="blue.900" borderRadius="full">
            <LuMessagesSquare size={30} />
          </Box>
          <Box>
            <Text color="black" fontSize={"xl"} fontWeight={"bold"}>
              Looking for help?
            </Text>
            <Text my="3" color={"gray.600"}>
              Get in touch with the team at ShopLocal RI for assistance.
            </Text>
            <Button bgColor={"yellow.400"} borderRadius={"full"} px="6">
              Contact Us
            </Button>
          </Box>
        </Flex>
      </Flex>

      <Flex
        bgColor="blue.900"
        p="16"
        borderBottom="1px solid"
        borderColor="gray.400"
        justifyContent="space-between"
      >
        <Link minWidth={70} mx={8} href={"https://www.gzb.ae/"} target="_blank">
          <Image height={100} width={170} src="/logoWhite.svg" alt="gzb logo" />
        </Link>
        <Flex direction="column" gap="1">
          <Link href="#">About Us</Link>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Contact Us</Link>
        </Flex>
        <Flex direction="column" gap="1">
          <Link href="#">info@gzb.ae</Link>
          <Link href="#">+91 12938 97890</Link>
          <Flex gap={5} mt="1">
            <Link href="#">
              <FaFacebook />
            </Link>
            <Link href="#">
              <FaXTwitter />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
            <Link href="#">
              <FaLinkedin />
            </Link>
          </Flex>
        </Flex>
        <Flex gap="2">
          <Link href="#">
            <LiaCcAmex size={35} />
          </Link>
          <Link href="#">
            <LiaCcDiscover size={35} />
          </Link>
          <Link href="#">
            <RiMastercardLine  size={35} />
          </Link>
          <Link href="#">
            <FaApplePay size={35} />
          </Link>
          <Link href="#">
            <FaGooglePay size={35} />
          </Link>
        </Flex>
      </Flex>
      <Center bgColor="blue.900" p="1" color="white" fontSize="sm">
        Copyright 2025 © GZB.AE
      </Center>
    </>
  );
}
