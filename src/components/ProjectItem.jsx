import React from 'react'
import './Programming.css'

function ProjectItem ( props ) {
    const load_images = (images) => {
        if (images.length == 0){return}
        let content = [];
        for(let i=0; i<images.length; i++){
            content.push(
                <div>
                    <img src={images[i]}/>
                </div>

            );
        }
        return <div className='additional_images_container'>{content}</div>;
    }

    return (
        <div className='programming_project_item'>
                <div className='programming_project_row1'>
                    <div className='programming_project_column1'>
                        <div className='programming_project_title'>{props.title}</div>
                        <div className='programming_project_description'>
                            {props.description}
                        </div>
                        <div>
                        <a target='_blank' href={props.url} className='du programming_project_link clickable_cursor clicked_cursor'>{props.button_text}</a>
                        </div>
                    </div>
                    
                    <img className="programming_project_image" src={props.image_url} alt={props.image_alt} />
                </div>

                <div>{load_images(props.images)}</div>
        </div>
    );
}

export default ProjectItem