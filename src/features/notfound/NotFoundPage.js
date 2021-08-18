import React from 'react'
import '../../styles/TodoItem.css';
import { Image } from 'antd';

function NotFoundPage() {
    return (
        <div className={`PageNotFound`}>
            <ul className="not-found">
                <h1>Page not found</h1>
                <Image 
                    width={'50%'}
                    src="https://www.pngitem.com/pimgs/b/254-2549834_404-png.png"
                />
            </ul>
        </div>
    )
}

export default NotFoundPage;