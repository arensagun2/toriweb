// Modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core"
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
// Components

// Styles
import './SocialPage.css'


export default function SocialPage() {
    const socialIcons = [
        {name: "twitter"},
        {name: "instagram"},
        {name: "tiktok"},
        {name: "facebook"},
    ];

    return (
        <AnimatePresence>
            <motion.div 
                className="SocialPage"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <h1>Social Page</h1>

                <div className="iconsContainer">
                    {socialIcons.map(socialIcon => <FontAwesomeIcon key={socialIcon.name} icon={icon({iconName: socialIcon.name, prefix: 'fab'})}  size="10x" className="socialIcons"></FontAwesomeIcon>)}
                </div>
            </motion.div>
        </AnimatePresence>
    )
}