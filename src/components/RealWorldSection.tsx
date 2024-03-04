import { Item } from './Item'
import { Section } from './Section'

export default function RealWorldSection() {
    return (
        <>
            <Section 
                title='REAL WORLD ROLE PLAYING'
                subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                accentColor='1px solid #E3000B'
                childrenTop={
                    <>
                        <Item 
                            title='Celebrating the everyday heroes'
                            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'
                            button='View details'
                            alignItems='flex-start'
                        />
                        <Item 
                            background='img/Rectangle468.png'
                        />
                    </>
                }
                childrenBottom={
                    <>
                        <Item 
                            background='img/Rectangle466.png'
                        />
                        <Item 
                            title='xxxxx TBD'
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