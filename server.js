require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const favicon = require("serve-favicon");

require("./config/database");



const app = express();
app.set('view engine', 'ejs');


const userRouter = require("./routes/api/users")
const postRouter = require('./routes/api/posts')
const likesRouter = require('./routes/api/likes')
const updatesRouter = require('./routes/api/updates')



app.use(logger("dev"));


app.use(express.json());



app.use(require("./config/auth"));
app.use('/api/updates', updatesRouter);
app.use("/api/users", userRouter);
app.use('/api/posts', postRouter);
app.use('/api', likesRouter);





const manifest = require('./dist/manifest.json');

app.use(express.static(path.join(__dirname, "dist")));

// "catch all" route
app.get('/*', function(req, res) {
  res.render(path.join(__dirname, 'dist', 'index.ejs'), {manifest});
});




const { PORT = 8000 } = process.env;
app.listen(PORT, () => {
  console.log();
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
