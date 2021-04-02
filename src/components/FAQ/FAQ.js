import React from 'react';
import { faq } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const FAQ = () => (
  <Container>
    
    <Hero titleText={faq.title} image={faq.image} />

    
  </Container>
);

export default FAQ;