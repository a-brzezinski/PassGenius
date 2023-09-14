import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { passwordPowerCalculator } from '../../helpers/utilities'

export default function PasswordPower() {
	const { password } = useSelector((state: RootState) => state.password)
	let width, color

	const power = passwordPowerCalculator(password)

	if (power <= 20) {
		width = 'w-1/12'
		color = 'bg-red-200'
	}

	if (power === 40) {
		width = 'w-3/12'
		color = 'bg-red-500'
	}
	if (power === 60) {
		width = 'w-8/12'
		color = 'bg-yellow-500'
	}

	if (power === 80) {
		width = 'w-11/12'
		color = 'bg-emerald-300'
	}
	if (power === 100) {
		width = 'w-full'
		color = 'bg-emerald-700'
	}

	return (
		<div className="w-full h-[5px] bg-gray-300 rounded-xl p-2 relative">
			<div className={`absolute top-0 rounded-xl left-0 h-full transition-all ${width} ${color}`}></div>
		</div>
	)
}
