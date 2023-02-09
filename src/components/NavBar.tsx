import Link from 'next/link';
import styles from '@/styles/NavBar.module.css';
const NavBar = () => {
	return (
	<>
		<nav className={`${styles.NavBar} bg-dark`}>
			<ul className={styles.NavBar__ul}>
				<li><Link href="/" className={styles.NavBar__ul__li}>Inicio</Link></li>
				<li><Link href="/about" className={styles.NavBar__ul__li}>Acerca De</Link></li>
			</ul>
		</nav>
		</>
	)
};

export default NavBar;
