import { Button, Modal } from "react-bootstrap"


const SedularPost = (props) => {
    const backButton = () => {
        props?.onHide(false)
        props.setRepost(true)

    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Schedule post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-lg-12">
                        <h6>Thu, Jan 30, 5:00 PM India Standard Time, based on your location</h6>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Date</label>
                            <input type="Date" className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Time</label>
                            <input type="time" className="form-control" id="exampleFormControlInput1" />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button type="button" onClick={backButton}>Back</Button>
                <Button>Next</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SedularPost