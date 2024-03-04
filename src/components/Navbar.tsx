import '../assets/css/Navbar.css'
import { useState } from 'React'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav>
            <div className="nav-logo">
                <img src="img/BrandLogo.png" alt="LEGO" width='48' height='48' />
            </div>
            <div className='nav-categories'>
                <svg width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.7">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9999 32.9997C27.7728 32.9997 34.0739 30.4772 34.0739 27.3656C34.0739 27.3654 34.0739 27.3652 34.0739 27.365V22.5357H27.2506C25.133 22.0251 22.6521 21.7314 19.9999 21.7314C17.3476 21.7314 14.8667 22.0251 12.7491 22.5357H5.92578V27.365C5.92578 27.3652 5.92578 27.3654 5.92578 27.3656C5.92578 30.4772 12.227 32.9997 19.9999 32.9997Z" fill="#006CB7"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 28.9753C31.0457 28.9753 40 24.4348 40 18.8338C40 18.8338 40 18.8338 40 18.8338V10.1411H30.3071C27.2971 9.22142 23.7704 8.69238 20 8.69238C16.2296 8.69238 12.7029 9.22142 9.69288 10.1411H0V18.8338C0 18.8338 0 18.8338 0 18.8338C0 24.4348 8.9543 28.9753 20 28.9753Z" fill="#2CAFE5"/>
                <ellipse cx="20" cy="10.1415" rx="20" ry="10.1415" fill="#BBDCF5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9998 16.7409C26.1363 16.7409 31.1109 14.2185 31.1109 11.1068C31.1109 11.1066 31.1109 11.1064 31.1109 11.1062V6.27692H25.7241C24.0522 5.76635 22.0937 5.47266 19.9998 5.47266C17.9059 5.47266 15.9473 5.76635 14.2755 6.27692H8.88867V11.1062C8.88867 11.1064 8.88867 11.1066 8.88867 11.1068C8.88867 14.2185 13.8633 16.7409 19.9998 16.7409Z" fill="#2CAFE5"/>
                <ellipse cx="19.9998" cy="5.79512" rx="11.1111" ry="5.79512" fill="#BBDCF5"/>
                </g>
                <line x1="15.5" y1="7.5" x2="24.5" y2="7.5" stroke="#006CB7" stroke-linecap="round"/>
                <path d="M16 5.5H24" stroke="#006CB7" stroke-linecap="round"/>
                <line x1="16.5" y1="3.5" x2="23.5" y2="3.5" stroke="#006CB7" stroke-linecap="round"/>
                </svg>
                <span>Categories</span>
            </div>
            <div className="nav-links">
                <a href="#">Gifting</a>
                <a href="#">Travel</a>
                <a href="#">Adults Welcome</a>
                <a href="#">Art & Home Décor</a>
                <a href="#">Space</a>
                <a href="#">Pop Culture</a>
                <a href="#">Toddlers</a>
                <a href="#">Real World Role Playing</a>
            </div>
            <div className='nav-actions'>
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Contact us</span>
                </button>
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.2 1.4C5.38885 1.14819 5.68524 1 6 1H18C18.3148 1 18.6111 1.14819 18.8 1.4L21.7939 5.39188C21.9232 5.56038 22 5.77122 22 6V20C22 20.7957 21.6839 21.5587 21.1213 22.1213C20.5587 22.6839 19.7957 23 19 23H5C4.20435 23 3.44129 22.6839 2.87868 22.1213C2.31607 21.5587 2 20.7957 2 20V6C2 5.77123 2.07682 5.56041 2.20606 5.39192L5.2 1.4ZM17.5 3L19 5H5L6.5 3H17.5ZM4 20V7H20V20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8946 19.2652 21 19 21H5C4.73478 21 4.48043 20.8946 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20ZM9 10C9 9.44771 8.55228 9 8 9C7.44772 9 7 9.44771 7 10C7 11.3261 7.52678 12.5979 8.46447 13.5355C9.40215 14.4732 10.6739 15 12 15C13.3261 15 14.5979 14.4732 15.5355 13.5355C16.4732 12.5979 17 11.3261 17 10C17 9.44771 16.5523 9 16 9C15.4477 9 15 9.44771 15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7956 13 12 13C11.2044 13 10.4413 12.6839 9.87868 12.1213C9.31607 11.5587 9 10.7956 9 10Z" fill="black"/>
                    </svg>
                    <span>Request</span>
                </button>
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 16.8095C18.0396 15.3514 19 13.2879 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C13.1304 19 15.0663 18.1672 16.5 16.8095ZM16.5 16.8095L22 22.3095" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Search</span>
                </button>
            </div>
        </nav>
    )
}