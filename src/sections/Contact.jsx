import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Envoi du formulaire simulé
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail("");
      setMessage("");
    }, 1200);
  };

  // Composant icône sociale réutilisable
  const SocialIcon = ({ href, label, color, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      aria-label={label}
      className="transition transform hover:scale-110"
    >
      {React.cloneElement(children, { color, size: 32 })}
    </a>
  );

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-200"
    >
      {/* Titre animé */}
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 text-blue-600"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact
      </motion.h2>

      {/* Formulaire */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-full sm:max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <label className="sr-only">Votre email</label>
        <motion.input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
          whileFocus={{ scale: 1.02 }}
        />

        <label className="sr-only">Votre message</label>
        <motion.textarea
          placeholder="Votre message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
          rows="5"
          required
          whileFocus={{ scale: 1.02 }}
        />

        <motion.button
          type="submit"
          className="bg-blue-500 text-white py-3 rounded-md font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
        >
          {loading ? "Envoi..." : "Envoyer"}
        </motion.button>

        {/* Toast de succès */}
        <AnimatePresence>
          {success && (
            <motion.div
              className="text-green-600 font-semibold text-center mt-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              Message envoyé avec succès !
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>

      {/* Réseaux sociaux */}
      <motion.div
        className="flex justify-center gap-8 mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <SocialIcon
          href="https://github.com/Raoul-Ekwa"
          label="Voir mon GitHub"
          color="#181717"
        >
          <FaGithub />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/martin-chanboung-b992412ba/"
          label="Voir mon LinkedIn"
          color="#0A66C2"
        >
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon
          href="mailto:nzetemmartin@icloud.com"
          label="Envoyer un email"
          color="#D44638"
        >
          <FaEnvelope />
        </SocialIcon>
        <SocialIcon href="tel:+337242594" label="Appeler" color="#25D366">
          <FaPhone />
        </SocialIcon>
      </motion.div>
    </section>
  );
};

export default Contact;
