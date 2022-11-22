const Rating = ({ title, setData, handChange }) => {
    return (<>
        <p className="card-title py-2 fw-bold">{title}</p>
        <form onChange={handChange(setData)} className='d-flex justify-content-between pb-4'>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name={title} value="1" />
                <label className="form-check-label" htmlFor={title}>Very Unsatisfied</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name={title} value="2" />
                <label className="form-check-label" htmlFor={title}>Unsatisfied</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name={title} value="3" />
                <label className="form-check-label" htmlFor={title}>Neutral</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name={title} value="4" />
                <label className="form-check-label" htmlFor={title}>Satisfied</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name={title} value="5" />
                <label className="form-check-label" htmlFor={title}> Very Satisfied</label>
            </div>
        </form  >
    </>)
}

export default Rating;