const { Oso } = require("oso-cloud");
const express = require("express");
require("dotenv").config(); 
const app = express();
app.use(express.json()); // Add this to parse JSON bodies

const apiKey = "e_OLgVsSYNCbYcgEtMOWRME_6B4fbUTSneM_tvRSg4M9nvPOWW5fakkuf3aLTtR";
const oso = new Oso("https://cloud.osohq.com", apiKey);

// `app` is the Express instance
app.get(
"/test-oso",
async (req, res) => {
  const actor = {type: "User", id: "alice"};
  const resource = {type: "Project", id: "xyz"};

  if (await oso.authorize(actor, "view", resource) === false) {
    // Handle authorization failure
    res.status(404).send("Not Found");
    return;
  }
  res.status(200).send("authorized by oso");
}
);

// Login endpoint for frontend
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  // For demo: accept any password, use username as actor id
  const actor = { type: "User", id: username };
  const resource = { type: "Project", id: "xyz" };
  try {
    const allowed = await oso.authorize(actor, "view", resource);
    if (allowed) {
      res.json({ success: true });
    } else {
      res.status(401).json({ message: "Authorization failed" });
    }
  } catch (e) {
    res.status(401).json({ message: "Login failed" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});