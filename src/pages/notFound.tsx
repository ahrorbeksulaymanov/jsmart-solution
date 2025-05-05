import {Link} from 'react-router-dom'

const NotFoundPage = () => {

    return (
        <div className="flex h-full items-center justify-center">
            <h2>Sorry, the page you visited does not exist.</h2>
            <Link to={'/'}>Back Home</Link>
        </div>
    )
}
export default NotFoundPage;