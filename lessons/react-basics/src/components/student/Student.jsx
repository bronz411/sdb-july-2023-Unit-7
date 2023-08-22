const Student = (props) => {
    const{studentName, age, city, state, favoriteFood} = props
    return ( <>
    <h2>Student Name: {studentName}</h2>
    <ul>
        <li> Age: {age} </li>
        <li>City: {city} </li>
        <li>State: {state} </li>
        <li>favorite foods: {favoriteFood} </li>
    </ul>
    </> 
    );
}
 
export default Student;

/* 
add another li to the ul that ddisplays 
-student's city
-student's state
-student's favorite food in a string format using "JOIN"
*/