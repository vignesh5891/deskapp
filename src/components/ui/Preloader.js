function Preloader() {
    return (
        <div className="pre-loader" style="display: none;">
            <div className="pre-loader-box">
                <div className="loader-logo"><img src="vendors/images/deskapp-logo.svg" alt="" /></div>
                <div className="loader-progress" id="progress_div">
                    <div className="bar" id="bar1" style="width: 100%;"></div>
                </div>
                <div className="percent" id="percent1">100%</div>
                <div className="loading-text">
                    Loading...
			</div>
            </div>
        </div>
    );
}


export default Preloader;