'use strict';

const AWS = require ('./node_module/aws-sdk');

//configure
//credentials CAUTION

AWS.config.update({region:'us-east-2'})

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-east-2:166410657214:pickupmess'
//packages 
// key must be capital
// message to the vendor?
const payload = {
  Message:'Package is Picked up',
  TopicArn: topic,
}


sns.publish(payload,(err,data)=>{
  if (err){
    console.error(err);
  }
  console.log(data);
})