// Modules
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
// Components

// Styles
import './HomePage.css';

export default function HomePage() {
    const title = "Welcome to my Website!";
    return(
        <AnimatePresence>
            <motion.div 
                className="HomePage"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <h1 className="title">{title}</h1>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil accusantium, beatae esse, ab ullam soluta velit amet corrupti nobis error quaerat? Facere nisi nesciunt soluta molestiae voluptate? Modi, rem?</p>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}