import { Image } from 'lucide-react';

const ImagePlaceholder = ({ title, description, height = 'h-64' }) => {
  return (
    <div className={`${height} bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-500 relative overflow-hidden group cursor-pointer`}>
      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition"></div>
      <Image className="w-12 h-12 mb-3 opacity-50" />
      <p className="font-medium text-center px-4">{title}</p>
      <p className="text-sm text-center px-4 mt-1 opacity-70">{description}</p>
      <p className="text-xs absolute bottom-2 text-gray-400">Image placeholder</p>
    </div>
  );
};

export default ImagePlaceholder;