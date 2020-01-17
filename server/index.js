import path from "path";
import fs from "fs";
import cors from "cors"

import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";

import SSR from "../client/ssr";

const { PORT = 3000 } = process.env;
const app = express();

app.use(cors())
app.use(express.static("./build"));

app.get("/", (req, res) => {
  res.send({
    message: "hello, world!"
  })
})

// app fetches from "localhost:3000/ssr" to fetch this component
// which is in the format of a string html
app.get("/ssr", (req, res) => {
  const ssr = ReactDOMServer.renderToString(<SSR />);
  return res.send(ssr)
})

app.listen(PORT, () => {
  console.log(`🎇 Server is listening on port ${PORT}`);
});