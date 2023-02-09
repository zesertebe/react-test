import { useState, useEffect } from 'react';
import styles from '@/styles/DropDownSearch.module.css';

const DropDownSearch = (props: any) => {
	let { defaultOption, options, callback } = props;
	const [search, setSearch] = useState<string>('');
	const [searchResults, setSearchResults] = useState<string[]>(options);
	const [showResults, setShowResults] = useState<boolean>(false);
	const [containerRotate, setContainerRotate] = useState<boolean>(false);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
		setShowResults(true);
		if (event.target.value.length > 0) {
			let _options = options.filter((option: string) => option.includes(event.target.value));
			if(options.length){
				setSearchResults(_options);
				return;
			}
		}
		setSearchResults(options);
		return;
	};


	const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
		setShowResults(!showResults);
		setContainerRotate(!containerRotate);
	};
	
	const handleSelectClick = (event: React.MouseEvent<HTMLDivElement>, element: string) => {
		setSearch(element);
		setShowResults(false);
		setContainerRotate(false);
	}
	
	useEffect(() => {
		setSearchResults(options);
		if (search.length > 0) {
			setShowResults(true);
			const results = searchResults.filter((result) => result.includes(search));
			setSearchResults(results);
		} else {
			setShowResults(false);
		}
	}
	, [options]);
	

	return (
		<div className={`${styles.container} ${containerRotate? styles.container__rotate :''} `}>
			<input
				className={styles.input}
				type="text"
				placeholder="Search"
				value={search}
				onChange={handleInputChange}
				onClick={handleInputClick}
			/>
			{ !searchResults.length &&(
				<div  className={`${styles.resultContainer__item} ${styles.resultContainer__item__disabled}`}>
					No items were found
				</div>
			 )}
			{ showResults &&  (
				<div className={styles.resultContainer}>
					{searchResults.map((result, index) => (
						<div key={result} onClick={ (e) => handleSelectClick(e, result) } className={styles.resultContainer__item}>
							{result}
						</div>
					))}
				</div>
			)}
			
		</div>
	);
};

export default DropDownSearch;

