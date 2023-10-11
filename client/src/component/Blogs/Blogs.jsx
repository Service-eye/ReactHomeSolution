import React, { useEffect, useState } from 'react'
import "./Blogs.css"
import { Link } from 'react-router-dom'
import axios from "axios"
import { API_URL, IMG_URL } from '../../Config'

const Blogs = () => {
    const [blog, setBlog] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get(`${API_URL}/bloglist`)
            .then(response => setBlog(response.data))

            .catch(error => console.log(error))


        //    const getdata=async()=>{
        //        await fetch(`http://localhost:2000/api/bloglist`)
        //         .then(response => (response.json()))
        //         .then(json => console.log(json))
        //     }
        //     getdata()



    }, [])

    return (
        <>
            <div className="blogs-container">
                <div className="blogs ">
                    <div className="row ">
                        {
                            blog && blog.map((b, i) => {
                                return <div className="col-sm-12 col-md-6 col-lg-4" >
                                    <div className="blogContents " key={i}>
                                        <div className="custom-overflow">
                                            <img src={`${IMG_URL}/${b.blogPic}`} alt="Blog Image" className="blog_Image " />
                                        </div>
                                        <div className="blog_ImageText ">
                                            <div className="postDate">{b.createdAt.slice(0,10)}

                                            </div>
                                            <div className="blogDiscriptioni ">
                                                {b.content.slice(0, 35)}...

                                            </div>
                                            <Link to={`/bloginside/${b._id}`} className="readMore">Read More</Link>

                                        </div>
                                    </div>
                                </div>
                            })

                        }


                    </div>


                </div>
            </div>

        </>
    )
}

export default Blogs
