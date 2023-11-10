

exports.createPreference = (req, res) => {
  let preference = {
    items: req.body.map(item => {
      return {
        title: item.name,
        unit_price: Number(item.price),
        quantity: Number(item.quantity),
      }
    }),
    back_urls: {
      success: "https://gamertech-backend.vercel.app/success",
      failure: "https://gamertech-backend.vercel.app/failure",
      pending: "",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
