import { useState } from "react"

const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: "My New Website", body: "lorem ipsum ...", author: "ardhan", id: 1},
        {title: "Welcome to Party", body: "lorem ipsum ...", author: "ardhan", id: 2},
        {title: "Web dev top tips", body: "lorem ipsum ...", author: "ardhan", id: 3},
    ])
    
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;

/*
const [name, setName] = useState("aripp")
    const [age, setAge] = useState(23)

    const handleClick = () => {
        setName("adellaaaa")
        setAge(17)
    } 
    <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        
    */