import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import main_logo_apes from "resources/logo/ui_icon_coinfliplogo.png";
import ChooseCoinComponent from "./ChooseCoinComponent";
import ChooseAmountComponent from "./ChooseAmountComponent";
import ButtonFlipCoin from "./ButtonFlipCoin";
import FlipCoinBtn from "resources/button/FlipCoinBtn.png";
import CoinFlip from "./CoinFlip";
import { solValue } from "component/constant/SolValue";

const CoinFlipGameplay = () => {
  const [currentBoxValue, setCurrentBoxValue] = useState(solValue[0].value);
  const [isHeadSelected, setHeadSelect] = useState(false);

  const [result, setResult] = useState("heads");
  const [flipAnimation, setFlipAnimation] = useState(false);

  return (
    <Flex mb={10} flexDir="column">
      <CoinFlip result={result} />
      <Flex p={2} justifyContent={"center"}>
        <Flex
          backgroundColor={"#555da8"}
          height={"50px"}
          width={"40%"}
          borderColor={"white"}
          borderWidth={1}
          borderRadius={10}
          fontSize={25}
          alignItems={"center"}
          justifyContent={"center"}
          mr={5}
        >
          SOL
        </Flex>

        <Box>
          <Flex mb={"5px"}>
            <Text color={"white"} mr={"14px"} fontSize={12}>
              MIN
            </Text>
            <Input
              border={0}
              borderRadius={20}
              backgroundColor={"#303266"}
              htmlSize={4}
              width="auto"
              height={"25px"}
              placeholder="0.1 sol"
              isDisabled={true}
            />
          </Flex>
          <Flex>
            <Text color={"white"} mr={"10px"} fontSize={12}>
              MAX
            </Text>
            <Input
              border={0}
              borderRadius={20}
              backgroundColor={"#303266"}
              htmlSize={4}
              width="auto"
              height={"25px"}
              placeholder="5 sol"
              isDisabled={true}
            />
          </Flex>
        </Box>
      </Flex>

      <Flex alignItems={"center"}>
        <ChooseCoinComponent
          isHeadSelected={isHeadSelected}
          setHeadSelect={setHeadSelect}
        />
        <ChooseAmountComponent
          setCurrentBoxValue={setCurrentBoxValue}
          currentBoxValue={currentBoxValue}
        />
        <ButtonFlipCoin
          flipAnimation={flipAnimation}
          setFlipAnimation={setFlipAnimation}
          setResult={setResult}
          result={result}
        />
      </Flex>
    </Flex>
  );
};

export default CoinFlipGameplay;
