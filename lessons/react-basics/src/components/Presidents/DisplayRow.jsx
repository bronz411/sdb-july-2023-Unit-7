const DisplayRow = (props) => {
    let {first, last, year, passed} = props
    const today = new Date()
    const yearToday = today.getFullYear()
    return ( <>
                <tr>
                    <td>{first}</td>
                    <td>{last}</td>
                    <td>{year}</td>
                    <td>{passed ? passed : "Still Living"}</td>
                    <td>{passed ? passed - year : yearToday - year}</td>
                </tr>
    </> );
}
 
export default DisplayRow;