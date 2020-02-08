import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import { Mongo } from 'meteor/mongo';
export const Messages = new Mongo.Collection('Messages');

Mongo.publish("Messages", function(){
  return Messages.find();
})
Template.body.helpers({
  Messages() {
    console.log(Messages.find().count())
    return Messages.find({});
  },
});