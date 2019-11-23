
import React from 'react';

const studentView = (props: {
    student: Student
}) => {
    const { student } = props;

    return (
        <div className="row">
            <div>
                <p>Name : {student.name}</p>
            </div>
            <div>
                <p>Age : {student.age}</p>
            </div>
        </div>
    );
};

export default studentView;
