import styles from '@/styles/Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
];

export const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/robot.png" width={48} height={48} alt="robot" />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, path, title }) => (
          <Link
            className={pathname === path ? styles.active : null}
            key={id}
            href={path}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};
