import { Item } from './Item'
import { Section } from './Section'

export default function SpaceSection() {
    return (
        <>
            <Section 
                title='SPACE'
                subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                accentColor='1px solid #000000'
                childrenTop={
                    <>
                        <Item 
                            title='Capture the wonders of space and exploration'
                            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'
                            button='View details'
                            alignItems='flex-start'
                        />
                        <Item 
                            background='img/Rectangle463.png'
                        />
                    </>
                }
            />
        </>
    )
}