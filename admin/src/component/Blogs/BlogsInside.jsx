import React, { useEffect, useState } from 'react'
import './BlogsInside.css'
import { Link, useParams } from 'react-router-dom'
// import axios from 'axios'
import { API_URL, IMG_URL } from '../../config'

const BlogsInside = () => {
    const params = useParams()
    console.log(params.id)
    const [blog, setblog] = useState({})
    useEffect(() => {
        fetch(`${API_URL}/blogdetails/${params.id}`)
            .then(res => res.json())
            .then(data => setblog(data))



    }, [])
    return (
        <>
            <div className="blog-detail-page">
                <div className="row mx-4">
                    <div className="col">
                        <div>
                            <div style={{"display":"flex","justifyContent":"center"}}>
                            <img src={`${IMG_URL}/${blog.blogPic}`} alt style={{"width":"500px","height":"500px","margin":"auto"}} />

                            </div>
                            <div className="custom-sofa-details">
                                <div>{blog.createdAt}</div>
                                <hr />
                                <div>{blog.title}</div>
                            </div>
                        </div>
                        <div className="custom-new-sofainfo">
                            <h2>{blog.title}</h2>
                            <p>{blog.content}</p>
                        </div>
                        <div className=" mt-5 custom-seeMore" >
                            <Link to="/blogs"><h4>See More</h4></Link>

                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default BlogsInside
