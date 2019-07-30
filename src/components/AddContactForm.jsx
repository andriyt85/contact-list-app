
import React from 'react';

const AddContactForm = ({onInputChange, onFormSubmit}) => 
	(
		<form>
			<div className="form-group">
			    <label htmlFor="emailAddress">Email address</label>
			    <input type="email" className="form-control" name="email" onChange={onInputChange} placeholder="Email" required/>
			</div>
			
			<div className="form-group class-sm-3">
			    <label htmlFor="fullName">First Name</label>
			    <input type="name" className="form-control" name="firstName" onChange={onInputChange} placeholder="First Name" required/>
			</div>
			
			<div className="form-group class-sm-3">
			    <label htmlFor="fullName">Last Name</label>
			    <input type="name" className="form-control" name="lastName" onChange={onInputChange} placeholder="Last Name" required/>
			</div>
			
			<div className="form-group">
			    <label htmlFor="phoneNumber">Phone Number</label>
			    <input type="number" className="form-control" name="phoneNumber" onChange={onInputChange} placeholder="Phone Number" required/>
			 </div>

			<div className="form-group">
			    <label htmlFor="phoneNumber">Birthday</label>
			    <input type="text" className="form-control" name="birthday" onChange={onInputChange} placeholder="Birthday" required/>
			 </div>

			<button type="submit" onClick={onFormSubmit} className="btn btn-primary"> Submit </button>
		</form>
	)

export default AddContactForm;
