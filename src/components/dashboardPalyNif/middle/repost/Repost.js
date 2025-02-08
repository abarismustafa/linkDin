import { Button, Card, Form, Modal } from "react-bootstrap"
import SedularPost from "./sedularPost/SedularPost"
import { useState } from "react"


const Repost = (props) => {
    const [sedulerShow, setSedulerShow] = useState(false)
    const sedulerButton = () => {
        setSedulerShow(true)
        props?.onHide(false)
    }
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title >
                        <div className="d-flex align-items-center">
                            <img src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="User" className="rounded-circle me-2" width={40} height={40} />
                            <div>
                                <h6 className="mb-0 fw-bold">Mustafa Ashraf</h6>
                                <small>Post to Anyone</small>
                            </div>
                        </div>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Start writing or use @ to mention people, companies or schools"
                        // value={postText}
                        // onChange={(e) => setPostText(e.target.value)}
                        className="mb-3"
                    />

                    {/* Embedded Post Preview */}
                    <Card className="shadow-sm">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" // Replace with actual profile image
                                    alt="Harsh Sen"
                                    className="rounded-circle me-2"
                                    width="40"
                                    height="40"
                                />
                                <div>
                                    <h6 className="mb-0 fw-bold">Harsh Sen</h6>
                                    <small>1h • 🌍</small>
                                </div>
                            </div>
                            <p className="mt-2 mb-1 fw-bold">
                                Hiring: Web Developer (MERN & DevOps)
                            </p>
                            <p className="mb-0">Position: Web Developer (MERN & DevOps)</p>
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-primary" type="button" onClick={sedulerButton}> Sehedule For Later</button>
                    <Button >Post</Button>
                </Modal.Footer>
            </Modal>

            <SedularPost
                show={sedulerShow}
                onHide={() => setSedulerShow(false)}

                onHidePrivious={props?.onHide}
                setRepost={props?.setRepost}
            />
        </>

    )
}

export default Repost