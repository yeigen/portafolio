import { type IconName } from '../icons'
import Icon from './Icon'
import './css/Icons.css'

const links: { href: string; key: IconName }[] = [
		{href:"https://github.com/yeigen", key:"github",},
		{href:"https://www.youtube.com/@yeigenx", key:"youtube",},
		{href:"https://www.linkedin.com/in/gabriel-eduardo-martinez-martinez-a12068267/", key:"linkedin",},
		{href:"https://abodiapp.com", key:"abodi",},
]

function Icons() {
	return (
		<div className="social-icons">
		{links.map(({ href, key }) => (
			<a key={key} href={href} target="_blank" rel="noopener noreferrer">
				<Icon name={key} />
			</a>
		))}
		</div>
	)
}

export default Icons
