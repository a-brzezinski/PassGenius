import { specialCharacters, numbersList, smallLetters, capitalLetters } from './sings'

const shuffleArray = (array: string[], arrayLength: number): string[] => {
	const randomArray: string[] = []
	for (let i = 1; i <= arrayLength; i++) {
		const item = array[Math.floor(Math.random() * array.length)]
		randomArray.push(item)
	}

	return randomArray
}

export const passwordGenerator = (settings: Settings) => {
	const { uppercase, lowercase, symbols, numbers, length } = settings

	let password: string

	let characters = ''

	if (uppercase) {
		characters += capitalLetters
	}
	if (lowercase) {
		characters += smallLetters
	}
	if (numbers) {
		characters += numbersList
	}
	if (symbols) {
		characters += specialCharacters
	} else if (!uppercase && !lowercase && !symbols && !numbers) {
		characters += smallLetters
	}

	password = shuffleArray(characters.split(''), length).join('')

	return password
}

export const passwordPowerCalculator = (password: String) => {
	let power: number = 0

	if (password.split('').some(char => smallLetters.includes(char))) {
		power += 20
	}
	if (password.split('').some(char => capitalLetters.includes(char))) {
		power += 20
	}
	if (password.split('').some(char => numbersList.includes(char))) {
		power += 20
	}
	if (password.split('').some(char => specialCharacters.includes(char))) {
		power += 20
	}

	if (password.length >= 12) {
		power += 20
	}

	if (password.length < 8) {
		power -= 20
	}

	return power
}
