import UserCard from './components/UserCard'

const App = () => {
  return (
    <>
      <div className='user'>
        <UserCard userName="Nirupama" userRole="Frontend Developer" userCity="Bhubaneswar" userImage="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8zNV9iZWF1dGlmdWxfc21pbGluZ195b3VuZ19pbmRpYW5fYnVzaW5lc3Nfd29tYV8yYWM3MjMyNS1jZmU3LTQ5ODgtODBkNi03YjViZTg3ODYzNjMucG5n.png" alt="Image of a women" />

        <UserCard userName="Rahul" userRole="Backend Developer" userCity="Mumbai" userImage="https://imgcdn.stablediffusionweb.com/2024/5/14/53002c3e-d7a5-4972-9aa0-0fec6c34bc8f.jpg"/>

        <UserCard userName="Ananya" userRole="UI/UX Designer" userCity="London" userImage="https://static.vecteezy.com/system/resources/previews/025/474/309/non_2x/portrait-of-a-professional-woman-in-a-suit-business-woman-standing-in-an-office-ai-generated-photo.jpg"/>
      </div>
    </>
    
  )
}

export default App
