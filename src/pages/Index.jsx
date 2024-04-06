import React from "react";
import { Box, Heading, Text, Image, Stack, SimpleGrid, Button, VStack, Divider } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const menuItems = [
  { name: "Jollof Rice", image: "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuaWdlcmlhbiUyMGpvbGxvZiUyMHJpY2V8ZW58MHx8fHwxNzEyNDA2Mjg4fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Egusi Soup", image: "https://images.unsplash.com/photo-1478749485505-2a903a729c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuaWdlcmlhbiUyMGVndXNpJTIwc291cHxlbnwwfHx8fDE3MTI0MDYyODh8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Suya", image: "https://images.unsplash.com/photo-1589707181684-24a34853641d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuaWdlcmlhbiUyMHN1eWF8ZW58MHx8fHwxNzEyNDA2Mjg4fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Pounded Yam", image: "https://images.unsplash.com/photo-1614725363900-538db555d7b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuaWdlcmlhbiUyMHBvdW5kZWQlMjB5YW18ZW58MHx8fHwxNzEyNDA2Mjg5fDA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box backgroundImage="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuaWdlcmlhbiUyMGZvb2R8ZW58MHx8fHwxNzEyNDA2Mjg5fDA&ixlib=rb-4.0.3&q=80&w=1080" backgroundSize="cover" backgroundPosition="center" height="400px" display="flex" alignItems="center" justifyContent="center" textAlign="center" color="white">
        <VStack spacing={4}>
          <Heading as="h1" size="2xl">
            Taste of Nigeria
          </Heading>
          <Text fontSize="xl">Authentic Nigerian Cuisine</Text>
          <Button colorScheme="orange" size="lg">
            Order Now
          </Button>
        </VStack>
      </Box>

      {/* About Section */}
      <Box p={8}>
        <Heading as="h2" size="xl" mb={4}>
          About Us
        </Heading>
        <Text fontSize="lg">We are passionate about bringing the rich flavors of Nigerian cuisine to your doorstep. Our dishes are prepared with the freshest ingredients and traditional recipes passed down through generations.</Text>
      </Box>

      {/* Menu Section */}
      <Box p={8}>
        <Heading as="h2" size="xl" mb={4}>
          Our Menu
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {menuItems.map((item, index) => (
            <Box key={index} textAlign="center">
              <Image src={item.image} alt={item.name} borderRadius="md" />
              <Text fontSize="xl" fontWeight="bold" mt={4}>
                {item.name}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Contact Section */}
      <Box p={8} bg="gray.100">
        <Heading as="h2" size="xl" mb={4}>
          Contact Us
        </Heading>
        <Stack direction={["column", "row"]} spacing={8}>
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              Address
            </Text>
            <Text>123 Nigerian Food Street</Text>
            <Text>Lagos, Nigeria</Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              Phone
            </Text>
            <Text>+234 123 456 7890</Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              Email
            </Text>
            <Text>info@tasteofnigeria.com</Text>
          </Box>
        </Stack>
      </Box>

      {/* Footer */}
      <Box p={8} bg="gray.200" textAlign="center">
        <Stack direction="row" spacing={4} justifyContent="center" mb={4}>
          <FaInstagram size={24} />
          <FaTwitter size={24} />
          <FaFacebook size={24} />
        </Stack>
        <Divider mb={4} />
        <Text>&copy; 2023 Taste of Nigeria. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
