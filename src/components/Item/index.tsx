import '../../assets/css/Item.css'
import { Property } from 'csstype'

interface ItemProps {
    title?: string
    content?: string
    button?: string
    background?: string
    alignItems?: string
}

export function Item({ title, content, button, background, alignItems }: ItemProps) {
    const alignStyle =  
        { 
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            alignItems: alignItems,
            textAlign: (alignItems == 'flex-start') ? 'left' as Property.TextAlign : 'right' as Property.TextAlign
        } 

    return (
        <div className="item-container" style={alignStyle}>
            {title && <h3 className='title'>{title}</h3>}
            {content && <p className='content'>{content}</p>}
            {button && (
                <button className='detailsBtn'>
                    <span>{button}</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L19 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 19L19 12L12 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            )}
        </div>
    )
}