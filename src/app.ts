// src/app.ts
import express from 'express';

const app = express();
const port = process.env.PORT || 30022;

app.get('/', (req, res) => {
  res.send('Heldsfafafddfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalo, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
