// should be an SQS Subscriber
// Connect it to the pickup topic by using it’s URL/ARN
// Set it up to produce a new message to the “pickup” topic every few seconds, simulating an order
// The order id and customer name can be randomized
// Include the ARN to the vendor’s personal delivery queue
// Connect it to their own vendor queue by using it’s URL/ARN
// As drivers deliver, this app will continually poll the queue, retrieve them, and log details out to the console
// You should be able to disconnect this app, and see deliveries that happened while the app was not running