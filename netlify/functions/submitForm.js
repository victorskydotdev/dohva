// const sgMail = require('sg-mail');

module.exports.handler = async (event, context) => {
	sgMail.setApiKey(process.env.SENDGRID_SECRET);
	// Your function logic here

	const formData = JSON.parse(event.body);

	const clientName = formData.jsonData.username;
	const companyName = formData.jsonData.companyname;
	const address = formData.jsonData.address;
	const email = formData.jsonData.email;
	const country = formData.jsonData.country;
	const port = formData.jsonData.port;
	const quantityOfCommodity = formData.jsonData.quantityOfCommodity;
	const timeOfRequest = formData.jsonData.requestTime;
	const dateOfRequest = formData.jsonData.requestDate;

	const message = {
		to: 'info@dohvaafrica.com',
		from: {
			email: 'info@dohvaafrica.com',
			name: 'Dohva Tranafrican',
		},
		subject: 'Quote Request Notification',
		text: `Hello Dohva,

			There's a quote request from a client with the following info: 
			Name: ${clientName.toUppercase}
			Company name: ${companyName} 
			Address: ${address}
			Email: ${email}
			Country: ${country}
			Port of Destination: ${port}
			Quantity of Commodity: ${quantityOfCommodity}
			Time: ${timeOfRequest}
			Date: ${dateOfRequest}
		`,
	};

	try {
		if (formData) {
			await sgMail.send(message).then(() => {
				console.log('Quote sent to Dohva');
			});
		}
	} catch (error) {}

	return {
		statusCode: 200,
		body: JSON.stringify({ message: 'Hello, world!' }),
	};
};
