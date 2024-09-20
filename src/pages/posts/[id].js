import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PostsById = () => {
    const router = useRouter();
    console.log(router.query.id);
    const [comments, setComments] = useState([]);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        if (router.query.id) {
            getComments();
            getPosts();
        }
    }, [router.query]);
    const getComments = () =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${router.query.id}/comments`)
            .then((res) => res.json())
            .then((json) => setComments(json));
    }

    const getPosts = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${router.query.id}`)
            .then((res) => res.json())
            .then((json) => setPosts(json));
    }

    return (
        <>
            <div className='head'>
                <h1>COMMENTS</h1>
            </div>
            <div className='posts-container'>
                <div className="post-container">
                    <div className='upside-container'>
                        <div className='userName-container'>
                            <div className='userName-box'>
                                <p>Reza Chatri</p>
                            </div>
                            <div className='name-box'>
                                <p>@Reza</p>
                            </div>
                        </div>
                        <div className='time-container'>
                            <p>1 Hour Ago</p>
                        </div>
                    </div>
                    <div className='downside-container'>
                        <div className='title-container'>
                            <p>{posts.title}</p>
                        </div>
                        <div className='body-container'>
                            <p>{posts.body}</p>
                        </div>
                    </div>
                    <div className='porkon2'></div>
                    <div className='comments-container'>
                        {comments.map((items) => {
                            return (
                                <div className='comment-container'>{items.body}</div>
                            )
                                ;
                        })}
                    </div>
                    <div className='porkon1'></div>
                </div>

            </div>
        </>
    );
};

export default PostsById;