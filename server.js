const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 6789;
const app = express();
const linkDataBase = 'mongodb://admin:admin123@ds343895.mlab.com:43895/chia-se-nhac-web17';
// const UserApi = require('./routers/userApi');

mongoose.connect(linkDataBase, 
    { useNewUrlParser: true },
    (err) => {
        if(err) console.log(err);
        else console.log('DB connected successfully!');
    }
)

app.listen(port, (err) => {
    if(err) console.log(err);
    else console.log('Listening at port ' + port);
})