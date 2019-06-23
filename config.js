var config = {
	port: 3001,
	secret: '0d983fd5c168a969e13ddf2a99666455',
	defaults:{
		psize: 3000
	},
	api:{
		//key: 'f9868af6-f5c6-43c8-9e2a-9ce2e148eeb5', //for jobOpening - local -product API - new
		//url: 'http://localhost:8088'

		url: 'http://52.66.140.144', 
		key: '75247f02-d284-45a4-ba5e-b9cc0fba0e46' 

	},
	redis: {
		url:'redis://localhost:6379'
	},
	cdn: {
		path: '/assets'
	}
};
 
module.exports = config; 
