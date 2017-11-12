


function get_session_id(req,res){
    res.send({
      "session_id":"1bcd0fa7",
      "created":"2017-11-12",
      "expiring":"2027-11-12"
    })
}


function get_tags(req,res){
  session = req.query.session_id
  query = req.query.q
  console.log(req.params)
  examples = [
    {"tag": "Головная боль", "id": "head_ache"},
    {"tag": "Головокружение", "id": "head_ache"},
    {"tag": "Ночные кошмары", "id": "horrors"},
    {"tag": "Страхи",  "id": "horrors"},
    {"tag": "Тремор",  "id": "tremor"},
    {"tag":"Выпадение зубов",  "id": "teeth_loss"},
    {"tag": "Облысение",  "id": "hair_loss"}]
  res.send({
      "result": examples.filter((rec) => rec.tag.substring(0, query.length) === query)
  });
}



module.exports = {
  "get_session_id": get_session_id,
  "get_tags": get_tags
}
