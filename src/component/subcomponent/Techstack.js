import { IoMdArrowDropright } from 'react-icons/io'

const Techstack = (props) => {
  return (
    <>
      <div className="techstack " style={{ margin: '1rem 1rem 1rem 0' }}>
        <span
          className="cyan"
          style={{ position: 'relative', marginRight: '.5rem' }}
        >
          <IoMdArrowDropright
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: ' translate(-50%, -50%)',
            }}
          />
        </span>
        {props.name}
      </div>
    </>
  )
}

export default Techstack
