import React from 'react';
// import { Component } from 'react';
// import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';

const DetailForm = () => {
  // const dropdownOptions = [
  //   { key: 'Select your course', value: '' },
  //   { key: 'React', value: 'react' },
  //   { key: 'Angular', value: 'angular' },
  //   { key: 'Vue', value: 'vue' }
  // ]

  // const checkboxOptions = [
  //   { key: 'HTML', value: 'html' },
  //   { key: 'CSS', value: 'css' },
  //   { key: 'JavaScript', value: 'javascript' }
  // ]

  const initialValues = {
    name: '',
    dob: '',
    sex: '',
    mobile: '',
    govid: '',
    govtype: '',
    gdetails: '',
    email: '',
    emergencycnumber: '',
    address: '',
    state: '',
    city: '',
    country: '',
    pincode: '',
    occupation: '',
    religion: '',
    status: '',
    bloodgroup: '',
    nationality: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    dob: Yup.string().required('Required'),
    sex: Yup.string().required('Required'),
    mobile: Yup.date().required('Required'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
  };

  // const [myname,setMyname] = useState("");
  // const [mydob,setMydob] = useState("");

  // const handleChange=(e) => {
  //   setMyname(e.target.value);
  // }

  return (
    <div style={{ marginTop: '30px' }}>
      <div className="row" style={{ marginLeft: '5px' }}>
        <div className="col-md-10">
          <div className="mb-3" style={{ fontSize: '24px', fontWeight: '600' }}>
            <u>Personal Details</u>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-5">
                    <label htmlFor="firstName">Name</label>
                    <input
                      id="id"
                      className="form-control"
                      type="name"
                      name="name"
                      placeholder="Enter First name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.firstName && touched.firstName && (
                      <div className="text-danger mt-1 ml-2">{errors.id}</div>
                    )}
                  </div>

                  <div className="col-md-4 form-group mb-3">
                    <label htmlFor="lastName">Date of Birth or Age</label>
                    <input
                      id="dob"
                      className="form-control"
                      type="dob"
                      name="dob"
                      placeholder="DD/MM/YY or Age in Years"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.lastName && touched.lastName && (
                      <div className="text-danger mt-1 ml-2">
                        {errors.orgId}
                      </div>
                    )}
                  </div>

                  <div className="col-md-2 form-group mb-3">
                    <label htmlFor="lastName">Sex</label>
                    <select
                      id="sex"
                      type="sex"
                      name="sex"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option>Enter Sex</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                    {errors.lastName && touched.lastName && (
                      <div className="text-danger mt-1 ml-2">
                        {errors.orgId}
                      </div>
                    )}
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>

      <div className="row" style={{ marginLeft: '5px' }}>
        <div className="col-md-12">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="number">Mobile</label>
                    <input
                      name="mobile"
                      id="mobile"
                      className="form-control"
                      placeholder="Enter Mobile"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                    />
                    {errors.email && touched.email && (
                      <div className="text-danger mt-1 ml-2">
                        {errors.address}
                      </div>
                    )}
                  </div>

                  <div className="col-md-2">
                    <label htmlFor="email">Govt Issued ID</label>
                    <select
                      name="govid"
                      id="govid"
                      className="form-control"
                      placeholder=""
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                    >
                      <option>ID Type</option>
                    </select>
                    {errors.email && touched.email && (
                      <div className="text-danger mt-1 ml-2">
                        {errors.address}
                      </div>
                    )}
                  </div>

                  <div className="col-md-5">
                    <input
                      className="form-control"
                      id="govtype"
                      name="govtype"
                      placeholder="Enter Govt ID"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      style={{ marginTop: '30px' }}
                    />
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>

      <div className="row" style={{ marginLeft: '5px' }}>
        <div className="col-md-12">
          <div
            className="mb-3"
            style={{ fontSize: '24px', fontWeight: '600', marginTop: '10px' }}
          >
            <u>Contact Details</u>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-3">
                    <label htmlFor="picker1">Guardian Details</label>
                    <select
                      id="gdetails"
                      className="form-control"
                      name="gdetails"
                      placeholder="select"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option>Enter Label</option>
                      <option>Father</option>
                      <option>Mother</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="picker1">Email</label>
                    <input
                      id="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="col-md-2">
                    <label htmlFor="picker1">Emergency Contact Number </label>
                    <input
                      id="emergencycnumber"
                      className="form-control"
                      name="emergencycnumber"
                      placeholder="Enter Emergency No"
                      value={values.select}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>

      <div className="row" style={{ marginLeft: '5px' }}>
        <div className="col-md-12">
          <div
            className="mb-3"
            style={{ fontSize: '24px', fontWeight: '600', marginTop: '10px' }}
          >
            <u>Addtress Details</u>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="picker1">Address</label>
                    <input
                      id="address"
                      className="form-control"
                      name="address"
                      placeholder="Enter Address"
                      value={values.select}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="picker1">State</label>
                    <select
                      id="state"
                      className="form-control"
                      name="Select"
                      placeholder="Enter State"
                      value={values.select}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option>Enter State</option>
                    </select>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="picker1">City </label>
                    <select
                      id="city"
                      className="form-control"
                      name="Select"
                      placeholder="Enter City"
                      value={values.select}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option>Enter City/town/Village</option>
                    </select>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>

      <div className="row" style={{ marginLeft: '5px' }}>
        <div className="col-md-12">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="picker1">Country </label>
                    <input
                      id="country"
                      className="form-control"
                      name="Select"
                      placeholder="Enter country"
                      value="India"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="picker1">Pincode </label>
                    <input
                      id="pincode"
                      className="form-control"
                      name="Select"
                      placeholder="Enter Pincode"
                      value={values.select}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>

      <div className="row" style={{ marginLeft: '5px' }}>
        <div className="col-md-12">
          <div
            className="mb-3"
            style={{ fontSize: '24px', fontWeight: '600', marginTop: '10px' }}
          >
            <u>Other Details</u>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-3">
                    <label htmlFor="picker1">Occupation </label>
                    <input
                      id="occupation"
                      className="form-control"
                      name="Select"
                      placeholder="Enter Occupation"
                      value={values.select}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="picker1">Religion </label>
                    <select
                      id="religion"
                      className="form-control"
                      name="Select"
                      placeholder="Enter"
                      value={values.select}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option>Enter Religion</option>
                    </select>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="picker1">Marital Status</label>
                    <select
                      id="status"
                      className="form-control"
                      name="Select"
                      placeholder="Enter"
                      value={values.select}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option>Enter Marital Status</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="picker1">Blood Group </label>
                    <select
                      id="bloodgroup"
                      className="form-control"
                      name="Select"
                      value={values.select}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option>Group</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3">
                    <label htmlFor="picker1">Nationality </label>
                    <input
                      id="nationality"
                      className="form-control"
                      name="Select"
                      placeholder="Enter"
                      value="India"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>

      <div className="d-flex justify-content-center" style={{ margin: '10px' }}>
        {' '}
        <form>
          <div>
            <button
              type="button"
              variant="outline-danger"
              className="text-capitalize btn btn-danger"
              style={{ marginRight: '20px' }}
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="text-capitalize btn btn-secondary"
              disabled={Formik.isValid}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailForm;
