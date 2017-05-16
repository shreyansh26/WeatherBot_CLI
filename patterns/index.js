const patternDict = [{
	pattern: '\\b(?<greeting>hi|hey|hello)\\b',
	intent: 'Hello'
}, {
	pattern: '\\b(bye|exit)\\b',
	intent: 'Exit'
}, {
	pattern: 'in\\s\\b(?<city>.+)',
	intent: 'CurrentWeather'
}];

module.exports = patternDict;
