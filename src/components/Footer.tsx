
export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-4">
          {/* Social Media Links */}
          <li>
            <a
              href="#"
              className="hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-red-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
