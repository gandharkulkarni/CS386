Name: Gandhar Kulkarni
Student Id: 20702101

Homework 6 - Web Server and Data File Handling
Description
This assignment involves setting up a basic Express web server with error routes and implementing functionality to handle data file viewing and downloading. The server is created using Express, and error handling is implemented for 404 and 500 errors.

Web Server Setup and Error Routes:
Constants host and port to specify the server's address.
The root route ("/") is used to display "Homework 6" in an h1 header with a horizontal ruler.
Implemented a 404 error middleware to handle requests for non-existent routes.
Set up a 500 error middleware to handle internal server errors.

Creating the Initial HTML Page:
An HTML page with charset utf-8 and the title tag "HW6" with following anchor links was created
View JSON: href = /view-json
Download JSON: href = /json
View CSV: href = /view-csv
Download CSV: href = /csv

Handling Data File Viewing and Downloading:
Loaded two data files (dataCSV.csv and dataJSON.json) into variables dataJSON and dataCSV.
Created routes to handle viewing and downloading the data files:
/view-json: Displays the content of dataJSON as JSON data.
/view-csv: Replaces line breaks in dataCSV with HTML break elements and display as HTML.
/json: Prompts the browser to download the dataJSON.json file.
/csv: Prompts the browser to download the dataCSV.csv file.

Resources used: Lecture slides