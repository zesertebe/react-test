import React from 'react';
import NavBar from './NavBar';
import styles from '@/styles/MainLayout.module.css';

const MainLayout = ({ children }:{children: React.ReactNode}  ) => {
	return (
		<div className={styles.MainLayout}>
		<NavBar/>
			<div>{children}</div>
		</div>
	);
};

export default MainLayout;
