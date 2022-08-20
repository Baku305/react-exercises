 import {Link} from 'react-router-dom'

	export function Welcome({name}) {
		return(
		<div>
			<h1>HELLO {!name ? "WORLD" : name}</h1>
		</div>)
	}

