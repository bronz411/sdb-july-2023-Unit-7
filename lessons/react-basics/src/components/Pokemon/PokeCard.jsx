const PokeCard = (props) => {
    let {imageURL,name,strengths,weaknesses} = props
    return ( <>
    <div >
        <img src={imageURL} alt=""style={{border: "solid 2px black"}} />
        <div className="nameDiv">
        {name}
        </div>
        <div>
        Strengths: {strengths.join(", ")}
        </div>
        <div>
        Weaknesses: {weaknesses.join(", ")}
        </div>
    </div>
    </> );
}
 
export default PokeCard;