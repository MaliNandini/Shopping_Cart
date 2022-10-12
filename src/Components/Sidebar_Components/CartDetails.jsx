import React from "react";
import {
  Text,
  Box,
  Image,
  Heading,
  HStack,
  Table,
  Tr,
  Td,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { DLT, ADD, REMOVE } from "../Redux/Action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CartDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getdata = useSelector((state) => state.carts);
  console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((currElem) => {
      return currElem.id == id;
    });

    setData(comparedata, ">>>>>>>");
  };

  useEffect(() => {
    compare();
  }, [id]);

  const handledelete = (id) => {
    dispatch(DLT(id));
    navigate("/");
  };

  return (
    <>
      <Box>
        <Heading>Item Details Page</Heading>
      </Box>
      <Box
        textAlign="center"
        mt={{ lg: "50px" }}
        w="auto"
        position="fixed"
        p={{ lg: "30px" }}
        h={{
          md:"200px"
        }}
      >
        <Box
          display={{
            lg: "flex",
          }}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          textAlign="center"
          p="20px"
          fontWeight="600"
        >
          {data.map((e) => {
            return (
              <>
                <Box >
                  <Image
                    src={e.imgdata}
                    alt="Dan Abramov"
                    boxSize={{
                      base:"auto",
                      md:"100px",
                      lg:"200px"}}
                    w={{
                      base:"500px",
                      md:"500px",
                      lg:"auto"}}
                    h={{
                      base:"100px",
                      md:"180px"
                    }}  
                    objectFit="cover"
                    borderRadius="5px"
                    boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
                  />
                </Box>
                <Box display="flex" ml="25px">
                  <HStack spacing={20}>
                    <Table>
                      <Tr>
                        <Td>
                          <Text py="9px">
                            <strong>Restaurent :</strong> {e.rname}
                          </Text>
                          <Text py="9px">
                            <strong>Price :</strong> {e.price}
                          </Text>
                          <Text py="9px">
                            <strong>Dishes : </strong>
                            {e.address}
                          </Text>
                          <Text py="9px">
                            <strong>Total :</strong> {e.price * e.qnty}
                          </Text>

                          <Box
                            backgroundColor="#ddd"
                            color="#111"
                            mt="5px"
                            w="90px"
                          >
                            <HStack
                              p="7px"
                              justifyContent="space-between"
                              textAlign="center"
                            >
                              <Text
                                cursor="pointer"
                                px="6px"
                                fontSize="24px"
                                onClick={
                                  e.qnty <= 1
                                    ? () => handledelete(e.id)
                                    : () => dispatch(REMOVE(e))
                                }
                              >
                                -
                              </Text>
                              <Text fontSize="18px">{e.qnty}</Text>
                              <Text
                                cursor="pointer"
                                px="6px"
                                fontSize="24px"
                                onClick={() => dispatch(ADD(e))}
                              >
                                +
                              </Text>
                            </HStack>
                          </Box>
                        </Td>
                        <Td>
                          <Text py="9px">
                            <strong> Rating :</strong>{" "}
                            <span
                              style={{
                                backgroundColor: "green",
                                color: "white",
                                padding: "3px",
                                borderRadius: "5px",
                              }}
                            >
                              {e.rating} ★
                            </span>
                          </Text>
                          <Text py="9px">
                            <strong>Order Review :</strong> {e.somedata}
                          </Text>
                          <Text py="9px">
                            <HStack>
                              <strong>Remove :</strong>{" "}
                              <FaTrash
                                color="red"
                                onClick={() => handledelete(e.id)}
                              />
                            </HStack>
                          </Text>
                        </Td>
                      </Tr>
                    </Table>
                  </HStack>
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default CartDetails;
