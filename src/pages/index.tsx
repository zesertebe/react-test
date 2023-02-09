import styles from '@/styles/Home.module.css'
import HeadComponent from '@/components/Head'
import  GetApiData  from '@/utils/api';
import { useState, useEffect } from 'react';
import type { DataFruits  } from '@/types/api';
import DropDownSearch from '@/components/DropDownSearch';

export default function Home() {
	const voidFruits: DataFruits = {description: '', fruits: []};
	const [fruits, setFruits] = useState<DataFruits>(voidFruits);
	const GetFruits = async () => {
		const data = await GetApiData('/api/fruits');
		setFruits(data);
		return data;
	}
	useEffect(() => {
		GetFruits();
	}, []);
  return ( <>
		<HeadComponent/>
      <main className={styles.main}>
					<h1>{fruits.description}</h1>
					<DropDownSearch
						defaultOption={fruits.description}
						options={fruits.fruits}
						callback={(option: string) =>{} }
					/>
      </main>
    </>
  )
}
