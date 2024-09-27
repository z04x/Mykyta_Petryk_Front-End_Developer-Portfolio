// src/constants/social-media-constants.js

// Import SVG icons for social media platforms
import githubIcon from '@/assets/images/social-media-icons/GitHub.svg';
import linkedinIcon from '@/assets/images/social-media-icons/Linkedin.svg';
import telegramIcon from '@/assets/images/social-media-icons/Telegram.svg';
import instagramIcon from '@/assets/images/social-media-icons/Instagram.svg';

/**
 * Array of social media link objects.
 * Each object contains the platform name, profile URL, and icon.
 * @type {Array<{name: string, url: string, icon: string}>}
 */
export const SOCIAL_MEDIA_LINKS = [
    {
        name: 'GitHub',
        url: 'https://github.com/your-username',
        icon: githubIcon
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/your-profile',
        icon: linkedinIcon
    },
    {
        name: 'Telegram',
        url: 'https://t.me/your-username',
        icon: telegramIcon
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/your-username',
        icon: instagramIcon
    }
];

/**
 * Get social media link by name.
 * @param {string} name - The name of the social media platform.
 * @returns {Object|undefined} The social media link object or undefined if not found.
 */
export function getSocialMediaLinkByName(name) {
    return SOCIAL_MEDIA_LINKS.find(link => link.name.toLowerCase() === name.toLowerCase());
}