import { useEffect, useState } from "react";

interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

interface Options {
    onload?: (file: string | ArrayBuffer) => void;
}

export const useSampleLoader = () => {
    const [file, loadSample] = useState<Blob>();
    const [error, setError] = useState<ProgressEvent<FileReader>>();
    const [sample, setSample] = useState<string | ArrayBuffer | null>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const reader = new FileReader();
        reader.onloadstart = () => {
            setLoading(true);
        };

        reader.onloadend = () => {
            setLoading(false);
        };

        reader.onload = (e) => {
            setSample(e.target?.result);
        };

        reader.onerror = e => {
            setError(e);
        };
        try {
            reader.readAsDataURL(file as Blob);
        } catch (e) {
            setError(e);
        }
    }, [file]);

    return { file, sample, error, loading, loadSample };
};
