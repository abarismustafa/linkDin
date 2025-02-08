import { useState } from "react";


const Premium = () => {
    const [selectedOption, setSelectedOption] = useState("personal");
    const [progress, setProgress] = useState(0);
    const [nextPage, setNextPage] = useState(false);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setProgress(50);
    };

    const handleNext = () => {
        setProgress(100);
        if (progress == 100) {
            setNextPage(true)
        }
    };

    return (
        <div className="container mt-4">

            <div className="head-section text-center">
                <h3>Don’t let your next job opportunity pass you. Get hired faster with Premium.</h3>
                <p>
                    <strong>VIKRAM</strong> and millions of other members use Premium.
                </p>
                <p>Claim your 1-month free trial today. Cancel anytime. We’ll send you a reminder 7 days before your trial ends.</p>


                <div className="progress" style={{ height: "6px" }}>
                    <div className="progress-bar-progress" role="progressbar" style={{
                        width: `${progress}%`,
                        transition: "width 0.5s ease-in-out",
                        backgroundColor: 'black'
                    }}
                    ></div>
                </div>
                <p className="mt-2">Plan recommendation {progress}%</p>
            </div>

            {/* Survey Section */}

            {nextPage ? (
                <div className="card p-4 mx-auto mt-3" style={{ maxWidth: "500px" }}>
                    <div className="d-flex align-items-center mb-3">
                        <img
                            src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
                            alt="User"
                            className="rounded-circle me-3"
                            style={{ width: '40px', height: '40px' }}
                        />
                        <h5 className="mb-0">Premium can help you grow your business. What would you like to do?</h5>
                    </div>
                    <p>We’ll recommend the right plan for you.</p>

                    {/* Checkbox Options */}
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="personal"
                            name="premiumGoal"
                            value="personal"
                            checked={selectedOption === "personal"}
                            onChange={handleOptionChange}
                        />
                        <label className="form-check-label" htmlFor="personal">
                            To job search with confidence and get hired
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="job"
                            name="premiumGoal"
                            value="job"
                            checked={selectedOption === "job"}
                            onChange={handleOptionChange}
                        />
                        <label className="form-check-label" htmlFor="job">
                            To develop my professional skills
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="other"
                            name="premiumGoal"
                            value="other"
                            checked={selectedOption === "other"}
                            onChange={handleOptionChange}
                        />
                        <label className="form-check-label" htmlFor="other">
                            To grow my network, business, or reputation
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="other"
                            name="premiumGoal"
                            value="other"
                            checked={selectedOption === "other"}
                            onChange={handleOptionChange}
                        />
                        <label className="form-check-label" htmlFor="other">
                            To find and contact new leads
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="other"
                            name="premiumGoal"
                            value="other"
                            checked={selectedOption === "other"}
                            onChange={handleOptionChange}
                        />
                        <label className="form-check-label" htmlFor="other">
                            To find and hire talent faster
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="other"
                            name="premiumGoal"
                            value="other"
                            checked={selectedOption === "other"}
                            onChange={handleOptionChange}
                        />
                        <label className="form-check-label" htmlFor="other">
                            Other
                        </label>
                    </div>

                    {/* Next Button */}
                    <button className="btn btn-primary mt-3" onClick={handleNext}>
                        Next
                    </button>
                </div>
            ) : (
                <div className="card p-4 mx-auto mt-3" style={{ maxWidth: "500px" }}>
                    <div className="d-flex align-items-center mb-3">
                        <img
                            src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
                            alt="User"
                            className="rounded-circle me-3"
                            style={{ width: '40px', height: '40px' }}
                        />
                        <h5 className="mb-0">Mustafa, which of these best describes your primary goal for using Premium?</h5>
                    </div>
                    <p>We’ll recommend the right plan for you.</p>

                    {/* Checkbox Options */}
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="personal"
                            name="premiumGoal"
                            value="personal"
                            checked={selectedOption === "personal"}
                            onChange={handleOptionChange}
                        />
                        <label className="form-check-label" htmlFor="personal">
                            I’d use Premium for my personal goals
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="job"
                            name="premiumGoal"
                            value="job"
                            checked={selectedOption === "job"}
                            onChange={handleOptionChange}
                        />
                        <label className="form-check-label" htmlFor="job">
                            I’d use Premium as part of my job
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="other"
                            name="premiumGoal"
                            value="other"
                            checked={selectedOption === "other"}
                            onChange={handleOptionChange}
                        />
                        <label className="form-check-label" htmlFor="other">
                            Other
                        </label>
                    </div>

                    {/* Next Button */}
                    <button className="btn btn-primary mt-3" onClick={handleNext}>
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default Premium