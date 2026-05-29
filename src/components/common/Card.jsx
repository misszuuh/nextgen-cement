const Card = ({ children, className = '', hover = true }) => {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-md ${hover ? 'hover-lift' : ''} ${className}`}>
      {children}
    </div>
  );
};
export default Card;