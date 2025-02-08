import { Button, Modal } from "react-bootstrap"

const SendModal = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Send Harsh Sen’s Post
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row m-0">
                        <div className="col-lg-12">
                            <div className="post-send">
                                <input type="text" className="form-control ai-input x" placeholder="Enter Name...." />
                                <div className="select-post mt-2">
                                    <div className="select-pro">
                                        <img src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="" style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
                                        <div className="name-self">
                                            <h4>Anshika Raj</h4>
                                            <p>PHP Developer</p>
                                        </div>
                                    </div>
                                    <div className="select-input-set">
                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    </div>
                                </div>
                                <div className="select-post mt-2">
                                    <div className="select-pro">
                                        <img src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="" style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
                                        <div className="name-self">
                                            <h4>Mustafa Ashraf</h4>
                                            <p>React Js And React Native Developer</p>
                                        </div>
                                    </div>
                                    <div className="select-input-set">
                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    </div>
                                </div>
                                <div className="select-post mt-2">
                                    <div className="select-pro">
                                        <img src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="" style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
                                        <div className="name-self">
                                            <h4>Junaid Akhtar</h4>
                                            <p>React Js And Next Js Developer</p>
                                        </div>
                                    </div>
                                    <div className="select-input-set">
                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    </div>
                                </div>
                                <div className="select-post mt-2">
                                    <div className="select-pro">
                                        <img src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="" style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
                                        <div className="name-self">
                                            <h4>Moin Akhtar</h4>
                                            <p>React Js And Next Js Developer</p>
                                        </div>
                                    </div>
                                    <div className="select-input-set">
                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    </div>
                                </div>
                                <div className="select-post mt-2">
                                    <div className="select-pro">
                                        <img src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="" style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
                                        <div className="name-self">
                                            <h4>Shadab Husain</h4>
                                            <p>React Js And Next Js and UX Developer</p>
                                        </div>
                                    </div>
                                    <div className="select-input-set">
                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    </div>
                                </div>
                                <div className="select-post mt-2">
                                    <div className="select-pro">
                                        <img src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="" style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
                                        <div className="name-self">
                                            <h4>Daud Husain</h4>
                                            <p>React Js And UI Developer</p>
                                        </div>
                                    </div>
                                    <div className="select-input-set">
                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button >Send</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SendModal