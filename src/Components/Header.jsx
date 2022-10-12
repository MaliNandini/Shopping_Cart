import React from "react";
import {
  Box,
  Button,
  ModalFooter,
  Container,
  Input,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  ModalBody,
  Tr,
  ModalCloseButton,
  Th,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  Table,
  Thead,
  Tbody,
  Td,
  Image,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { FaShoppingCart,FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Search2Icon } from "@chakra-ui/icons";
import {NavLink} from 'react-router-dom';
import {DLT} from './Redux/Action';
import {useDispatch} from 'react-redux';
import { useState } from "react";
import { useEffect } from "react";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [price ,setPrice] = useState(0);
  const getdata = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const total =()=>{
    let price = 0;
    getdata.map((e,k)=>{
      price = e.price*e.qnty + price
    })
    setPrice(price);
  }


  useEffect(()=>{
    total();
  },[total])
  

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box
      as="section"
      pb={{
        base: "5",
        md: "2",
      }}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container
          py={{
            base: "2",
            lg: "2",
          }}
          mt="7px"
        >
          <HStack spacing="10" justify="space-between">
            {isDesktop ? (
              <HStack flex="2">
                <Search2Icon color="gray" />
                <Input
                  placeholder="Search"
                  width={{
                    base: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                    xl: "100%",
                  }}
                />
              </HStack>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
            <Box
              ml="500px"
              display="flex"
              textAlign="end"
              marginRight="2rem"
              alignItems="center"
              position="relative"
              justifyContent="flex-end"
              onClick={onOpen}
             
            >
              <FaShoppingCart fontSize="2.15rem" color="#020e26" />
              {getdata.length ? 
              <Text
                position="absolute"
                width="2rem"
                height="2rem"
                right="-1.2rem"
                top="-0.9rem"
                borderRadius="50%"
                background="#99cbf7"
                color="#020e26"
                boxSizing="border-box"
                fontSize="1rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                {getdata.length}
              </Text>
              :null}
            </Box>
          </HStack>
        </Container>

        <Modal onClose={onClose} size={"lg"} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Box>
              {getdata.length ?
                <Box>
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Photos</Th>
                      <Th>Restaurant Name</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {getdata.map((e)=>{
                      return (
                        <>
                        <Tr>
                          <Td>
                            <NavLink to={`/cartDetails/${e.id}`} onClick={onClose}>
                            <Image
                            src={e.imgdata}
                            alt="Dan Abramov"
                            boxSize="100px"
                            objectFit="cover"
                            borderRadius="8px"
                            boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
                          />
                            </NavLink>
                         
                          </Td>
                          <Td fontWeight="600">
                            <Text mt="5px" >{e.rname}</Text>
                            <Text  mt="5px">₹ {e.price}</Text>
                            <Text  mt="5px">Quantity: {e.qnty}</Text>

                          </Td>
                          <Td>
                            <Text><FaTrash color="red" onClick={()=>dispatch(DLT(e.id))}/></Text>
                          </Td>
                        </Tr>
                        
                        </>
                      )
                    })}
                   <Text textAlign="center" fontWeight="600">Total :₹ {price} </Text>
                  </Tbody>
                </Table>
                </Box>
             :<Text fontWeight="600" fontSize="24" textAlign="center" mt="5px"> Your cart is empty</Text>
             }
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
}

export default React.memo(Header);





  
