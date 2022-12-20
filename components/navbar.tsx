import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav>
      <Link href='/' className={router.pathname === '/' ? 'active' : ''}>Index</Link>
      <Link href='/about' className={router.pathname === '/about' ? 'active' : ''}>About me</Link>
      <Link href='/projects' className={router.pathname === '/projects' ? 'active' : ''}>Projects</Link>
    </nav>
  );
};

export default Navbar;