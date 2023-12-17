import { ContactInfo } from '@/components/ContactInfo';
import Head from 'next/head';

const Contact = ({ contact }) => {
  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>
      <ContactInfo contact={contact} />
    </div>
  );
};

export default Contact;
