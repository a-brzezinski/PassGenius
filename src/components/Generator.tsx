import PasswordForm from './PasswordForm/PasswordForm'
import PasswordPower from './PasswordPower/PasswordPower'
import SettingsForm from './SettingsForm/SettingsForm'

export default function Generator() {
	return (
		<div className="flex flex-col p-2 gap-6 md:w-[500px]">
			<PasswordForm />
			<PasswordPower />
			<SettingsForm />
		</div>
	)
}
