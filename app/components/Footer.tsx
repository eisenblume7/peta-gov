import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaInstagram,
    FaGooglePlusG,
    FaPinterestP,
    FaRss,
} from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="flex bg-teal-600 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="ml-96 mt-16 flex flex-col items-center">
                    <h2 className="absolute left-20 mt-8 text-4xl font-semibold mb-2">PetaGov</h2>
                    <p className="text-sm text-center mb-4">Universitas Airlangga</p>

                    <div className="flex space-x-4 mb-4">
                        <p>(+62) 98998</p>
                        <span>|</span>
                        <p>031 98990</p>
                    </div>

                    <div className="flex space-x-3 mb-6">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaLinkedinIn />
                        <FaYoutube />
                        <FaInstagram />
                        <FaGooglePlusG />
                        <FaPinterestP />
                        <FaRss />
                    </div>

                    <div className="absolute left-20 mt-28 mb space-x-6 text-sm text-center mb-4">
                        <a href="#" className="hover:underline">ABOUT US</a>
                        <a href="#" className="hover:underline">CONTACT US</a>
                        <a href="#" className="hover:underline">HELP</a>
                        <a href="#" className="hover:underline">PRIVACY POLICY</a>
                        <a href="#" className="hover:underline">DISCLAIMER</a>
                    </div>

                    <p className="text-xs mb-20">&copy; 2024 - Peta Government</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
