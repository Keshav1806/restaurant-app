import React from 'react'
import { blog } from "../data"

const Blog = () => {
    return (
        <>
            <div className="blog">
                <h1>OUR <span>BLOGS</span></h1>
                <div className="blogcont">
                    {blog.map((item, index) => (
                        <div className="blogitem" key={index}>
                            <div className="img">
                                <img src={item.img} alt="no img" />
                            </div>
                            <div className="bloginfo">
                                <h2>{item.title}</h2>
                                <h3>{item.author}</h3>
                                <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Blog
