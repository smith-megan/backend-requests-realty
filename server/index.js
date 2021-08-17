const express =require('express')
const cors= require('cors')
const ctrl = require('./Controller')

const app=express()

app.use(express.json())
app.use(cors())

const baseURL='/api/houses'

let port=4005

app.get(baseURL, ctrl.getHouses)

app.delete(baseURL+"/:id", ctrl.deleteHouse)

app.post(baseURL, ctrl.createHouse)

app.put(baseURL+"/:id", ctrl.updateHouse)

app.listen(port, ()=>(console.log(`take us to ${port}`)))