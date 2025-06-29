import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdOutlineDeleteSweep, MdOutlineModeEditOutline } from "react-icons/md";

const ProductCard = ({ product }) => {
  const textcolor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  console.log(product);
  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px", shadow: "lg" }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight="bold" fontSize="xl" mb={4} color={textcolor}>
          ${product.price}
        </Text>
        <HStack spacing={2}>
          <IconButton
            icon={<MdOutlineModeEditOutline />}
            // onClick={onOpen}
            colorScheme="blue"
          />
          <IconButton
            icon={<MdOutlineDeleteSweep />}
            // onClick={() => handleDelete(product._id)}
            colorScheme="red"
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
