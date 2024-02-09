const app = express();

const JWT_SECRET = "jwt-secret";

app.get("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.find({
    email,
    password,
  });

  //   Create a jwt
  //  1. Get access to the data
  // 2. Get access to the algo
  //   3. Sign the jwt

  data + algo -> akhdfbvkjadsbfkgjdsgf: result;
  JWT_SECRET + result -> ksajdbga;lsdngjalskdfnjlasdnfb;jdnfjndf;j;bnvdjkfnbvjdkfbngkdhfb.gj

  return {
    success: "true",
    message: "It works!",
    user: user,
  };
});

{
  email: "jayesh@acciojob.com";
}

function middleware(req, res, next) {
  const jwt = req.body.jwt;

  //   Verify my jwt
  //   1. Convert this jwt into the object
  //   2. If it is expired
  //   3. If the signature is valid -> extract the result + hash with my secret = check if the jwt is the same

  //   const user = User.findOne({
  //     email: req.body.email,
  //   });
  if (user) {
    next();
  } else {
    throw new Error();
  }
}

app.get("/secret", middleware, async (req, res) => {});


function checkIfAdmin() {
    // Verify the jwt
    // -> const res = jwt.verify();
    userid = res.userId

    const user = await User.findById(userid);

    if(user.role = "admin") {
        next();
    }
}

// jwt -> {
//     userId: 1,
// }


@Guard(checkIfAdmin)
changeRole() {

}

const words = str.split(" ");

words.includes(keywords);