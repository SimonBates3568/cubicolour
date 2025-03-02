import React, { useState } from 'react';
import { Box, Heading, Text, Image, Button, Grid, Card, CardBody } from '@chakra-ui/react';

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: 'Business Website', image: '/images/business-website.jpg', demoLink: 'https://example.com/business-website' },
    { id: 2, title: 'Portfolio Website', image: '/images/portfolio-website.jpg', demoLink: 'https://example.com/portfolio-website' },
    { id: 3, title: 'E-commerce Website', image: '/images/ecommerce-website.jpg', demoLink: 'https://example.com/ecommerce-website' },
  ];

  return (
    <Box p={5} maxW="1200px" mx="auto">
      <Heading textAlign="center">Explore Our Website Templates</Heading>
      <Text mt={2} textAlign="center">
        Explore Our Website Templates
        At CubiColour, we offer a collection of professionally designed website templates to help you launch your online presence quickly and effortlessly. Whether you need a sleek business site, a modern portfolio, or a powerful e-commerce store, we have the perfect template for you.
        <br /><br />
        💡 Why Choose Our Templates?
        <br />
        ✔️ Beautiful, responsive designs
        <br />
        ✔️ Fast-loading and SEO-friendly
        <br />
        ✔️ Easy customization options
        <br />
        ✔️ Optimized for all devices
        <br /><br />
        ✨ How It Works:
        <br />
        1️⃣ Browse our collection of ready-made templates.
        <br />
        2️⃣ Choose the one that best fits your needs.
        <br />
        3️⃣ Customize it to match your brand (or let us do it for you!).
        <br />
        4️⃣ Launch your website and start growing your business!
        <br /><br />
        🚀 Need something unique? We also offer custom website development tailored to your specific needs.
        <br /><br />
        Start exploring now and bring your vision to life!
      </Text>
      
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6} mt={4}>
        {projects.map(project => (
          <Card key={project.id}>
            <Image src={project.image} alt={project.title} />
            <CardBody>
              <Text mt={2} fontWeight="bold">{project.title}</Text>
              <Button mt={2} as="a" href={project.demoLink} target="_blank" rel="noopener noreferrer">View Demo</Button>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioPage;
