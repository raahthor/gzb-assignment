import {  Flex, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BiSolidOffer } from "react-icons/bi";
import { IoDiamondOutline } from "react-icons/io5";
import { LuClockAlert } from "react-icons/lu";
import { MdShoppingCartCheckout } from "react-icons/md";

export default function Cards() {
  return (
    <Flex px="24" justifyContent="space-between" mb="10">
      <CardBoxes
        icon={MdShoppingCartCheckout}
        value={"Secure Checkout"}
        text={"Your payment is protected with 256-bit SSL encryption"}
      />
      <CardBoxes
        icon={IoDiamondOutline}
        value={"The Best Quality"}
        text={"30-Day Money-Back Guarantee, shop risk-free"}
      />
      <CardBoxes
        icon={BiSolidOffer}
        value={"Exclusive Offers"}
        text={"Members-only deals - unlock special pricing"}
      />
      <CardBoxes
        icon={LuClockAlert}
        value={"Limited Stock"}
        text={"Selling fast - grab yours before it's gone!"}
      />
    </Flex>
  );
}

type CardProp = {
  icon: IconType;
  value: string;
  text: string;
};

function CardBoxes({ icon, value, text }: CardProp) {
  const Icon = icon;
  return (
    <Flex
      w="22%"
      direction="column"
      alignItems="center"
      gap="1"
      px="14"
      py="8"
      borderRadius="md"
      boxShadow="0 8px 8px rgba(0, 0, 0, 0.2)"
    >
      <Icon size={30} color="blue" />
      <Text mt="1" color="black" fontWeight="bold">
        {value}
      </Text>
      <Text fontSize="sm" color="gray.600" textAlign="center">
        {text}
      </Text>
    </Flex>
  );
}
