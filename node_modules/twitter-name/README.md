# twitter-name

> Check whether username is available on Twitter

## Install

```
> npm install twitter-name --save
```

## Usage

```
var twitterName = require('twitter-name');

twitterName('chintsradia', function (err, isAvailable) {
	console.log(isAvailable); //=> false
});
```

## CLI

```
Install
	> npm install twitter-name --global
```
```
Usage
	> twitter-name --help
	
Examples
	> twitter-name fdjkreij
	✔ Available
	> twitter-name chintsradia
	✖ Unavailable
```
Note: This utility uses unofficial twitter API.

## License
MIT © [Chintan Radia](https://beatfreaker.github.io/)
