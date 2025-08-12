import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/Logo_MORVASA_sin_fondo.png";

export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-dark text-white flex items-center justify-between p-4 shadow-md sticky top-0 z-50"
        >
            <Link to="/" onClick={() => setOpen(false)}>
                <img src={logo} alt="MORVASA" className="h-10 md:h-12 cursor-pointer" />
            </Link>
            <button
                className="md:hidden"
                onClick={() => setOpen((o) => !o)}
                aria-label="Toggle menu"
            >
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
            </button>
            <nav
                className={`${open ? "flex" : "hidden"
                    } absolute top-full left-0 w-full bg-dark flex-col items-center md:static md:flex md:flex-row md:space-x-6 p-4 md:p-0`}
            >
                {["/", "/nosotros", "/servicios", "/proyectos", "/testimonios", "/contacto"].map(
                    (path, i) => {
                        const labels = ["Inicio", "Nosotros", "Servicios", "Proyectos", "Testimonios", "Contacto"];
                        return (
                            <Link
                                key={i}
                                to={path}
                                className="block py-2 md:py-0 text-lg hover:text-secondary transition"
                                onClick={() => setOpen(false)}
                            >
                                {labels[i]}
                            </Link>
                        );
                    }
                )}
            </nav>
        </motion.header>
    );
}
