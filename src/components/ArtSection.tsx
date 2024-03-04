import { Item } from './Item'
import { Section } from './Section'

export default function ArtSection() {
    return (
        <>
            <Section 
                title='ART & HOME DÉCOR'
                subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                accentColor='1px solid #EE7500'
                childrenTop={
                    <>
                        <Item 
                            background='img/Rectangle453.png'
                        />
                        <Item 
                            title='Playful ideas for refreshing your space while tapping into your more creative side'
                            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'
                            button='View details'
                            alignItems='flex-end'
                        />
                    </>
                }
            />
        </>
    )
}