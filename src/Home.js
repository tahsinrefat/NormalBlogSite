import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    // let name = 'mario';
    const{ data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    // const[name, setName] = useState('mario');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    
//the empty array means the code inside useEffect needs to be ran only in initial render
//to run useEffect on specific state change eg. name

    // const [name, setName] = useState('mario');
    // const[age, setAge] = useState(25);
    // const handleClick = (e) =>{
    //     // console.log('hello Ninjas', e);
    //     // name = 'luigi';
    //     setName('luigi');
    //     setAge(30);
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello '+name, e.target);
    // }

    return ( 
        <div className="home">
            {/* <h2>Homepage</h2> */}
            {/* <p>{ name } is { age } years old.</p> */}
            {/* <button onClick = {handleClick}>Click me</button>
            <button onClick = {(e) => {
                handleClickAgain('mario', e);
            }}>Click Me Again</button> */}
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {/* {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>} */}
            {/* so "blogs &&" for the null check */}
            {/* <button onClick={() => setName('luigi')}>Change Name</button> */}
            {/* <p>{ name }</p> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" /> */}
        </div>
     );
}
 
export default Home;
//props
//filter an array in mario's blog
//the name var is a reactive var
//if function writted with braces it is invoked automatically
//why the arrow inside the onclick on click me again? cause it will not invoke the function automatically once it loads
//passing the event object as a parameter e
