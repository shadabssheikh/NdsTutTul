var ServerVap = require("express")
var ServerVaj = ServerVap()
var CorsVap = require("cors")

ServerVaj.use(ServerVap.json())
ServerVaj.use(CorsVap())

var SdbCncVap = require("mysql")
var SdbCncVaj = SdbCncVap.createConnection({
    host : "localhost",
    user : "SdbUsr",
    password : "UsrPwd4Sdb",
    database : "NameSdb"
})

SdbCncVaj.connect((ErrSdbVar)=> 
{
    if(ErrSdbVar) throw ErrSdbVar
    else
        console.log("Sdb Connected")

} )




var JoiVap = require("joi")
var ValidatorVap = require("express-joi-validation").createValidator({})

let UsrSchemaVar = JoiVap.object({
    "NamVak" : JoiVap.string().required(),
    // "MobVak" : JoiVap.string().length(10).regex(/^[6-9][0-9]{9}$/).required(),
    // "MylVak" : JoiVap.string().email({ minDomainAtoms: 2 }).required()
})


ServerVaj.listen(8000, () => console.log("Server started running"))

ServerVaj.get("/", (req, res) => 
{
    res.send("<h1>Welcome to my Awesome Website<h1>")
})

ServerVaj.get("/contact", (req, res) => 
{
    res.send("<h1>You can contact me on 7760080271<h1>")
})

ServerVaj.get("/about", (req, res) => 
{
    res.send("<h1>I Love NONVEG <h1>")
})

//For getting the information
// ServerVaj.get("/user/:username", (req, res) => 
// {
//     var UsrNamVar = req.params.username
//     res.send(`<h1>Hello ${UsrNamVar}... Nice Meeting You!!<h1>`)
// })

// ServerVaj.get("/user/:username/:bill", (req, res) => 
// {
//     var UsrNamVar = req.params.username
//     var BillVar = req.params.bill
//     res.send(`<h1>Hello ${UsrNamVar}... Your Bill is ${BillVar}!!</h1>`)
// })

//Post is for add or creating the information
ServerVaj.post("/info", (req, res) => 
{
    var UsrPwdVar = req.body.PwdVak

    if (UsrPwdVar.length >= 8 && UsrPwdVar.match(/[0-9]/g) && UsrPwdVar.match(/[#@$!%*?&]/g))
        res.send(`<h1>Password is ${UsrPwdVar} </h1>`)
    else
        res.send(`<h1>Sahi Password dede bhaiii...</h1>`)
})

//to Update the entire Information
ServerVaj.put("/info/:uid", (req, res) =>
{
    var UidVar = req.params.uid
    var Mobvar = req.body.MobVak
    res.send(`<h1>${Mobvar} is been updated for id ${UidVar}</h1>`)
})

//to update only single information
ServerVaj.patch("/info/:uid", (req, res) =>
{
    var UidVar = req.params.uid
    var Mobvar = req.body.MobVak
    res.send(`<h1>${Mobvar} is been updated for id ${UidVar}</h1>`)
})


//to delete the entire information
ServerVaj.delete("/info/:uid", (req, res) =>
{
    var UidVar = req.params.uid
    // var Mobvar = req.body.MobVak
    res.send(`<h1>Info Related to ID ${UidVar} has been deleted</h1>`)
})

ServerVaj.get("/resume", (req, res) => 
{
    res.sendFile("resume.html", { root: __dirname })
})

ServerVaj.get("/image", (req, res) => 
{
    let FileVar = `${__dirname}/storage/image.png`
    res.download(FileVar)
})

var WishAryVar = ["Phone", "Watch", "Clothes", "Shoes", "Earbuds"]

ServerVaj.get("/wish",(req, res) => 
{
    res.json(WishAryVar)
})

ServerVaj.get("/wish/:idx",(req, res) => 
{
    var IdxVar = req.params.idx
    res.json(WishAryVar[IdxVar])
})

ServerVaj.post("/wish",(req, res) => 
{

    var WishVar = req.body.WishVak
    if (ChckValidWishFnc(WishVar,res))
        WishAryVar.push(WishVar)
    res.json(WishAryVar)
})

ServerVaj.put("/wish/:idx",(req, res) => 
{
    var IdxVar = req.params.idx
    var WishVar = req.body.WishVak
    if (ChckValidWishFnc(WishVar,res))
        WishAryVar[IdxVar] = WishVar
    res.json(WishAryVar)
})


ServerVaj.delete("/wish/:idx",(req, res) => 
{
    var IdxVar = req.params.idx
    WishAryVar.splice(IdxVar,1)
    res.json(WishAryVar)
})

var ChckValidWishFnc = (Itm,res) =>
{
    if (WishAryVar.includes(Itm))
        res.send("Item is Duplicate, Enter Other Item")
    else if(Itm.trim() == "")
        res.send("Item cant be empty")
    else 
        return true
}


var DreamAryVar = [
    {
        "Name": "Shadab",
        "Plan": "Buy Mustang",
        "Cost": 10000000,
        "Year": "20 Jan 2032"
    },
    {
        "Name": "Chethan",
        "Plan": "Macbook Pro",
        "Cost": 579900,
        "Year": "27 Feb 2027"
    },
    {
        "Name": "Thanuja",
        "Plan": "Independent House with Garden",
        "Cost": 20000000,
        "Year": "1 Oct 2032"
    },
    {
        "Name": "karthika",
        "Plan": "Mercedez Benz",
        "Cost": 15000000,
        "Year": "28 Feb 2030"
    },
    {
        "Name": "Akash",
        "Plan": "Shoes Collection",
        "Cost": 200000,
        "Year": "13 Nov 2025"
    }
]


ServerVaj.get("/dream",(req, res) =>
{
    res.json(DreamAryVar)
})


ServerVaj.get("/dream/:idx",(req, res) =>
{
    var IdxVar = req.params.idx
    res.json(DreamAryVar[IdxVar])
})


ServerVaj.post("/dream",(req, res) =>
{
    var ItmVar = req.body.ItmVak
    DreamAryVar.push(ItmVar)
    res.json(DreamAryVar)
})




ServerVaj.get("/user",(ReqNdsVar, ResNdsVar) =>
{
    var SqlQryVar = "SELECT UidCol,NamCol,MblCol,MylCol FROM NamTbl"
    SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar)=> 
    {
        if(ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar)
    })
})


ServerVaj.get("/user/:uid",(ReqNdsVar, ResNdsVar) =>
{
    var UidVar = ReqNdsVar.params.uid
    var SqlQryVar = `SELECT UidCol,NamCol,MblCol,MylCol FROM NamTbl WHERE UidCol = ${UidVar}`
    SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar)=> 
    {
        if(ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar[0])
    })
})



