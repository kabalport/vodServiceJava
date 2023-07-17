import React, { useState } from 'react';

const VideoUpload: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    }

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('파일을 선택해주세요.');
            return;
        }

        // 파일 업로드 처리
        // 여기서는 실제 파일 업로드가 아니라, 단순히 더미 URL을 반환한다고 가정합니다.
        const uploadedFileUrl = 'https://example.com/dummy.mp4';

        console.log('업로드된 파일 URL:', uploadedFileUrl);
    }

    return (
        <div>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>업로드</button>
        </div>
    );
}

export default VideoUpload;
