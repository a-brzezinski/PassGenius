import { RefreshCcw, Copy } from 'react-feather'
import { passwordGenerator } from '../../helpers/utilities'
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { setPassword } from '../../redux/passwordSlice'

export default function PasswordForm() {
	const passwordInputRef = useRef<HTMLInputElement>(null)
	const { settings, password } = useSelector((state: RootState) => state.password)
	const dispatch = useDispatch()

	const generatePasswordHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		dispatch(setPassword(passwordGenerator(settings)))
	}

	useEffect(() => {
		dispatch(setPassword(passwordGenerator(settings)))
	}, [])

	const copyToClipboard = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		if (passwordInputRef.current) {
			navigator.clipboard.writeText(passwordInputRef.current.value)
		}
	}

	return (
		<form className="flex gap-2  rounded-xl bg-white p-2">
			<input
				type="text"
				readOnly
				ref={passwordInputRef}
				value={password}
				className="p-2 focus:outline-none text-xl w-full"
			/>
			<button onClick={generatePasswordHandler}>
				<RefreshCcw size={35} />
			</button>
			<button onClick={copyToClipboard}>
				<Copy size={35} />
			</button>
		</form>
	)
}
