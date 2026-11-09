import { redes } from '../redes'
import Icon from './Icon'
import './css/Icons.css'

function Icons() {
	return (
		<div className="social-icons">
		{redes.map(({ href, key, nombre }) => (
			<a key={key} href={href} target="_blank" rel="noopener noreferrer" aria-label={nombre}>
				<Icon name={key} />
			</a>
		))}
		</div>
	)
}

export default Icons
