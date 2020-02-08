import { Template } from 'meteor/templating';
import './body.html';
import { Messages } from '../api/tasks.js';
 
Template.body.helpers({
  tasks() {
    return Messages.find({});
  }
});

Template.message.helpers({
  formattedDate(){
    var dateStr =
  ("00" + (this.sentDate.getMonth() + 1)).slice(-2) + "/" +
  ("00" + this.sentDate.getDate()).slice(-2) + "/" +
          this.sentDate.getFullYear() + " " +
  ("00" + this.sentDate.getHours()).slice(-2) + ":" +
  ("00" + this.sentDate.getMinutes()).slice(-2) + ":" +
  ("00" + this.sentDate.getSeconds()).slice(-2);
    return dateStr;
  }
})