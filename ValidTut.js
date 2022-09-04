var JoiVap = require("joi")

let UsrSchemaVar = JoiVap.object().keys({
    "NamVak" : JoiVap.string().alphanum().min(3).max(30).required(),
    "MobVak" : JoiVap.string().length(10).regex(/^[6-9][0-9]{9}$/).required(),
    "MylVak" : JoiVap.string().email({ minDomainAtoms: 2 }).required(),
    "PwdVak" : JoiVap.string().regex(/^[a-zA-Z0-9]{8,20}$/).required()
})

var UsrVar = {

    "NamVak" : "Shadab", 
    "MobVak" : "7760080271",
    "MylVak" : "shadab@everi.com",
    "PwdVak" : "Abcdef123"

}

var ChckResVar = JoiVap.validate(UsrVar,UsrSchemaVar)

console.log(ChckResVar)