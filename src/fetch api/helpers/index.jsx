import CryptoJS from "crypto-js";
import { APP_NAME } from "../constants/app";

const characterList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const CookieList = ["accessToken", "refreshToken"];

export const toAbsoluteUrl = (pathname) => process.env.PUBLIC_URL + pathname;

export function getCurrentUrl(location) {
	return location.pathname.split(/[?#]/)[0];
}

export function checkIsActive(location, url) {
	const current = getCurrentUrl(location);
	const currentSplit = current.split("/");

	if (!current || !url) {
		return false;
	}

	if (current === url) {
		return true;
	}

	if (url.split("/").every((urlPiece) => currentSplit.includes(urlPiece))) {
		return true;
	}

	return false;
}

export function generateCookiesName() {
	let secretCode = 10;
	for (let i = 0; i < APP_NAME.length; i++) {
		secretCode += APP_NAME.charCodeAt(i) * APP_NAME.length;
	}

	secretCode = Math.round(secretCode / APP_NAME.length);
	let GeneratedCookiesName = {};
	CookieList.forEach((cookie) => {
		let tempCookieString = "";
		for (let j = 0; j < cookie.length; j++) {
			let charCode = Math.floor((cookie.charCodeAt(j) * characterList.length * cookie.length) / secretCode);
			charCode = charCode > characterList.length ? charCode - characterList.length : charCode;
			tempCookieString += characterList.charAt(Math.floor(charCode));
		}

		GeneratedCookiesName[cookie] = tempCookieString;
	});
	return GeneratedCookiesName;
}
export function generatePredictableUniqueKeyName(key) {
	let secretCode = 10;
	for (let i = 0; i < APP_NAME.length; i++) {
		secretCode += APP_NAME.charCodeAt(i) * APP_NAME.length;
	}

	secretCode = Math.round(secretCode / APP_NAME.length);
	let uniqueKeyString = "";
	for (let j = 0; j < key.length; j++) {
		let charCode = Math.floor((key.charCodeAt(j) * characterList.length * key.length) / secretCode);
		charCode = charCode > characterList.length ? charCode - characterList.length : charCode;
		uniqueKeyString += characterList.charAt(Math.floor(charCode));
	}
	return uniqueKeyString;
}
export const generatedCookies = generateCookiesName();

export const storage = {
	getToken: () =>
		window.localStorage.getItem(generatedCookies.accessToken) && CryptoJS.AES.decrypt(window.localStorage.getItem(generatedCookies.accessToken), APP_NAME).toString(CryptoJS.enc.Utf8),
	setToken: (token) => window.localStorage.setItem(generatedCookies.accessToken, CryptoJS.AES.encrypt(token, APP_NAME).toString()),
	clearToken: () => window.localStorage.removeItem(generatedCookies.accessToken),

	setSessionStorage: (key, value) => window.sessionStorage.setItem(generatePredictableUniqueKeyName(key), JSON.stringify(value)),
	getSessionStorage: (key) => window.sessionStorage.getItem(generatePredictableUniqueKeyName(key)) && JSON.parse(window.sessionStorage.getItem(generatePredictableUniqueKeyName(key))),
};
export const isValidDate = (value) => {
	return value && value instanceof Date && !isNaN(value) ? value : null;
};