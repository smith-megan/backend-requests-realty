const houses = require('./db.json')

globalID=3

module.exports = {
getHouses: (req, res)=>{
  res.status(200).send(houses);
},
createHouse: (req, res) => {
  let {address, price, imageURL} =req.body
  let newHouse={
    id: ++globalID,
    address,
    price: parseInt(price),
    imageURL
  }
  console.log(newHouse.id)
  houses.push(newHouse)
    if (address !=="" && price!=="" && imageURL!=="" && price!==NaN){
      res.status(200).send(houses)
    } else {
    res.status(400).send('missing information')
  }
},
updateHouse: (req, res) => {
  let {id}= req.params
  let {type}=req.body
  let index = houses.findIndex(e => e.id === +id)
    if (type ==="minus" && houses[index].price>10000){
      houses[index].price-=10000
      res.status(200).send(houses)
    }
    else if(type==="plus"){
      houses[index].price+=10000
      res.status(200).send(houses)
    } else {
      res.status(400).send("not an option")
    }
},
deleteHouse: (req, res) => {
    let { id } = req.params;
    let index = houses.findIndex(e => e.id === +id)
    houses.splice(index, 1)
    res.status(200).send(houses)
}
}