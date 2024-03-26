import './App.css'; 
import axios from 'axios';
import {useState, useEffect} from 'react';

function App(){
    const [content, setContent] = useState("");
    const [lists, setLists] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/list/get/');
                setLists(response.data.lists);
            } catch (error) {
                console.error('Error occurred:', error);
            }
        };

        fetchData(); 
    }, [lists]); 

    const handleSubmit = async () => {
      const response = await axios.post('http://localhost:5000/api/list/create',{
        content:content
      });
       console.log(response);
    };

    const handleDelete=async(id)=>{
       await axios.delete(`http://localhost:5000/api/list/delete/${id}`)
    }
     
    return (
        <div className="App">
            <h1>ToDo List</h1>
            <input 
                type="text" 
                placeholder="Enter the task to be done"
                onChange={(e)=>setContent(e.target.value)}
                value={content}
            />
            <button onClick={handleSubmit}>Add</button>
            <div className="container">
                <ul>
                    {lists.map((item, index) => (
                        
                        <>
                        <li key={index}>{item.content}</li>
                        <button onClick={()=>handleDelete(item._id)}>delete</button>
                        <button>Update</button>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
