import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormGroup from '../ui/FormGroup';

class BasicForm extends React.Component {

    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit(values) {
        console.log(values)
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div className="row">
                <div className="card-box col-xl-8 pd-20 height-100-p mb-30">
                    <form onSubmit={handleSubmit(this.submit)}>
                        <FormGroup label="Name">
                            <Field name="name" component="input" type="text" placeholder="Name" className="form-control" />
                        </FormGroup>

                        <FormGroup label="Email">
                            <Field name="email" component="input" type="email" placeholder="Email" className="form-control" />
                        </FormGroup>

                        <FormGroup label="Gender">
                            <label><Field name="gender" component="input" type="radio" value="male" /> Male &nbsp;</label>
                            <label><Field name="gender" component="input" type="radio" value="female" /> Female</label>
                        </FormGroup>

                        <FormGroup label="Favorite Color">
                            <Field name="favoriteColor" component="select" className="form-control">
                                <option value="ff0000">Red</option>
                                <option value="00ff00">Green</option>
                                <option value="0000ff">Blue</option>
                            </Field>
                        </FormGroup>

                        <FormGroup label="Employed?">
                            <Field name="employed" component="input" type="checkbox" />
                        </FormGroup>

                        <FormGroup label="Notes">
                            <Field name="notes" component="textarea" className="form-control" />
                        </FormGroup>

                        <FormGroup >
                            <button type="button" className="btn btn-success">Submit</button>
                            <button type="button" className="btn btn-danger margin-5">Cancel</button>
                        </FormGroup>
                    </form>
                </div >
                <div className="col-xl-4 height-100-p">
                    <div className="bg-light-blue border-radius-10 text-center pd-20">
                        {"{ }"}
                    </div>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'simple',

})(BasicForm)