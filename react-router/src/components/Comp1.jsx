import { useState } from "react";
import { student, students } from "../data/data";
import Student from "./Student";
function Comp1(){

    // 외부에서 가져온 students 값을 useState로 구성하려면...
    // users에서 한 추가, 삭제, 수정 할 수 있음.
    const [ studentall, setStudentsall ] = useState(students);

    return(
        <div className="comp comp1">
            <h2>Comp1.jsx Area</h2>
            {/* <h3>{student.name}({student.age}) / {student.phone} / {student.address} </h3> */}
            <Student std={student} />
            <hr />

            <h2>students array 가져오기</h2>

            {/* students 배열의 내용을 map으로 <Student /> 호출 출력 */}
            {
                studentall.map((s,i) => <Student std={s} key={i} />)
            }
        </div>
    )
}

export default Comp1;