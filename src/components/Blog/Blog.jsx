import { FaBeer } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Blog = ({blog, handleAddToBookmarks, handleReadingTime}) => {

    const {id, title, cover, reading_time, author_img, author, posted_date, hashtags} = blog;

    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmarks(blog)} className='ml-2'><FaBeer></FaBeer></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleReadingTime(id, reading_time)} className='text-purple-800 font-bold underline'>Marks as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func
}

export default Blog;