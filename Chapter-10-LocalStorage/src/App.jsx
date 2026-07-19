import React, { useEffect, useState } from 'react'


const App = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [course, setCourse] = useState('')

  const [students, setStudents] = useState(() => {
    const data = localStorage.getItem("students");
    return data ? JSON.parse(data) : [];
  })

  const [editId, setEditId] = useState(null)

  function addStudent() {

    const obj = {
      id: Date.now(),
      name,
      age,
      course
    }

    setStudents([...students, obj]);

    setName('')
    setAge('')
    setCourse('')
  }

  function deleteStudent(id) {
    const updatedStudent = students.filter((student) => student.id !== id)
    setStudents(updatedStudent)
  }

  function editStudent(id) {
    const student = students.find((student) => student.id == id)

    setName(student.name)
    setAge(student.age)
    setCourse(student.course)

    setEditId(id)
  }

  function updateStudent() {
    const updatedStudents = students.map((student) =>
      student.id === editId
        ? {
          ...student,
          name,
          age,
          course,
        }
        : student
    );

    setStudents(updatedStudents);

    setName("");
    setAge("");
    setCourse("");

    setEditId(null);
  }

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);
  return (
    <>
      <div className='bg-blue-950'>
        <h1 className='text-center pt-7 pb-4 text-white font-bold text-2xl'>Student Management System</h1>
      </div>
      <div>
        <form className='flex flex-col mt-10 pl-16 pr-32 gap-5' onSubmit={addStudent}>
          <label htmlFor="Name" className='text-2xl font-semibold '>Name</label>
          <input type="text" placeholder='Enter Name' className='border pt-3 pb-2 pl-3' value={name} onChange={(e) => {
            setName(e.target.value)
          }} />

          <label htmlFor="Age" className='text-2xl font-semibold '>Age</label>
          <input type="number" placeholder='Enter Age' className='border pt-3 pb-2 pl-3' value={age} onChange={(e) => {
            setAge(e.target.value)
          }} />

          <label htmlFor="Course" className='text-2xl font-semibold '>Course</label>
          <input type="text" placeholder='Enter Course' className='border pt-3 pb-2 pl-3' value={course} onChange={(e) => {
            setCourse(e.target.value)
          }} />

          <button className='bg-blue-600 text-white pt-4 pl-5 pr-3 pb-2 text-2xl font-bold rounded-2xl cursor-pointer transition-transform duration-100 active:scale-95' onClick={(e) => {
            e.preventDefault();

            if (editId === null) {
              addStudent();
            } else {
              updateStudent();
            }

          }}>{editId === null ? "Add Student" : " Update Student "}</button>
        </form>
      </div >
      <div className='mt-10'>
        <h1 className='text-center font-bold text-2xl text-blue-950 mb-3'>Student Records</h1>
        <table className='w-[90%] border-t-2  border-black border-l-2 border-r-2  ml-14'>
          <thead>
            <tr className="bg-gray-200 border-be-2">
              <th className="border-r-2 border-black px-4 py-2">Name</th>
              <th className="border-r-2 border-black px-4 py-2">Age</th>
              <th className="border border-gray-300 px-4 py-2">Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="border-r-2 border-black px-4 py-2">
                  {student.name}
                </td>

                <td className="border-r-2 border-black px-4 py-2">
                  {student.age}
                </td>

                <td className="border-r-2 border-black px-4 py-2">
                  {student.course}
                </td>

                <td className="px-4 py-2">
                  <div className="flex justify-center gap-3">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-xl cursor-pointer transition-transform duration-100 active:scale-95" onClick={() => editStudent(student.id)}>
                      Edit
                    </button>

                    <button
                      className="bg-red-600 text-white px-4 py-2 rounded-xl cursor-pointer transition-transform duration-100 active:scale-95"
                      onClick={() => deleteStudent(student.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>

        </table>


      </div>
    </>

  )
}

export default App
