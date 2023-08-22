import Student from "./Student"
import {students} from "../../data/student-data"
const StudentInformation = (props) => {
    return ( <>
    <h2>Student Information</h2>
    <Student studentName={"John Doe"} age={25}/>
    <Student studentName={"Jane Doe"} age={28}/>
    {students.map((student)=> (
        <Student studentName={student.name} age={student.age} city={student.city} state={student.state} favoriteFood={student.favoriteFoods.join(", ")}/>
    ))}
    </> 
    );
}
 
export default StudentInformation;