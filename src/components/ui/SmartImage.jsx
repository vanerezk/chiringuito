import {useState} from 'react';

function SmartImage({src, alt, className, fallbackLabel = 'Imagen pendiente'}) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className={`flex items-center justify-center bg-sea-100 text-sea-700 ${className}`}>
        <span className='px-4 text-center text-xs font-semibold uppercase tracking-[0.2em]'>
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading='lazy'
      onError={() => setHasError(true)}
    />
  );
}

export default SmartImage;
