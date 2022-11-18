const Rating = ({title}) => {
    return (<>
        <p className="card-title py-2 fw-bold">{title}</p>
        <div className='d-flex justify-content-between pb-4'>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                <label className="form-check-label" htmlFor="inlineRadio1">Very Unsatisfied</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                <label className="form-check-label" htmlFor="inlineRadio2">Unsatisfied</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                <label className="form-check-label" htmlFor="inlineRadio1">Neutral</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                <label className="form-check-label" htmlFor="inlineRadio2">Satisfied</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                <label className="form-check-label" htmlFor="inlineRadio2"> Very Satisfied</label>
            </div>
        </div>
    </>)
}

export default Rating;