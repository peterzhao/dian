const products = [
  {
    name: 'Book Shelf',
    price: '212.5'
  },
  {
    name: 'Rice Cooker',
    price: '112.6'
  },
  {
    name: 'Cup 7 - red',
    price: '12.3'
  },
  {
    name: 'Nike Sports Shoes',
    price: '99.9'
  }
]

module.exports = {
  getList: (req, res) => {
    res.json(products)
  }
}