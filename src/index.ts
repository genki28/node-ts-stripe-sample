import express from 'express'
import Stripe from 'stripe'
import path from 'path'

const app = express()
const PORT = 8080
app.use(express.json())
app.use(express.urlencoded())

app.use(express.static(path.join(__dirname, 'public')));

// TODO: とりあえず愚直に書いていく
app.post('/charge', (req, res, next) => {
  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    res.status(500).send('失敗')
    return false
  }

  const stripe = new Stripe(secretKey, { apiVersion: '2020-08-27' })
  const { paymentMethodId, paymentIntentId, amount, currency, useStripeSdk } = req.body

})

app.listen(PORT, () => [
  console.log(`🚀Running http://localhost:${PORT}`)
])