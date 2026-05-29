import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-deep-green text-white hover:bg-opacity-90',
    secondary: 'bg-transparent border-2 border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-white',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark-blue',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;