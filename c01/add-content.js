'use strict'

function createGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

if (hourNow > 18) { //false
    greeting= 'Good evening!';
{
else if (hourNow > 12) { //true
    greeting = ' Good afternoon!';
{
else if (hourNow > 0) { //true
    greeting = 'Good morning!';
}

document .write( ' <h3>' +greeting + ' </ h3> ');