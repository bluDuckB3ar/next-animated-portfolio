'use client '

export default function loader({ src, width, quality }) {
    return `https://mahto.xyz/${src}?w=${width}&q=${quality || 75}`   
}
