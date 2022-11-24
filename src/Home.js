import { useState } from "react"

const Home = () => {
    const [name, setName] = useState("aripp")
    const [age, setAge] = useState(23)

    const handleClick = () => {
        setName("adellaaaa")
        setAge(17)
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;