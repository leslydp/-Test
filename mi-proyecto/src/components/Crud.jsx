import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts"

function Crud() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [editing, setEditing] = useState(null);

    useEffect(() => {
        axios.get(API_URL).then((res) => setPosts(res.data.slice(0, 5)));
    }, []);

    const createPost = async () => {
        const res = await axios.post(API_URL, {title, body, useId: 1})
        setPosts([res.data, ...posts]);
        setTitle("");
        setBody("");
    };

    const deletePost = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        setPosts(posts.filter((post) => post.id !== id));
    };

    const editPost = (post) => {
        setEditing(post);
        setTitle(post.title);
        setBody(post.body);
    }; 

    const updatePost = async () => {
        const res = await axios.put(`${API_URL}/${editing.id}`, { title, body });
        setPosts(posts.map((post) => (post.id === editing.id ? res.data : post)));
        setEditing(null);
        setTitle("");
        setBody("");
    };

    return (
        <div>
            <h2>CRUD con JasonPlaceholder</h2>

            {/*Formulario*/}
            <input 
                type="text"
                placeholder="Titulo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input 
                type="text"
                placeholder="Cuerpo"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />

            {editing ? (
                <button onClick={updatePost}>Actualizar</button>
            ): (
                <button onClick={createPost}>Crear</button>
            )}

            {/*Lista de Post*/}
            <ul>
                {posts.map((post) =>(
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <button onClick={() => editPost(post)}>✏️ Editar</button>
                        <button onClick={() => deletePost(post.id)}>🗑️ Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Crud;