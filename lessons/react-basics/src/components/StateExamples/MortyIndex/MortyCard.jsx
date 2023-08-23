const MortyCard = (props) => {
    let {name, image, status, species} = props
    return ( <>
    <div className="cardWrapperDiv">
        <div className="imgDiv" >
        <img src={image} alt={name} />
        </div>
        <div className="textboxDiv">
            <div className="textContentDiv">
             Name: {name}<br/>
             </div> <div className="textContentDiv">
             Status: {status}<br/>
             </div><div className="textContentDiv">
             Species: {species}
             </div>
            
        </div>
    </div>
    </> );
}
 
export default MortyCard;