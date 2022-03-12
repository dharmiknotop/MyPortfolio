const Techicon = ({ Techicon1, Techname }) => {
  return (
    <>
      <div className="TechIcon m-2 ">
        <span className="Icon d-flex justify-content-center" id="icon">
          {Techicon1}
          <br />
        </span>
        <div className="Icontext"> {Techname}</div>
      </div>
    </>
  )
}

export default Techicon
