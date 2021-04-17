import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormGroup from '../ui/FormGroup';

class BasicForm extends React.Component {
    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm(values) {
        window.alert('Form submitted successfully')
    }

    renderField(field) {
        return (
            <FormGroup label={field.label}>
                <input {...field.input} placeholder={field.label} type={field.type} className={field.className} />
                {field.meta.touched &&
                    ((field.meta.error && <span className="text-red-50">{field.meta.error}</span>) ||
                        (field.meta.warning && <span>{field.meta.warning}</span>))}
            </FormGroup>
        )
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="row">
                <div className="card-box col-xl-8 offset-2 pd-20 height-100-p mb-30">
                    <form onSubmit={handleSubmit(this.submitForm)}>
                        <Field name="name" component={this.renderField} type="text" label="Name" className="form-control" />

                        <Field name="email" component={this.renderField} type="email" label="Email" className="form-control" />

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

                        <Field name="employed" component={this.renderField} type="checkbox" label="Employed?" />

                        <FormGroup label="Notes">
                            <Field name="notes" component="textarea" className="form-control" />
                        </FormGroup>

                        <FormGroup >
                            <button type="submit" className="btn btn-success">Submit</button>
                            <button type="button" className="btn btn-danger margin-5">Cancel</button>
                        </FormGroup>
                    </form>
                </div >
            </div>
        )
    }
}

function validation(values) {
    const errors = {}
    if (!values.name) {
        errors.name = "Required"
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors
}

export default reduxForm({
    form: 'simple',
    validate: validation,

})(BasicForm)