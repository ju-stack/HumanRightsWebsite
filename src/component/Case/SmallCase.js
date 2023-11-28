function SmallCase(imgLink, title, story, backgroundColor) {
    imgLink = `./${imgLink}`
    return (
      <div>
        <img src={imgLink}/>
        <h2>{title}</h2>
        <div>{story}</div>
      </div>
    );
  }

export default SmallCase;