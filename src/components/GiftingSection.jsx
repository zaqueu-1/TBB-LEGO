import { Item } from './Item'
import { Section } from './Section'

export default function GiftingSection() {
    return (
        <>
            <Section 
                title='GIFTING'
                subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                accentColor='1px solid #EE7500'
                childrenTop={
                    <>
                        <Item 
                            title='Toys perfect for birthday gift-giving season in Spring'
                            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'
                            button='View details'
                            alignItems='flex-start'
                        />
                        <Item 
                            background='img/Rectangle449.png'
                        />
                    </>
                }
                childrenBottom={
                    <>
                        <Item 
                            background='img/Rectangle450.png'
                        />
                        <Item 
                            title='Gifts for Mom'
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