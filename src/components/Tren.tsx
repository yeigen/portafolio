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
      {TechIcons.map(({icon}) => {
          const data = icons[icon]
          if ('url' in data) return null   // Tren solo muestra SVG, no imagenes
          return (
            <a key={icon}>
              <svg
                viewBox={data.viewBox}
                fill={data.fill}
                xmlns="http://www.w3.org/2000/svg"
              >
              <g transform={data.transform}>
                {data.paths.map((p, i) => (
                  <path key={i} d={p.d} fill={p.fill} />
                ))}
              </g>
              </svg>
            </a>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default Tren