import React from 'react';

const Education = () => {
    return (
      <div className="overflow-x-auto">
        <table className="table md:w-4/6 mx-auto my-auto">
          <caption className="text-2xl m-2 font-bold text-primary">
            My Education History
          </caption>
          <thead>
            <tr>
              <th>Institution</th>
              <th>Exam</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <td>Gunabati High School</td>
              <td>SSC</td>
              <td>Business Studies</td>
            </tr>
            <tr className="hover">
              <td>Rajshahi Govt. City College</td>
              <td>HSC</td>
              <td>Business Studies</td>
            </tr>
            <tr className="hover">
              <td>World University of Bangladesh</td>
              <td>BBA</td>
              <td>Major in Finance</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default Education;