// ServerVaj.post('/user', (ReqNdsVar, ResNdsVar) => 
//  {     
//     var UsrVar = ReqNdsVar.body
//     console.log(UsrVar.NamVak)
//     var ProperCseVar = UsrVar.NamVak.split(" ").map((ItmVar) => ItmVar.charAt(0).toUpperCase()+ItmVar.slice(1)).join(" ")
//     console.log(ProperCseVar)
//     if(UsrVar.NamVak.trim() == "" || UsrVar.MobVak.trim()== "" || UsrVar.MylVak.trim() =="" )   
//         ResNdsVar.send("Please Give all Valid Input, It can't be Empty") 
//     else if(UsrVar.NamVak != ProperCseVar || !UsrVar.NamVak.match(/^[A-Za-z ]+$/g) )
//         ResNdsVar.send("Naam Sahi se Likh le bhaii")
//     else if (UsrVar.MobVak.length!=10 || !UsrVar.MobVak.match(/^[0-9]+$/g) || UsrVar.MobVak[0]<6 )
//         ResNdsVar.send("Enter a valid number")
//     else if (!UsrVar.MylVak.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g))
//         ResNdsVar.send("Email Sahi nahi hai beta jiii")
//     else{
//     var SqlQryVar=`INSERT INTO NamTbl (NamCol,MblCol,MylCol) VALUES ("${UsrVar.NamVak}","${UsrVar.MobVak}","${UsrVar.MylVak}")`
//     SdbCncVaj.query(SqlQryVar,(ErrSdbVar,ResSdbVar)=>{
//         if (ErrSdbVar) throw ErrSdbVar
//         ResNdsVar.json(ResSdbVar)
//       } )  
// }})


ServerVaj.post('/user', ValidatorVap.query(UsrSchemaVar),(ReqNdsVar, ResNdsVar) => 
 {     
    var UsrVar = ReqNdsVar.body
    var SqlQryVar=`INSERT INTO NamTbl (NamCol,MblCol,MylCol) VALUES ("${UsrVar.NamVak}","${UsrVar.MobVak}","${UsrVar.MylVak}")`
    SdbCncVaj.query(SqlQryVar,(ErrSdbVar,ResSdbVar)=>{
        if (ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar)
      } )  
})

ServerVaj.put("/user/:uid",(ReqNdsVar, ResNdsVar) =>
{
    var UidVar = ReqNdsVar.params.uid
    var UsrVar = ReqNdsVar.body
    var SqlQryVar = `UPDATE NamTbl SET NamCol = "${UsrVar.NamVak}",MblCol = "${UsrVar.MobVak}",MylCol = "${UsrVar.MylVak}" WHERE UidCol = "${UidVar}";`
    SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar)=> 
    {
        if(ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar)
    })
})

