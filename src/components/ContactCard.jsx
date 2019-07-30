import React from 'react';
import '../index.css';
const ContactCard = ({contact}) => {
	
	return(

	  	<div>
	        <div className="col-xs-8 col-sm-9">
	            <span className="name">{contact.firstName + ' ' + contact.lastName}</span><br/>

	            <span className="visible-xs"> <span className="text-muted">{contact.phoneNumber}</span><br/></span>

	            <span className="visible-xs"> <span className="text-muted">{contact.email}</span><br/></span>
	        </div>
	        <div className="clearfix"></div>
	      </div>
        
    )
}

export default ContactCard;
