export async function POST(req) {

  const { username, password } = req.json();

  const validUsername = process.env.USERNAME;
  const validPassword = process.env.PASSWORD;

  if (username === validUsername && password === validPassword) {
    return Response.json(
      { username });
  } else {
    return Response.json({
      success: false,
      message: "Invalid Username or Password",
    });
  }
}
