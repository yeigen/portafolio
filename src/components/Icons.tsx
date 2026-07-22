import {icons} from '../icons'
import './css/Icons.css'

const links = [
		{href:"https://github.com/yeigen", key:"github",},
		{href:"https://www.youtube.com/@yeigenx", key:"youtube",},
		{href:"https://www.linkedin.com/in/gabriel-eduardo-martinez-martinez-a12068267/", key:"linkedin",},
		{href:"https://abodiapp.com", key:"abodi",},
]

function Icons() {
	return (
		<div className="social-icons">
		{links.map(({ href, key }) => {
			const icon = icons[key]
			return (
				<a key={key} href={href} target="_blank" rel="noopener noreferrer">
					{'url' in icon ? (
						<img src={icon.url} alt={key} />
					) : (
						<svg
							viewBox={icon.viewBox}
							fill={icon.fill}
							xmlns="http://www.w3.org/2000/svg"
						>
							<g transform={icon.transform}>
								{icon.paths.map((p, i) => (
									<path key={i} d={p.d} fill={p.fill} />
								))}
							</g>
						</svg>
					)}
				</a>
			)
		})}
		</div>
	)
}

export default Icons
