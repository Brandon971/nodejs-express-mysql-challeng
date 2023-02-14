const db = require("../models");
const Product = db.products;

exports.create = (req, res)=> {
    if (!req.body.title) {
        res.status(400).send({
            message: "Contnet can not be empty!"
        });
        return;
    }
    const Product = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
      };
    Product.create(product)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: 
            err.message || "Some error occurred while creating"
        })
    })
};

exports.findAll = (req, res) => {const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Product.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
    };

exports.findOne = (req, res) => {
    const id = req.params.id;

  Product.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

  Product.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Product was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Product with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Product with id=" + id
      });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Product.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Products was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Products with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Product with id=" + id
        });
      });
  };


exports.deleteAll = (req, res) => { Product.destroy({
    where:{},
    truncate: false
})
.then(nums => {
    res.send({ message: `${nums} Product was deleted successfully`})
})
.catch(err =>{
    res.status(500).send({
        message: 
        err.message || "Some error occured"
    })
})
};

exports.findAllPublished = (req, res) => {
    Product.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    });
};