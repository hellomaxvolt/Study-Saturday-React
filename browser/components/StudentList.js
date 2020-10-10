import React from "react";

function StudentList(props) {
  return <div>
      {props.students.map((student) => <div key={student.id}>{student.fullName}</div>)}
      </div>
}

export default StudentList;
