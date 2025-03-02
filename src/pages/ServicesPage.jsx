import React from 'react';
import { Box, Heading, Text, Button, useBreakpointValue } from '@chakra-ui/react';

const ServicesPage = () => {
  const padding = useBreakpointValue({ base: 2, md: 5 });
  const headingSize = useBreakpointValue({ base: 'lg', md: 'xl' });
  const textSize = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <Box p={padding} maxW="800px" mx="auto" mt={10}>
      <Heading size={headingSize} textAlign="center">Services</Heading>
      <Box mt={4} p={4} borderWidth="1px" borderRadius="lg">
        <Text fontSize={textSize} textAlign="justify">
          At CubiColour, we offer a range of web solutions designed to help your business stand out online. Whether you need a sleek business website, an e-commerce store, or a custom web solution, we’ve got you covered.
        </Text>
      </Box>
      <Box mt={4} p={4} borderWidth="1px" borderRadius="lg">
        <Text fontSize={textSize} textAlign="justify">
          🌐 Website Design & Development
          We create visually stunning and fully responsive websites tailored to your brand, ensuring a seamless experience across all devices.
        </Text>
      </Box>
      <Box mt={4} p={4} borderWidth="1px" borderRadius="lg">
        <Text fontSize={textSize} textAlign="justify">
          🛒 E-Commerce Solutions
          From small online shops to full-scale e-commerce platforms, we build secure, user-friendly stores that drive sales and customer engagement.
        </Text>
      </Box>
      <Box mt={4} p={4} borderWidth="1px" borderRadius="lg">
        <Text fontSize={textSize} textAlign="justify">
          ⚡ Custom Web Applications
          Need a unique digital solution? We develop custom web applications that fit your business needs, using the latest technologies for speed and scalability.
        </Text>
      </Box>
      <Box mt={4} p={4} borderWidth="1px" borderRadius="lg">
        <Text fontSize={textSize} textAlign="justify">
          📈 SEO & Performance Optimization
          A great website is only effective if people can find it. We optimize your site for search engines and performance, ensuring fast loading speeds and higher rankings.
        </Text>
      </Box>
      <Box mt={4} p={4} borderWidth="1px" borderRadius="lg">
        <Text fontSize={textSize} textAlign="justify">
          🔧 Website Maintenance & Support
          Keep your website secure and up to date with our ongoing maintenance plans, so you can focus on growing your business.
        </Text>
      </Box>
      <Box mt={4} p={4} borderWidth="1px" borderRadius="lg">
        <Text fontSize={textSize} textAlign="justify">
          Let CubiColour turn your ideas into reality. 🚀 Let’s build something amazing together!
        </Text>
      </Box>
      <Button mt={6} size={useBreakpointValue({ base: 'sm', md: 'md' })} display="block" mx="auto" onClick={() => window.location.href = "/contact"}>
        Schedule a Consultation
      </Button>
    </Box>
  );
};

export default ServicesPage;
