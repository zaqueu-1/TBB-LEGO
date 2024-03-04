import '../assets/css/Hero.css'

export default function Hero() {
    return (
        <div className='hero-container'>
            <div className='hero-text'>
                <h1>Welcome to the Play Matters Interactive Lookbook</h1>
            </div>
            <div className="hero-controls">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="78" height="78" rx="39" fill="#F5F5F5" fill-opacity="0.4" stroke="white" stroke-width="2"/>
                <path d="M38.6667 30.667L32.0001 36.0003H26.6667V44.0003H32.0001L38.6667 49.3337V30.667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M54.6667 36L46.6667 44" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M46.6667 36L54.6667 44" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1920" height="1080" fill="#B1B1B1"/>
                </svg>
            </div>
            <div className="bottom-controls">
                <span>Scroll down</span>
                <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1920" height="1080" fill="#B1B1B1"/>
                </svg>
            </div>
        </div>
    )
}