// Connect to the pickup queue and get only the next package
// Wait a random number of seconds
// Post a message to the Vendor’s “delivered” Queue (using the supplied arn in the order/message) to alert them of the delivery
// Repeat until the queue is empty