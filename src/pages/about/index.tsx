import HeadComponent from '@/components/Head'
import styles from '@/styles/About.module.css';

const About = () => {
	return (
		<div>
			<HeadComponent title="Acerca De - Proyecto react para linktic" />
			<div className={styles.about}>
				<h1>Acerca De</h1>
				<p>
					Proyecto react de prueba para el puesto de desarrollador frontend en LinkTic
				</p>
				<strong>Hecho por: <cite>Arturo Gomez</cite> </strong> <br />
				<strong>2023 </strong>

			</div>
		</div>
	);
};

export default About;
