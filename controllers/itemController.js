var Item = require("../models/item");

exports.create = (req, res, next) => {
  var newItem = Item({
    name: req.body.name,
    price: req.body.price,
    size: req.body.size,
    stock: req.body.stock,
    note: req.body.note,
    image: req.body.image
  })

  newItem.save( (err, item) => {
    if(err) res.send(err);
    res.send(item)
  })
}

exports.get_items = (req, res, next) => {
  Item.find( (err, items) => {
    if(err) res.send(err);
    res.send(items)
  })
}

exports.get_item = (req, res, next) => {
  Item.findById(req.params.id, (err, item) => {
    if(err) res.send(err);

    res.send(item);
  })
}

exports.update = (req, res, next) => {
  Item.findById(req.params.id, (err, item) => {
    if (err) res.send(err);

    item.name = req.body.name || item.name;
    item.price = req.body.price || item.price;
    item.size = req.body.size || item.size;
    item.stock = req.body.stock || item.stock;
    item.note = req.body.note || item.note;
    item.image = req.body.image || item.image;

    // after updating the attributes, we need to save it
    item.save( (err, item) => {
      if (err) res.send(err);

      res.send(item);
    })

})}

exports.delete = (req, res, next) => {
    Item.findByIdAndRemove( req.params.id, (err, item) => {
      var message = {
        message: `Item has been deleted.`,
        id: item._id
      };

      res.send(message);
    })
}
