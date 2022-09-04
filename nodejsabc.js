// console.log("Iam nodejs app")

var ModuleVar = require("./name-module")

// console.log(ModuleVar)
// console.log(ModuleVar.MobVak)
// console.log(ModuleVar.EmailVak)
// console.log(ModuleVar.AryVak[2])

// console.log(ModuleVar.CubVaf(3))

// console.log(ModuleVar.NamVak)
// ModuleVar.NamVaf()

// var ShadabVar = ModuleVar.UsrVak
// ShadabVar.EmpID = 750333
// ShadabVar.Desg = "Trainee"

// var AkashVar = ModuleVar.UsrVak
// AkashVar.EmpID = 750999
// AkashVar.Desg = "Developer"

// var ShadabVar = ModuleVar.UsrVaf()
// console.log(ShadabVar)
// ShadabVar.EmpID = 750333
// ShadabVar.Desg = "Trainee"

// var AkashVar = ModuleVar.UsrVaf()
// AkashVar.EmpID = 750999
// AkashVar.Desg = "Developer"

// console.log(ShadabVar)
// console.log(AkashVar)

var InfoVar = require("./info.json")

console.log(InfoVar.Name)

ModuleVar.MultiTaskVaf(1)
ModuleVar.MultiTaskVaf(2)
ModuleVar.MultiTaskVaf(3)
ModuleVar.MultiTaskVaf(4)
ModuleVar.MultiTaskVaf(5)


//namemodule.js
// var NamVar = "Shadab Sheikh"
// var MobVar = "7766554433"
// var AryVar = ["abc","def","ghi","jkl","mno"] 

// module.exports.NamVak = NamVar
// module.exports.MobVak = MobVar

// module.exports = {
//     NamVak : NamVar,
//     MobVak : MobVar,
//     EmailVak : "shadab@gmail.com", 
//     AryVak : AryVar,
//     AddVak : {
//         Area : "Pandesvar",
//         City : "Mangalore"
//     }
// }

// NamFnc = () =>
// {
//     console.log("Iam a Function")
// } 

// CubFnc = (Num1) => Num1**3

// module.exports.CubVaf = CubFnc
// module.exports.NamVaf = NamFnc

module.exports =
{
    NamVak: "Shadab",
    NamVaf: function ()
    {
        console.log("iam a exportable function")
    },
    UsrVak : {
         EmpID : "",
            Desg : ""
    },
    UsrVaf : function ()
    {
        return {
            EmpID : "",
            Desg : ""
        }
    }
}

module.exports.MultiTaskVaf = (req) =>
{
    console.log("Customer Request Number",req)
    setTimeout(() =>{
        console.log("Order Delivered",req)
    },4000)
}