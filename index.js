const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5070;

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('College booking server is running');
})

app.listen(port, ()=>{
    console.log(`EduPlus server is sitting on port ${port}`);
})