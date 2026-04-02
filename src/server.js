import './config/env.js';
import express from 'express';

import connection from './config/db.js';
import testApi from './routes/test.js';

const PORT = process.env.PORT || 3000 ;

const app = express();

app.use(express.json());

app.use(testApi);

app.listen(PORT,() => {
  console.log(`your server is live at http://localhost:${PORT}`);
});