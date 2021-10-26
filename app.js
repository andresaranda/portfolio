
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname,'view')));

app.get('/',(req,res)=>{
    return res.sendFile(path.join(__dirname,'view/index.html'));
});
app.listen(3000, () => {console.log('Server running on port 3000')});
