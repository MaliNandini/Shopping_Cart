import { Box, VStack, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBars } from "react-icons/fa";

function Sidebar() {
  return (
    <Flex
      boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
      position="sticky"
      w="250px"
      h="585px"
    >
      <Box>
        <VStack spacing={8} p="15px" ml="40px" alignItems="flex-start">
          <HStack>
            <FaHome />
            <Link to="/">Home</Link>
          </HStack>
          <HStack>
            <FaBars />
            <Link to="/">Settings</Link>
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
}

export default Sidebar;
