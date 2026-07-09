import {icons} from '../icons'

function Tren() {

const TechIcons = [
		{icon:"python",},
		{icon:"fastapi",},
		{icon:"postgres",},
		{icon:"mysql",},
		{icon:"react",},
		{icon:"vue",},
		{icon:"pandas",},
		{icon:"matplotlib",}
]

  return (
    <div className='tren'>
      <div className='tren-track'>
        <div className="tech-icons">
      {TechIcons.map(({icon}) => (
          <a key={icon}>
            <svg
              viewBox={icons[icon].viewBox}
              fill={icons[icon].fill}
              xmlns="http://www.w3.org/2000/svg"
            >
            <g transform={icons[icon].transform}>
              {icons[icon].paths.map((p, i) => (
                <path key={i} d={p.d} fill={p.fill} />
              ))}
            </g>
            </svg>
          </a>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Tren