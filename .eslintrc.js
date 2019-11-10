module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": "airbnb",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"indent": [2, "tab"],
		"no-tabs": 0,
		"react/prop-types": 0,
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"react/jsx-props-no-spreading": [{
			"explicitSpread": "ignore"
		}]
	}
}