import Slider from "react-slick";


const ExploreCompanies = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className='job-sec mt-3'>
                <h5 className="mb-3">Explore companies that hire for your skills</h5>
                {/* <p>Promoted</p> */}
                <div className="slider-container slider-container-slider">
                    <Slider {...settings}>
                        <div className="card-slider p-3">
                            <img src="https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=" alt="IBM" className="card-img-top" />
                            <h5>IBM</h5>
                            <p>Make an impact with your leadership. Greater Delhi Area.</p>
                        </div>
                        <div className="card-slider p-3">
                            <img src="https://media.istockphoto.com/id/1324904634/photo/multiethnic-young-business-people-working-together-in-the-office.jpg?s=612x612&w=0&k=20&c=rBaY3zUDzZnjDlICJ03y8CCtJzDh_ZQ3z6es4hzfnJ8=" alt="Microsoft" className="card-img-top" />
                            <h5>Microsoft</h5>
                            <p>Empower every person and organization. Greater Delhi Area.</p>
                        </div>
                        <div className="card-slider p-3">
                            <img src="https://blog.ipleaders.in/wp-content/uploads/2018/05/hands-1063442_960_720.jpg" alt="PepsiCo" className="card-img-top" />
                            <h5>PepsiCo</h5>
                            <p>Dare to shake up $billion brands. Greater Delhi Area.</p>
                        </div>
                        <div className="card-slider p-3">
                            <img src="https://media.istockphoto.com/id/184962061/photo/business-towers.jpg?s=612x612&w=0&k=20&c=gLQLQ9lnfW6OnJVe39r516vbZYupOoEPl7P_22Un6EM=" alt="Amazon" className="card-img-top" />
                            <h5>Amazon</h5>
                            <p>Come build the future. Greater Delhi Area.</p>
                        </div>
                        <div className="card-slider p-3">
                            <img src="https://img.freepik.com/premium-photo/large-building-with-word-company-white-letters_1115474-115095.jpg" alt="Google" className="card-img-top" />
                            <h5>Google</h5>
                            <p>Innovate and inspire the world. Greater Delhi Area.</p>
                        </div>

                        <div className="card-slider p-3">
                            <img src="https://media.istockphoto.com/id/1324904634/photo/multiethnic-young-business-people-working-together-in-the-office.jpg?s=612x612&w=0&k=20&c=rBaY3zUDzZnjDlICJ03y8CCtJzDh_ZQ3z6es4hzfnJ8=" alt="Facebook" className="card-img-top" />
                            <h5>Facebook</h5>
                            <p>Build connections that matter. Greater Delhi Area.</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default ExploreCompanies