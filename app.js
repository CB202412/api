const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;


app.get('/',(req,res)=>{
    res.send('Rony Rizk')
})

app.get('/students',(req,res)=>{
    let data = [
            {id:1, name:'Perla'},
            {id:2, name:'Osman'},
            {id:3, name:'Osman'}
    ];
    res.send(data)
})

app.get('/sleiman',(req,res)=>{   
    res.send("Bla Bla Bla")
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});