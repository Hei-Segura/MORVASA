import { useState } from "react";
import { motion } from "framer-motion";

export default function QuoteForm() {
    const [form, setForm] = useState({ nombre: "", telefono: "", servicio: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Cotización enviada:\n\n${JSON.stringify(form, null, 2)}`);
    };

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto my-10"
        >
            <h2 className="text-2xl font-bold mb-4 text-primary">Solicitar Cotización</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="nombre"
                    placeholder="Nombre"
                    className="w-full p-2 border rounded"
                    onChange={handleChange}
                    required
                />
                <input
                    name="telefono"
                    placeholder="Teléfono"
                    className="w-full p-2 border rounded"
                    onChange={handleChange}
                    required
                />
                <input
                    name="servicio"
                    placeholder="Servicio requerido"
                    className="w-full p-2 border rounded"
                    onChange={handleChange}
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 rounded hover:bg-secondary hover:text-dark transition"
                >
                    Enviar
                </button>
            </form>
        </motion.div>
    );
}
