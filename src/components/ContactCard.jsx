import React from 'react';
import '../index.scss';
const ContactCard = ({contact}) => {
	
	return(

	  	<div>
	        <div className="col-xs-8 col-sm-9 contact">
	            <span className="name">{contact.firstName + ' ' + contact.lastName}</span><br/>

	            <span className="birthday">{contact.birthday}</span><br/>

	            <span className="text-muted">{contact.phoneNumber}</span><br/>

	            <span className="text-muted">{contact.email}</span><br/>
	        </div>
	        <div className="clearfix"></div>
	      </div>
        
    )
}

export default ContactCard;
