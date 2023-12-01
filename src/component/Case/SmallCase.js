function SmallCase(props) {
  console.log(props.alt)
    return (
      <div style={{display: "flex", alignItems: "center"}}>
        <img title={props.alt} alt={props.title} src={`img/${props.imgName}`} style={{boxShadow: "0 0 10px grey", margin:"20px"}}/>
        <div>
          <h2>{props.title}</h2>
          <div>{props.story}</div>
        </div>
      </div>
    );
  }

export default SmallCase;