import { Item } from './Item'
import { Section } from './Section'

export default function PopSection() {
    return (
        <>
            <Section 
                title='POP CULTURE'
                subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                accentColor='1px solid #FC36A5'
                childrenTop={
                    <>
                        <Item 
                            background='img/Rectangle464.png'
                        />
                        <Item 
                            title='Recreate scenes from your favorite movies and TV series'
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