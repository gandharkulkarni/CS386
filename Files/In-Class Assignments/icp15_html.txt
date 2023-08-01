const htmlStrings = {
    top: `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>icp15</title>
  </head>
  <body>`,
  
    bottom: `</body>
  </html>`,
  
    login: `<form action="/login" method="post">
    <label for="user">Username:</label>
    <input type="text" id="user" name="user" placeholder="Type your username" required><br><br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" placeholder="Type your password" required><br><br>
    <button type="submit">Submit</button>
  </form>`,
  
    admin: `
    <h1>Admin Page</h1>
    <br>
    <p>You are logged in</p><br>
    <hr>
    <a href="/logout">Logout</a>`,
  
    loggedOut: `
    <h1>Logged out</h1>
    <br>
    <p>You are logged out</p>
    <br>
    <hr>
    <a href="/">Login Again</a>`
  };
module.exports = htmlStrings;

  