export const FILE_FORMATS = {
    document: [
        { name: "PDF", extensions: ["pdf"] },
        { name: "Excel", extensions: ["xls", "xlsx"] },
        { name: "Word", extensions: ["doc", "docx"] },
        { name: "Text", extensions: ["txt"] },
        { name: "CSV", extensions: ["csv"] },
        { name: "PowerPoint", extensions: ["ppt", "pptx"] },
        { name: "XML", extensions: ["xml"] }
    ],
    image: [
        { name: "JPEG", extensions: ["jpg", "jpeg"] },
        { name: "PNG", extensions: ["png"] },
        { name: "GIF", extensions: ["gif"] },
        { name: "SVG", extensions: ["svg"] },
        { name: "WebP", extensions: ["webp"] },
        { name: "AVIF", extensions: ["avif"] },
        { name: "Webp", extensions: ["webp"] },
    ],
    video: [
        { name: "MP4", extensions: ["mp4"] },
        { name: "WebM", extensions: ["webm"] },
        { name: "OGG", extensions: ["ogv"] },
        { name: "AVI", extensions: ["avi"] },
        { name: "MOV", extensions: ["mov"] },
        { name: "MKV", extensions: ["mkv"] }
    ],
    audio: [
        { name: "MP3", extensions: ["mp3"] },
        { name: "AAC", extensions: ["aac"] },
        { name: "WAV", extensions: ["wav"] },
        { name: "FLAC", extensions: ["flac"] }
    ],
    archive: [
        { name: "ZIP", extensions: ["zip"] },
        { name: "GZIP", extensions: ["gz"] },
        { name: "TAR", extensions: ["tar"] },
        { name: "RAR", extensions: ["rar"] },
        { name: "7-Zip", extensions: ["7z"] }
    ],
    favicon: [
        { name: "ICO", extensions: ["ico"] }
    ]
};