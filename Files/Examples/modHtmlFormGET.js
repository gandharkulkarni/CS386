module.exports = `
<!DOCTYPE HTML>
<html>
	<head>
		<meta charset='UTF-8'>
		<title>Node GET/POST</title>
		<link rel="icon" href="data:,"><!--Suppress favicon request-->
	</head>
	<body>
		<h1>Node GET</h1>
		<hr />
		<form action='/form_get' method='get'>
			<input type='text' name='firstName' placeholder='Enter first name' /> <br /><br />
			<input type='text' name='lastName' placeholder='Enter last name' />			
			<hr />
			<input type="submit" value="Submit GET" />
		</form>	
	</body>
</html>
`;