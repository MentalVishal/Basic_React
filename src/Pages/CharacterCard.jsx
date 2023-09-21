import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export const CharacterCard = ({ id, image, name, status }) => {
  const navigate = useNavigate();
  const handelclick = () => {
    navigate(`/character/${id}`);
  };
  return (
    <Box onClick={handelclick} borderWidth="1px" borderRadius="lg" p={4}>
      <Image src={image} alt={name} />
      <Text mt={2} fontWeight="bold">
        {name}
      </Text>
      <Text>{status}</Text>
    </Box>
  );
};
