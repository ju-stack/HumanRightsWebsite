function SmallCase(props) {
  console.log(props.alt)
    return (
      <div>
        <img title={props.alt} alt={props.title} src={`img/${props.imgName}`}/>
        <h2>{props.title}</h2>
        <div>{props.story}</div>
      </div>
    );
  }

export default SmallCase;