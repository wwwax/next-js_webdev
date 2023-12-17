import { Heading } from '@/components/Heading';
import Head from 'next/head';
import Link from 'next/link';

// делает запрос на сервере
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contacts: data,
    },
  };
};

const Contact = ({ contacts }) => {
  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contact List" />
      <ul>
        {contacts &&
          contacts.map(({ id, name }) => {
            return (
              <li key={id}>
                <Link href={`/contacts/${id}`}>{name}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Contact;