ServerVaj.patch("/user/:uid",(ReqNdsVar, ResNdsVar) =>
{
    var UidVar = ReqNdsVar.params.uid
    var MylVar = ReqNdsVar.body.MylVak
    var SqlQryVar = `UPDATE NamTbl SET MylCol = "${MylVar}" WHERE UidCol = "${UidVar}";`
    SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar)=> 
    {
        if(ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar)
    })
})

ServerVaj.delete("/user/:uid",(ReqNdsVar, ResNdsVar) =>
{
    var UidVar = ReqNdsVar.params.uid
    var SqlQryVar = `DELETE FROM NamTbl WHERE UidCol = "${UidVar}";`
    SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar)=> 
    {
        if(ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar)
    })
})

ServerVaj.get("/user",(ReqNdsVar, ResNdsVar) =>
{
    var UsrVar = ReqNdsVar.body
    var DataVar = `SELECT * FROM NamTbl`
    var SqlQryVar = "SELECT UidCol,NamCol,MblCol,MylCol FROM NamTbl"
    SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar)=> 
    {
        if(ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar)
    })
})




ServerVaj.post("/order", (ReqNdsVar, ResNdsVar) =>
{
    var UsrVar = ReqNdsVar.body
    var SqlQryVar=`INSERT INTO OrdTbl (UsrUidCol,PrdUidCol,QtyCOl) VALUES ("${UsrVar.UsrUidVak}","${UsrVar.PrdUidVak}","${UsrVar.QtyVak}")`
    SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar)=> 
    {
        if(ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar)
    })
}) 


ServerVaj.get("/order/:uid",(ReqNdsVar, ResNdsVar) =>
{
    var UidVar = ReqNdsVar.params.uid
    var UsrVar = ReqNdsVar.body
    var SqlQryVar = `SELECT * FROM ordtbl INNER JOIN namtbl ON ordtbl.UsrUidCol=namtbl.UidCol INNER JOIN prdtbl ON ordtbl.PrdUidCol = prdtbl.UidCol WHERE ordtbl.UidCol = ${UidVar};`
    var DataVar = SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar)=> 
    {
        if(ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar[0])
    })
})

ServerVaj.get("/order-count/:prduid",(ReqNdsVar, ResNdsVar) =>
{
    var PrdUidVar = ReqNdsVar.params.prduid
    var SqlQryVar = `SELECT COUNT(PrdUidCol) FROM ordtbl WHERE PrdUidCol = ${PrdUidVar};`
    SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar)=> 
    {
        if(ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar[0])
    })
})



ServerVaj.post("/product", (ReqNdsVar, ResNdsVar) =>
{
    var UsrVar = ReqNdsVar.body
    var SqlQryVar=`INSERT INTO PrdTbl (TitleCol,DetCol,CostCol) VALUES ("${UsrVar.TtlVak}","${UsrVar.DtlVak}","${UsrVar.CstVak}")`
    SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar)=> 
    {
        if(ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar)
    })
}) 

ServerVaj.get("/product", (ReqNdsVar, ResNdsVar) =>
{
    var SqlQryVar=`SELECT UidCol,TitleCol,DetCol,CostCol FROM PRDTBL`
    SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar)=> 
    {
        if(ErrSdbVar) throw ErrSdbVar
        ResSdbVar = ResSdbVar.map(ItmVar => 
            {
                ItmVar.UidVak = ItmVar.UidCol
                ItmVar.TtlVak = ItmVar.TitleCol
                ItmVar.DtlVak = ItmVar.DetCol
                ItmVar.CstVak = ItmVar.CostCol
                delete ItmVar.UidCol
                delete ItmVar.TitleCol
                delete ItmVar.DetCol
                delete ItmVar.CostCol
                return ItmVar

            })
        ResNdsVar.json(ResSdbVar)
    })
}) 

ServerVaj.get("/product/:UidVak", (ReqNdsVar, ResNdsVar) =>
{
    var UidVar = ReqNdsVar.params.UidVak
    var SqlQryVar=`SELECT TitleCol,DetCol,CostCol FROM PRDTBL WHERE UidCol= "${UidVar}"`
    SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar)=> 
    {
        if(ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar)
    })
}) 

ServerVaj.put("/product/:UidVak", (ReqNdsVar, ResNdsVar) =>
{
    var UquVar = ReqNdsVar.body
    var UidVar = ReqNdsVar.params.UidVak
    var SqlQryVar=`UPDATE prdTbl SET TitleCol = "${UquVar.TtlVak}",DetCol = "${UquVar.DtlVak}",CostCol = "${UquVar.CstVak}" WHERE UidCol = "${UidVar}";`
    SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar)=> 
    {
        if(ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar)
    })
}) 

ServerVaj.delete("/product/:UidVak", (ReqNdsVar, ResNdsVar) =>
{
    var UidVar = ReqNdsVar.params.UidVak
    var SqlQryVar=`DELETE FROM PrdTbl WHERE UidCol = "${UidVar}";`
    SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar)=> 
    {
        if(ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar)
    })
}) 