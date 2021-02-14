const configProd=require("./configStore.prod");
const configDev=require("./configStore.dev");


if(process.env.NODE_ENV == "production"){
    module.exports=configDev;
}else{
    module.exports=configDev;
}