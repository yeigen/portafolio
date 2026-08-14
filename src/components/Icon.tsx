import { icons, type IconName } from '../icons'
import './css/Icons.css'

type IconProps = {
	name: IconName
	className?: string
}

function Icon({ name, className }: IconProps) {
	const icon = icons[name]

	return 'url' in icon ? (
		<img src={icon.url} alt={name} className={className} />
	) : (
		<svg
			viewBox={icon.viewBox}
			fill={icon.fill}
			className={className}
			xmlns="http://www.w3.org/2000/svg"
		>
			<g transform={icon.transform}>
				{icon.paths.map((p, i) => (
					<path key={i} d={p.d} fill={p.fill} />
				))}
			</g>
		</svg>
	)
}

export default Icon
