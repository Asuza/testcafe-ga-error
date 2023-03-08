/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const path = require('path');

const app = express();

app.use(staticFileMiddleware);

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/index.html`));
});

const server = app.listen(process.env.PORT || 8080, () => {
  const { port } = server.address();
  console.log(`Listening in port: ${port}`);
});
