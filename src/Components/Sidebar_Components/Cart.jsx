import React from "react";

import Cardsdata from "../CardData";
import {
  HStack,
  VStack,
  Image,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useDispatch } from "react-redux";
import { ADD } from "../Redux/Action";

function Home() {
  const dispatch = useDispatch();

  return (
    <>
      <SimpleGrid
        h="564px"
        spacing="8"
        p="5"
        rounded="lg"
        textAlign={{
          base: "center",
          md: "center",
        }}
      >
        <Scrollbars>
          {Cardsdata.map((item) => {
            return (
              <VStack spacing={10} key={item.id}>
                <HStack
                  spacing={20}
                  py={{
                    base:"30px",
                    md:"30px",
                    lg:"30px"}}
                  display={{
                    base: "table-column",
                    md: "table-column",
                    lg: "flex",
                  }}
                >
                  <Image
                    src={item.imgdata}
                    alt="Dan Abramov"
                    boxSize={{
                      base: "300px",
                      md: "300px",
                      lg: "100px",
                    }}
                    objectFit="cover"
                    borderRadius="8px"
                    boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
                    ml={{
                      base: "30px",
                    }}
                  />
                  <VStack
                    w="300px"
                    h={{
                      base:"70px",
                      md:"70px",
                      lg:"100px"}}
                    spacing={3}
                    alignItems={{
                      base: "flex-start",
                      md: "flex-start",
                      lg: "flex-start",
                    }}
                  >
                    <Text
                      fontWeight="600"
                      fontSize="15px"
                      mt={{
                        base: "10px",
                      }}
                    >
                      {item.rname}
                    </Text>
                    <Text fontWeight="600" fontSize="15px">
                      Rating : {item.rating}
                    </Text>
                  </VStack>
                  <HStack
                    spacing={{
                      lg: "90px",
                      md: "80px",
                      base: "100px",
                    }}
                    
                  >
                    <Text fontWeight="600" fontSize="15px">
                      {item.price} ₹
                    </Text>
                    <Button
                      backgroundColor="#020e26"
                      color="white"
                      onClick={() => dispatch(ADD(item))}
                      
                    >
                      + Add
                    </Button>
                  </HStack>
                </HStack>
              </VStack>
            );
          })}
        </Scrollbars>
      </SimpleGrid>
    </>
  );
}

export default Home;
