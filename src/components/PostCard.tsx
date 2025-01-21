import { Link } from 'react-router-dom'
import dbService from '../appwrite/conf'

interface props {
    $id: string,
    title: string,
    featuredImage: string,
}

export default function PostCard({$id, title, featuredImage}: props) {
    return (
        <Link to={`/post/${$id}`}>
            <div>
                <div className='w-full bg-gray-100 rounded-xl p-4'>
                    <div className='w-full justify-center mb-4'>
                        <img src={dbService.getFilePreview(featuredImage)} className='rounded-xl' alt="Img" />
                    </div>
                </div>
                <h1 className='text-xl font-bold'>{ title }</h1>
            </div>
        </Link>
    )
}
