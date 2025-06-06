export async function POST(req) {
  // Await the parsing of the request body
  const { username, password } = await req.json();

  const validUsername = process.env.MAXBETON_USERNAME;
  const validPassword = process.env.MAXBETON_PASSWORD;

  if (username === validUsername && password === validPassword) {
    return Response.json(
      {
        success: true,
        username,
      },
      { status: 200 }
    );
  } else {
    return Response.json(
      {
        success: false,
        message: "Invalid Username or Password",
      },
      { status: 401 }
    );
  }
}
