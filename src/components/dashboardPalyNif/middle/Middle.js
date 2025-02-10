
import React, { useState } from 'react'
import { GoVideo } from "react-icons/go";
import { HiOutlinePhoto } from "react-icons/hi2";
import { PiArticleNyTimesFill } from "react-icons/pi";
import img1 from '../../../asesets/banner/1738137797045.jpg'
import img2 from '../../../asesets/banner/1737167499916.jpg'
import { MdOutlineMood } from 'react-icons/md';
import EmojiPicker from 'emoji-picker-react';
import SendModal from './sendModal/SendModal';
import Repost from './repost/Repost';
import ImageIditor from './imageEditer/ImageIditor';

const Middle = () => {
    const [modalShow, setModalShow] = useState(false);
    const [repost, setRepost] = useState(false)
    const [imgaeEditorShow, setImageEditor] = useState(false)
    const [emogiOpen, setEmogiOpen] = useState(false)
    const [commentOpen, setCommentOpen] = useState(false)

    const emoigiOpenSubmit = (id) => {
        setEmogiOpen(prevState => !prevState);
    }
    return (
        <>
            <div className="col-lg-6">
                <div className="card-home post-card">
                    <div className="setel d-flex justify-content-between">
                        <img src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="User" className="profile-image-sec rounded-circle me-2" />
                        <input type="text" className="form-control ai-input" placeholder="Start a post, try writing with AI" />
                    </div>
                    <div className='d-flex justify-content-between mt-3'>
                        <button className="btn btn-light btn-light-light">
                            <GoVideo style={{ marginRight: '5px', fontSize: '25px', backgroundColor: "rgb(75 130 11)", padding: "5px", borderRadius: "5px", color: "rgb(243 241 241)" }} />
                            Video
                        </button>
                        <button className="btn btn-light btn-light-light" type='button' onClick={() => setImageEditor(true)}>
                            <HiOutlinePhoto style={{ marginRight: '5px', fontSize: '25px', backgroundColor: "rgb(14 45 147)", padding: "5px", borderRadius: "5px", color: "rgb(251 251 251" }} />
                            Photo
                        </button>
                        <button className="btn btn-light btn-light-light">
                            <PiArticleNyTimesFill style={{ marginRight: '5px', fontSize: '25px', backgroundColor: "rgb(188 13 13)", padding: "5px", borderRadius: "5px", color: "rgb(250 248 248)" }} />
                            Write Article
                        </button>
                    </div>

                </div>
                <div className="card-home post-card">
                    <div className="d-flex align-items-center mb-2">
                        <img src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="User" className=" profile-image-sec rounded-circle me-2" />
                        <div>
                            <h6 className="mb-0">Bhavna Naliyadhara</h6>
                            <p className="mb-0 text-muted">Frontend Developer || HTML CSS || JavaScript WordPress</p>
                        </div>
                    </div>
                    <p>🚀 We’re Hiring: Frontend Developer</p>
                    <p><strong>Location:</strong> Remote</p>
                    <div className='post-sect'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='like-comment'>
                        <p>Like <span>60k</span></p>
                        <p>40k <span>comment</span></p>
                    </div>
                    <div className='media-sec'>
                        <button className="btn btn-outline-primary">Like</button>
                        <button className="btn btn-outline-secondary" type='button' onClick={() => setCommentOpen(!commentOpen)}>Comment</button>
                        <button className="btn btn-outline-success" type='button' onClick={() => setRepost(true)}>Repost</button>
                        <button className="btn btn-outline-info" type='button' onClick={() => setModalShow(true)}>Send</button>
                    </div>

                    {commentOpen &&
                        <div className='comment-send mt-3'>
                            <div className="d-flex align-items-center comment-box-sec">
                                <img src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="Profile" className="profile-img" />
                                <div className="ms-2  coment-input">
                                    <input type="text" className="form-control ai-input" placeholder="Add a Comment..." />
                                    <div className='emogi-icon'>
                                        <MdOutlineMood style={{ marginRight: '12px' }} onClick={emoigiOpenSubmit} />
                                        <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
                                            <HiOutlinePhoto />
                                        </label>
                                        <input
                                            id="file-upload"
                                            type="file"
                                            style={{ display: 'none' }}
                                            accept="image/*"

                                        />
                                    </div>
                                    {emogiOpen &&
                                        <div className='imogi-set'>
                                            <EmojiPicker />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    }


                    <div className="comment-box">
                        <div className="d-flex align-items-center comment-box-sec">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg" alt="Profile" className="profile-img" />
                            <div className="ms-2">
                                <a href="#" className="comment-author">Deepak Shakya</a>
                                <span className="text-muted">· 5d</span>
                                <div className="text-muted" style={{ fontSize: 14 }}>Sr. Business Development Executive</div>
                            </div>
                        </div>
                        <div className="comment-text mt-2">I'm interested</div>
                        <div className="d-flex align-items-center mt-2">
                            <span className="me-3 text-muted" style={{ cursor: 'pointer' }}>👍 1</span>
                            <span className="text-muted" style={{ cursor: 'pointer' }}>Reply</span>
                        </div>
                        <div className="reply mt-3">
                            <div className="d-flex align-items-center comment-box-sec">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg" alt="Profile" className="profile-img" />
                                <div className="ms-2">
                                    <a href="#" className="comment-author">HR Samridhi Shukla</a>
                                    <span className="author-badge">Author</span>
                                    <span className="text-muted">· 3d</span>
                                    <div className="text-muted" style={{ fontSize: 14 }}>HR | MBA in Human Resource | Recruiter | Talent Acquisition</div>
                                </div>
                            </div>
                            <div className="comment-text mt-2">
                                <a href="#" className="comment-author">Deepak Shakya</a> share your CV at <a href="mailto:career@codeflies.com">career@codeflies.com</a>
                            </div>
                            <div className="d-flex align-items-center mt-2">
                                <span className="text-muted" style={{ cursor: 'pointer' }}>Like</span>
                                <span className="ms-3 text-muted" style={{ cursor: 'pointer' }}>Reply</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card-home post-card">
                    <div className="d-flex align-items-center mb-2">
                        <img src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="User" className=" profile-image-sec rounded-circle me-2" />
                        <div>
                            <h6 className="mb-0">Moinuddin</h6>
                            <p className="mb-0 text-muted">Hey fellow coders! 👋</p>
                        </div>
                    </div>
                    <p>🚀As developers, we've all faced those projects that seem overwhelming. But, what sets successful coders apart is their approach to tackling these challenges. 🤔</p>
                    <p><strong>Location:</strong> New Delhi</p>
                    <div className='post-sect'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='like-comment'>
                        <p>Like <span>60k</span></p>
                        <p>40k <span>comment</span></p>
                    </div>
                    <div className='media-sec'>
                        <button className="btn btn-outline-primary">Like</button>
                        <button className="btn btn-outline-secondary" type='button' onClick={() => setCommentOpen(!commentOpen)}>Comment</button>
                        <button className="btn btn-outline-success">Repost</button>
                        <button className="btn btn-outline-info">Send</button>
                    </div>

                    {commentOpen &&
                        <div className='comment-send mt-3'>
                            <div className="d-flex align-items-center comment-box-sec">
                                <img src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="Profile" className="profile-img" />
                                <div className="ms-2  coment-input">
                                    <input type="text" className="form-control ai-input" placeholder="Add a Comment..." />
                                    <div className='emogi-icon'>
                                        <MdOutlineMood style={{ marginRight: '12px' }} onClick={emoigiOpenSubmit} />
                                        <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
                                            <HiOutlinePhoto />
                                        </label>
                                        <input
                                            id="file-upload"
                                            type="file"
                                            style={{ display: 'none' }}
                                            accept="image/*"

                                        />
                                    </div>
                                    {emogiOpen &&
                                        <div className='imogi-set'>
                                            <EmojiPicker />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    }


                    <div className="comment-box">
                        <div className="d-flex align-items-center comment-box-sec">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg" alt="Profile" className="profile-img" />
                            <div className="ms-2">
                                <a href="#" className="comment-author">Deepak Shakya</a>
                                <span className="text-muted">· 5d</span>
                                <div className="text-muted" style={{ fontSize: 14 }}>Sr. Business Development Executive</div>
                            </div>
                        </div>
                        <div className="comment-text mt-2">If it Works , Don't touch it</div>
                        <div className="d-flex align-items-center mt-2">
                            <span className="me-3 text-muted" style={{ cursor: 'pointer' }}>👍 1</span>
                            <span className="text-muted" style={{ cursor: 'pointer' }}>Reply</span>
                        </div>
                        <div className="reply mt-3">
                            <div className="d-flex align-items-center comment-box-sec">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg" alt="Profile" className="profile-img" />
                                <div className="ms-2">
                                    <a href="#" className="comment-author">HR Samridhi Shukla</a>
                                    <span className="author-badge">Author</span>
                                    <span className="text-muted">· 3d</span>
                                    <div className="text-muted" style={{ fontSize: 14 }}>HR | MBA in Human Resource | Recruiter | Talent Acquisition</div>
                                </div>
                            </div>
                            <div className="comment-text mt-2">
                                <a href="#" className="comment-author">HR Samridhi Shukla</a> share your Fast <a href="mailto:abc123">abc123.com</a>
                            </div>
                            <div className="d-flex align-items-center mt-2">
                                <span className="text-muted" style={{ cursor: 'pointer' }}>Like</span>
                                <span className="ms-3 text-muted" style={{ cursor: 'pointer' }}>Reply</span>
                            </div>
                        </div>
                    </div>
                </div>
                <SendModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}

                />

                <Repost
                    show={repost}
                    onHide={() => setRepost(false)}

                    setRepost={setRepost}
                />

                <ImageIditor
                    show={imgaeEditorShow}
                    onHide={() => setImageEditor(false)}
                />
            </div>

        </>
    )
}

export default Middle