import { Item } from './Item'
import { Section } from './Section'

export default function TravelSection() {
    return (
        <>
            <Section 
                title='TRAVEL'
                subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                accentColor='1px solid #00963E'
                childrenTop={
                    <>
                        <Item 
                            title='Travel the world no matter where you are. No Passport needed.'
                            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'
                            button='View details'
                            alignItems='flex-start'
                        />
                        <Item 
                            background='img/Rectangle452.png'
                        />
                    </>
                }
                childrenBottom={
                    <>
                        <Item 
                            background='img/Rectangle451.png'
                        />
                        <Item 
                            title='Fun accessories to take with you on your travels or keep kids entertained'
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