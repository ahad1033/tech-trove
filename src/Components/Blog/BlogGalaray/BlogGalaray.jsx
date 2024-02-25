

const BlogGalaray = () => {
    return (
        <div className='flex gap-5 my-8 md:my-10 lg:my-16 px-5 md:px-10 lg:px-0 pb-0 md:pb-0 lg:pb-0 '>
            <div className='w-2/3'>
                <img
                className='h-full object-cover'
                src="/blogGalary1.webp"
                // src="https://i.ibb.co/VgjVgY0/blog-Galary1.png"
                alt="" 
                />
            </div>
            <div className='w-1/3 flex flex-col gap-5'>
                <img className='h-full object-cover' src="https://i.ibb.co/6nrV9Xj/blog-Galary2.png" alt="" />
                <img className='h-full object-cover' src="https://i.ibb.co/y007txw/blog-Galary4.png" alt="" />
                <img className='h-full object-cover' src="https://i.ibb.co/gvTKcP7/blog-Galary3.png" alt="" />
            </div>
        </div>
    );
};

export default BlogGalaray;