import React from 'react'
import './GetInTouch.css'

const GetInTouch = () => {
    return (
        <>
            <div className="containter-fluid mt-5 mx-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6">
                        <div className="form-div-100">
                            <form>
                                <h1 className="form-h1-102 text-white text-center">Get In Touch</h1>
                                <div className="d-flex flex-column form-div-104">
                                    <input type="text" placeholder="Full Name" className="my-4" />
                                    <input type="email" placeholder="Email" className="my-4" />
                                    <input type="number" placeholder="Phone Number" className="my-4" />
                                    <textarea name="message" rows={6} placeholder="Message" className="my-4" defaultValue={""} />
                                    <div className="mt-5">
                                        <button className="send-button-114">Send Message<i className="fa-regular fa-paper-plane ms-2" /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 custom-map-125">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8049843454905!2d85.3329713755604!3d27.692421676191053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d6b8d98047%3A0xfe0592f8cbca59d0!2sService%20Eye%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1695184491044!5m2!1sen!2snp" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default GetInTouch
