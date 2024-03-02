import { Item } from './Item'
import { Section } from './Section'

export default function ToddlersSection() {
    return (
        <>
            <Section 
                title='TODDLERS'
                subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                accentColor='1px solid #FFD500'
                childrenTop={
                    <>
                        <Item 
                            title='Waterproof toys for toddlers and beyond'
                            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'
                            button='View details'
                            alignItems='flex-start'
                        />
                        <Item 
                            background='img/Rectangle467.png'
                        />
                    </>
                }
                childrenBottom={
                    <>
                        <Item 
                            background='img/Rectangle465.png'
                        />
                        <Item 
                            title='xx TBD'
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