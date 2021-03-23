import React from 'react';


class FormGroup extends React.Component {

    render() {
        return (
            <div className="form-group row" >
                <label className="col-sm-12 col-md-2 col-form-label">{this.props.label}</label>
                <div className="col-sm-12 col-md-10">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default FormGroup;