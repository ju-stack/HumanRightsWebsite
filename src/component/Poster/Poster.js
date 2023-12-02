function Poster() {
    return(
      <div style={{textAlign: "center"}}>
        <h1 style={{textAlign:"center", margin:"20px"}}>
            교권 포스터
        </h1>
        <div style={{display : "flex", alignItems : "center", margin:"0 auto", width: "min-content"}}>
            <img alt="교권 침해를 다룬 포스터이다." src="img/poster.png" style={{display:"inline"}}/>
            <div style={{display:"inline", width:"30vw", height:"auto", margin:"2vw"}}>
              <span style={{color:"green", fontWeight:"bold"}}>교권</span> 추락에 대한 <span style={{color:"red", fontWeight:"bold"}}>경고</span>와 <span style={{color:"blue", fontWeight:"bold"}}>존중</span>에 대한 의미를 가진 포스터이다.
            </div>
        </div>
      </div>
    );
  }

export default Poster;