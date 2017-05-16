'use strict';

const colors = require('colors');
const dictionary = require('./dictionary');

let getFeel = temp => {
	if(temp<5){
		return "shivering cold";
	} else if(temp<15){
		return "pretty cold";
	}else if(temp<25){
		return "moderately cold";
	}else if(temp<32){
		return "quite warm";
	}else if(temp<40){
		return "very hot";
	}else{
		return "super hot";
	}
}

let getPrefix = (conditionCode, tense = 'present') => {
	let findPrefix = dictionary[tense].find(item => {
		if(item.codes.indexOf(Number(conditionCode)) > -1) {
			return true;
		}
	});

	return findPrefix.prefix || "";
}

let currentWeather = response => {
	if(response.query.results) {
		let resp = response.query.results.channel;
		let location = `${resp.location.city}, ${resp.location.country}`;
		//Access conditions
		let {text, temp, code} = resp.item.condition; // text = resp.item.condition.text
		//console.log(`${getPrefix(code)}`);
		return `Right now, ${getPrefix(code)} ${text.toLowerCase().red.bold} in ${location.bold}. It is ${getFeel(Number(temp)).red.bold} at ${temp.red.bold} degrees Celsius.`;
	}
}

module.exports = {
	currentWeather
}