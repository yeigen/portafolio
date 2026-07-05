import {icons} from '../icons'
import './css/Icons.css'

const links = [
		{href:"https://github.com/yeigen", key:"github",},
		{href:"https://www.youtube.com/@yeigenx", key:"youtube",},
		{href:"https://www.linkedin.com/in/gabriel-eduardo-martinez-martinez-a12068267/", key:"linkedin",}
]

function Icons() {
		return (
			<div className="social-icons">
			{links.map(({ href, key }) => (
					<a key={key} href={href} target="_blank" rel="noopener noreferer">
						<svg
							viewBox={icons[key].viewBox}
							fill={icons[key].fill}
							xmlns="http://www.w3.org/2000/svg"
						>
						<g transform={icons[key].transform}>
							<path d={icons[key].path} />
						</g>
						</svg>
					</a>
				))}
		</div>
	)
}
export default Icons