objConfig = {
	appName: 'User Management App', //Application name
	server: '127.0.0.1', //Server ip address
	port: 3000, //Port number
	debug: false, //If true, displays console.log statements
	root: '/pages', //Relative folder for static resources
	//General html top portion markup
	html_top: `
<!DOCTYPE html>
<html>
<head>
	<title>User Management</title>
	<meta charset='utf-8' >
</head>
<body>`,
	//General html bottom portion markup
	html_bottom:`
</body>
</html>`
}
module.exports = objConfig;


