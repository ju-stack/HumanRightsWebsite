function Protect(props) {
    return (
      <div style={{margin:"5vw"}}>
        <h2>{props.title}</h2>
        <div style={{width:"65vw", margin: "0 auto"}}>
            {props.story}
        </div>
      </div>
    );
  }

export default Protect;