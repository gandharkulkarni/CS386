module.exports = `
<!DOCTYPE HTML>
<html>
	<head>
		<meta charset='UTF-8'>
		<title>Node POST</title>
		<link rel="icon" href="data:,"><!--Suppress favicon request-->
	</head>
	<body>
		<h1>Node POST</h1>
		<hr />
		<form action='/form_post' method='post'>
			<input type='text' name='firstName' placeholder='Enter first name' /> <br /><br />
			<input type='text' name='lastName' placeholder='Enter last name' />			
			<hr />
			<input type="submit" value="Submit POST" />
		</form>			
	</body>
</html>
`;