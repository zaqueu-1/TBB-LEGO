import { Item } from './Item'
import { Section } from './Section'

export default function AdultsWelcomeSection() {
    return (
        <>
            <Section 
                title='ADULTS WELCOME'
                subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                accentColor='1px solid #006CB7'
                childrenTop={
                    <>
                        <Item 
                            title='For the Kids at Heart who love to unplug, unbox and unwind'
                            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'
                            button='View details'
                            alignItems='flex-start'
                        />
                        <Item 
                            background='img/Rectangle448.png'
                        />
                    </>
                }
            />
        </>
    )
}