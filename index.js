const url = "http://localhost:8080";

const data = fetch(url)
  .then((res) => res.json())
  .then((data) => data);
data = {
  email: "user@example.com",
};

localStorage.setItem("user", data);

const secret_url = "api/secret";

const jwt =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

fetch(secret_url, {
  body: JSON.stringify({
    jwt,
  }),
})
  .then((res) => res.json())
  .then((data) => data);
