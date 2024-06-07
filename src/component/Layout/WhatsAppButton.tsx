import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9897976962" // Replace "your-number" with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 left-10 bg-green-500 text-white rounded-full p-3 shadow-md z-50"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
