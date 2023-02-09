import Head from 'next/head';
interface HeadProps {
	title?: string,
	description?: string,
};
const HeadComponent = (props: HeadProps) => {
	return (
		<Head>
			<title>{props.title ?? 'Proyecto de React para Linktic'}</title>
			<meta name="description" content={props.description ?? 'Frontend Challenge en rect para la empresa LinkTic'} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	)
}

export default HeadComponent;
