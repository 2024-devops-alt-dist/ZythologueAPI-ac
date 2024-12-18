import app from "./app";

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  //listen api docs
  console.log(`Listening on port http://localhost:${PORT}/api-docs`);
});

