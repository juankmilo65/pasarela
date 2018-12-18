var express = require("express");
var router = express.Router();
var stripe = require("stripe")("sk_test_6VMfZ1DmHqe8Ok25nqAhEvni");
var paysuccessRouter = require("./paysuccess");
var app = express();

/* GET users listing. */
router.post("/", function(req, res, next) {
  var token = req.body.stripeToken;
  var chargeAmount = req.body.chargeAmount;
  stripe.charges.create(
    {
      amount: chargeAmount,
      currency: "usd",
      source: token
    },
    function(err) {
      console.log(err);
      if (err != null) {
        if (err.type === "StripeCardError") {
          console.log("Your card was declained");
        }
      }
    }
  );

  res.render("paysuccess", { message: "We have a deal now!!" });
  //app.use("/paysuccess", paysuccessRouter);
});

module.exports = router;
