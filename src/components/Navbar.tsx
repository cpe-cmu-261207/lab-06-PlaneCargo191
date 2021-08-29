import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='my-5'>
			<p className='text-center text-3xl italic my-5'>
				Minimal Bitcoin App
			</p>
			<div className='flex justify-center text-md space-x-5'>
				<p>
					<Link to = '/current'>
						Current Price
					</Link>
				</p>	
				<p>
					|
				</p>
				<p>
					<Link to = '/history/select'>
						Historical Price
					</Link>
				</p>	
				<p>
					|
				</p>
				<p>
					<Link to = '/about'>
						About Me
					</Link>
				</p>	
			</div>
		</div>
	)
}

export default Navbar