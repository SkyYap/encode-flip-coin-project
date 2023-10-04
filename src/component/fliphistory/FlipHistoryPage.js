import React from 'react'
import { Flex, Text } from "@chakra-ui/react";

const FlipHistoryPage = () => {
    return (
        <Flex
            px={"2rem"}
            py={"1rem"}
            width="100%"
            textAlign={"center"}
            experimental_spaceY={"1.25rem"}
            flexDirection="column"
            justifyContent={"center"}
            height="calc(100vh)"
            background={"black"}
        >
            <Text color={"white"} fontSize="7xl">
                Flip History
            </Text>
        </Flex>
    )
}

export default FlipHistoryPage
