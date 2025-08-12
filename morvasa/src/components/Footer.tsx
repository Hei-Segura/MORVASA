export default function Footer() {
    return (
        <footer className="bg-dark text-white text-center p-6 mt-10">
            <p className="mb-1">MORVASA © {new Date().getFullYear()}. Todos los derechos reservados.</p>
            <p className="mb-1">Dirección: Pérez Zeledón, Costa Rica | Tel: +506 8888-8888</p>
            <p>Email: contacto@morvasa.com</p>
        </footer>
    );
}
