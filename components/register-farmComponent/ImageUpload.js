import { useState } from 'react';
import supabase from '../../utils/supabase/server';
import Image from 'next/image';

const ImageUpload = ({ onImagesUpload }) => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [uploadedImages, setUploadedImages] = useState({}); 

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    
    if (selectedFiles.length < 3 || selectedFiles.length > 5) {
      setError('Please select between 3 and 5 files.');
      return;
    }

    setFiles(selectedFiles);
    setError(null); // Clear any previous error
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      setError('Please select files to upload.');
      return;
    }

    setUploading(true);
    setError(null);
    setUploadedImages({});
  
    const uploadedImagesArray = []; // Array to store image details in the desired format
  
    for (const file of files) {
      const fileName = `${Date.now()}_${file.name}`; // Generate a unique filename to prevent overwrites
  
      try {
        // Upload the file to Supabase storage
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('images') // Replace with your bucket name
          .upload(`public/${fileName}`, file, {
            cacheControl: '3600',
            upsert: false,
          });
  
        if (uploadError) {
          console.error('Upload error:', uploadError.message);
          throw uploadError;
        }
  
        console.log('Upload successful, data:', uploadData);
  
        // Fetch the public URL of the uploaded image
        const { data: publicUrlData, error: urlError } = supabase.storage
          .from('images')
          .getPublicUrl(`public/${fileName}`);
  
        if (urlError) {
          console.error('Error fetching public URL:', urlError.message);
          throw urlError;
        }
  
        const imageUrl = publicUrlData.publicUrl;
  
        // Prepare image details in the desired format
        const imageDetails = {
          imageKey: `images/public/${fileName}`,
          imageUrl,
        };
  
        uploadedImagesArray.push(imageDetails); // Add image details to the array
      } catch (error) {
        setError('Error: ' + error.message);
        console.error('Error during file upload:', error);
      }
    }
  
    setUploadedImages(uploadedImagesArray); // Set uploaded images state to the array
    onImagesUpload(uploadedImagesArray); // Pass the array of image data back to the parent component
  
    setUploading(false);
  };

  return (
    <div className='flex flex-row gap-x-4 md:gap-x-20'>
      <label>Upload Farm photos (PNG, JPG, JPEG formats)</label>
      <div className='flex flex-wrap'>
        <input type="file" multiple onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={uploading} className='md:p-0 h-7 p-1'>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {Object.keys(uploadedImages).length > 0 && (
          <div>
          <p>Uploaded Images:</p>
          <div className='flex flex-wrap gap-2 md:gap-5 mt-5'>
            {Object.entries(uploadedImages).map(([imageId, image], index) => (
              <div key={index} className='gap-4'>
              <Image 
                src={image.imageUrl} 
                alt="Uploaded" 
                width={70} 
                height={70} 
                className='w-[55px] md:w-[70px] lg:w-[120px]'
              />
            </div>
            ))}
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
