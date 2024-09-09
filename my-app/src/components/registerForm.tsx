import React, { Component, } from "react";
import Register0 from "./register0";

class RegisterForm extends Component {
	
	constructor(props: any) {
		super(props);
		this.state = {
			stage : 0,
			firstName : "",
			lastName : "",
			username : "",
			email : "",
			password : "",
			address : {
				number : "",
				street : "",
				city : "",
				country : "",
			},
			phone : "",
			photo : "",
		};
	}

	render() {
		return (
			<div>
				<Register0/>
			</div>
		)
	}
}

export default RegisterForm;
