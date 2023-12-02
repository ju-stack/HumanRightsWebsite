function vwImg(){
  const vw = window.innerWidth;
  
  if(vw>=900){
    return {width:"auto", boxShadow: "0 0 10px grey", margin:"20px", display:"block"}
  } else{
    return {width: "90vw", boxShadow: "0 0 5px grey", margin:"5vw", display:"block"}
  }
}

function vwBigDiv(){
  const vw = window.innerWidth;
  
  if(vw>=900){
    return {display:"flex", alignItems: "center"}
  } else{
    return {display:"block", alignItems: "center"}
  }
}

function SmallCase(props) {
  console.log(props.alt)
    return (
      <div style={vwBigDiv()}>
        <img title={props.alt} alt={props.title} src={`img/${props.imgName}`} style={vwImg()}/>
        <div style={{margin:"5vw"}}>
          <h2>{props.title}</h2>
          <div>{props.story}</div>
        </div>
      </div>
    );
  }

export default SmallCase;