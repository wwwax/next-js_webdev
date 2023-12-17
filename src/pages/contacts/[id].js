import { ContactInfo } from '@/components/ContactInfo';
import Head from 'next/head';

// this function is for asynchronous requests in the SSR approach
export const getServerSideProps = async (context) => {
  const { id } = context.params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contact: data,
    },
  };
};

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
