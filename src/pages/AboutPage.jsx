import React from 'react';
import { Box, Heading, Text, Image, Grid, GridItem, VStack, useColorModeValue } from '@chakra-ui/react';

const AboutPage = () => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const sectionBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box p={[2, 3, 5]} bg={bg} color={textColor}>
      <Heading fontSize={['2xl', '3xl', '4xl']} textAlign="center" mb={5} fontFamily="Poppins, sans-serif">About Us</Heading>
      
      {/* /* About */ }
        <Box bg={sectionBg} p={5} borderRadius="md" mb={10}>
          <Grid templateColumns={['1fr', '1fr 1fr']} gap={6}>
            <GridItem colSpan={[2, 1]}>
          <VStack spacing={4} align="start">
            <Heading fontSize={['xl', '2xl']} mb={2} fontFamily="Poppins, sans-serif">Our Company</Heading>
            <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
            At CubiColour, we bring your digital vision to life with beautifully crafted, high-performance websites tailored to your unique needs. Whether you're a small business, an entrepreneur, or an established brand, we create stunning, functional, and user-friendly websites that leave a lasting impression.

            With a passion for design and a focus on modern web technologies, our team ensures that every site we build is fast, responsive, and optimized for success. We believe that a great website is more than just visuals—it’s an experience. That’s why we combine creativity, strategy, and the latest development tools to deliver sites that not only look great but also work seamlessly across all devices.

            At CubiColour, your online presence is our priority. Let’s build something amazing together!
            </Text>
            <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
              We believe in simplicity, elegance, and modernity. Our designs prioritize clean lines, neutral color palettes, and seamless integration of space and light.
            </Text>
            <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
              We believe in a collaborative approach, working closely with clients to bring their vision to life while maintaining the highest standards of quality and sustainability.
            </Text>
          </VStack>
            </GridItem>
            <GridItem colSpan={[2, 1]}>
          <Image src="/public/images/-create-a-company-picture-for-a-website-company-us (1).jpg" alt="Company pic" borderRadius="md" objectFit="cover" boxSize="500px" />
            </GridItem>
          </Grid>
        </Box>
        
        {/* Our Mission */}
      <Box bg={sectionBg} p={5} borderRadius="md" mb={10}>
        <Grid templateColumns={['1fr', '1fr 1fr']} gap={6}>
          <GridItem>
            <VStack spacing={4} align="start">
              <Heading fontSize={['xl', '2xl']} mb={2} fontFamily="Poppins, sans-serif">Our Mission</Heading>
              <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
                Our mission is to empower businesses by creating innovative, high-quality websites that drive success and growth. We strive to deliver exceptional digital experiences through cutting-edge technology, creative design, and a client-focused approach. Our goal is to help our clients achieve their online objectives and build a strong digital presence that stands out in a competitive market.
              </Text>
            </VStack>
          </GridItem>
          {/* Our Vision */}
          <GridItem>
            <VStack spacing={4} align="start">
              <Heading fontSize={['xl', '2xl']} mb={2} fontFamily="Poppins, sans-serif">Our Vision</Heading>
              <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
                Our vision is to be a leading provider of web design and development services, known for our creativity, expertise, and commitment to excellence. We aim to be the go-to partner for businesses looking to enhance their online presence and achieve their digital goals. By combining innovation, collaboration, and a customer-centric approach, we aspire to create lasting value for our clients and help them succeed in the digital age.
              </Text>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
      
      {/* Meet the Team */}
      <Box bg={sectionBg} p={5} borderRadius="md" mb={10}>
        <Heading fontSize={['xl', '2xl']} mb={4} fontFamily="Poppins, sans-serif">Meet the Team</Heading>
        <Grid templateColumns={['1fr', '1fr 1fr 1fr']} gap={6}>
          <GridItem>
            <Image src="/public/images/simon.jpg" alt="Team Member 1" borderRadius="full" boxSize="120px" objectFit="cover" transition="transform 0.3s" _hover={{ transform: 'scale(1.1)' }} />
            <Text mt={2} fontSize={['sm', 'md']} textAlign="center" fontFamily="Poppins, sans-serif">Simon Bates</Text>
            <Text mt={2} fontSize={['sm', 'md']} textAlign="center" fontFamily="Poppins, sans-serif">Web Developer</Text>
          </GridItem>
          <GridItem>
            <Image src="/public/images/Jelena.jpg" alt="Team Member 2" borderRadius="full" boxSize="120px" objectFit="cover" transition="transform 0.3s" _hover={{ transform: 'scale(1.1)' }} />
            <Text mt={2} fontSize={['sm', 'md']} textAlign="center" fontFamily="Poppins, sans-serif">Jelena Bates</Text>
            <Text mt={2} fontSize={['sm', 'md']} textAlign="center" fontFamily="Poppins, sans-serif">Designer</Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutPage;
