import {useState} from 'react'

const ListPender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"])


  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListPender