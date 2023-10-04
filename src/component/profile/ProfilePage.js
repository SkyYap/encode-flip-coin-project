import React from 'react'
import { Flex, Text } from "@chakra-ui/react";

const ProfilePage = () => {
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
                Profile
            </Text>
        </Flex>
    )
}

export default ProfilePage
