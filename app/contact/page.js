import React from 'react';
import Minibanner from '../common/minibanner';
import ContactSection from '../components/contact/contactSection';

const ContactPage = () => {
  return (
    <div>
      <Minibanner
        pageName="Contact Us"
        aboutPage="Thank you for your interest in getting to know us."
      />
      <ContactSection />
    </div>
  );
};

export default ContactPage;
