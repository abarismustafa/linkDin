
import React from 'react'

const Middle = () => {
    return (
        <>
            <div className="col-md-6">
                <div className="card-home post-card">
                    <div className="d-flex justify-content-between">
                        <input type="text" className="form-control" placeholder="Start a post, try writing with AI" />
                        <button className="btn btn-light ms-2">Video</button>
                        <button className="btn btn-light ms-2">Photo</button>
                        <button className="btn btn-light ms-2">Write Article</button>
                    </div>
                </div>
                <div className="card-home post-card">
                    <div className="d-flex align-items-center mb-2">
                        <img src="https://via.placeholder.com/50" alt="User" className="rounded-circle me-2" />
                        <div>
                            <h6 className="mb-0">Bhavna Naliyadhara</h6>
                            <p className="mb-0 text-muted">Frontend Developer || HTML CSS || JavaScript WordPress</p>
                        </div>
                    </div>
                    <p>🚀 We’re Hiring: Frontend Developer</p>
                    <p><strong>Location:</strong> Remote</p>
                    <div>
                        <button className="btn btn-outline-primary">Like</button>
                        <button className="btn btn-outline-secondary">Comment</button>
                        <button className="btn btn-outline-success">Repost</button>
                        <button className="btn btn-outline-info">Send</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Middle