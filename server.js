const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 6789;
const app = express();
const userRouter = require('./api/users/router')
const linkDataBase = 'mongodb://tieuhoa:tieuhoa123@ds343895.mlab.com:43895/chia-se-nhac-web17';
// const UserApi = require('./routers/userApi');

mongoose.connect(linkDataBase, 
    { useNewUrlParser: true },
    (err) => {
        if(err) console.log(err);
        else console.log('DB connected successfully!');
    }
)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));

// app.use("/api/auth", authRouter);
// app.use("/api/images", imageRouter);
app.use("/api/users", userRouter);

app.listen(port, (err) => {
    if(err) console.log(err);
    else console.log('Listening at port ' + port);
})