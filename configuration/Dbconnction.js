const mongoose =  require('mongoose');

mongoose.connect('mongodb://localhost/goodhealthDb', {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{console.log(`The database is connected `);})
.catch((error)=>{console.log("There was an error connecting - " + error.message)});



