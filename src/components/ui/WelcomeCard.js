function WelcomeCard(props) {
    return (
        <div className="card-box pd-20 height-100-p mb-30">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <img src={props.imageUrl} alt="" />
                </div>
                <div className="col-md-8">
                    <h4 className="font-20 weight-500 mb-10 text-capitalize">
                        {props.welecomText} <div className="weight-600 font-30 text-blue">{props.userName}</div>
                    </h4>
                    <p className="font-18 max-width-600">{props.description}</p>
                </div>
            </div>
        </div>
    );
}


export default WelcomeCard;