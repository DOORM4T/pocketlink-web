import express from "express";
const app = express();
import { functions, linksDB } from "./firebaseApp";

if (process.env.NODE_ENV === "development")
  app.use(express.static("./dist/build"));
else app.use(express.static("build"));

app.get("/:shortened", async (req, res) => {
  try {
    const shortened = req.params["shortened"];
    const snapshot = await linksDB.where("shortened", "==", shortened).get();
    let originalLink: string = snapshot.docs[0].data().original;
    if (!originalLink.includes("http")) originalLink = "http://" + originalLink;
    console.log(originalLink);

    res.redirect(originalLink);
  } catch (error) {
    console.error("\x1b[31m", error.message, "\x1b[0m");
    res.status(400).send("Corresponding URL not found");
  }
});

app.get("*", (req, res) => {
  res.status(404).send("404: Page Not Found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
