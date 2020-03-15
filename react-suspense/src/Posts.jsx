import React from 'react';

export const Posts = ({ resourse }) => {
    const posts = resourse.posts.read();
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
};