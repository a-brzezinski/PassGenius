import { ChangeEvent } from 'react'

import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setPassword, setSettings } from '../../redux/passwordSlice'
import { passwordGenerator } from '../../helpers/utilities'

export default function SettingsForm() {
	const { settings } = useSelector((state: RootState) => state.password)
	const dispatch = useDispatch()

	const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = e.target

		dispatch(setSettings([name, checked]))
	}

	const inputRangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSettings(['length', +e.target.value]))
		dispatch(setPassword(passwordGenerator(settings)))
	}

	return (
		<form className="flex flex-col gap-4 bg-white p-2 rounded-xl">
			<div className="flex flex-col gap-2">
				<h3 className="text-center font-bold text-2xl ">Password Length</h3>
				<div className="flex flex-col gap-4">
					<p className="text-center rounded-xl bg-gray-200 p-2 font-bold">{settings.length}</p>
					<input type="range" min="8" max="40" onChange={inputRangeHandler} defaultValue={12} />
				</div>
			</div>
			<div className="flex flex-col justify-center items-center gap-4">
				<div className="flex justify-around w-full p-4">
					<div className="flex gap-1 w-[120px]">
						<input type="checkbox" name="uppercase" className="checkbox" onChange={handleCheckBox} />
						<p className="font-bold tracking-wider">Uppercase</p>
					</div>
					<div className="flex gap-1 w-[120px]">
						<input type="checkbox" name="lowercase" className="checkbox" onChange={handleCheckBox} />
						<p className="font-bold tracking-wider">Lowercase</p>
					</div>
				</div>
				<div className="flex justify-around w-full p-4">
					<div className="flex gap-1 w-[120px]">
						<input type="checkbox" name="numbers" className="checkbox" onChange={handleCheckBox} />
						<p className="font-bold tracking-wider">Numbers</p>
					</div>
					<div className="flex gap-1 w-[120px]">
						<input type="checkbox" name="symbols" className="checkbox" onChange={handleCheckBox} />
						<p className="font-bold tracking-wider">Symbols</p>
					</div>
				</div>
			</div>
		</form>
	)
}
