'use client'
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'prismjs';
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'; // Import more languages as needed
import 'prismjs/components/prism-csharp';

import React, { useEffect, useRef, useState } from 'react';

export default function Code(params) {
    const codeRef = useRef(null);
    const [language, setLanguage] = useState("");
    const [code, setCode] = useState("");
    useEffect(() => {
        let lModified = params.element.language.toLowerCase();
        if(lModified === "c#") {
            lModified = "csharp";
        }
        if(lModified === "c++") {
            lModified = "cpp";
        }
        setCode(params.element.content.replaceAll('\\n', '\n'));
        setLanguage(lModified);

    }, [params.element.content]);


    useEffect(() => {

        if (codeRef.current) {
            Prism.highlightElement(codeRef.current);
        }
    }, [code]);
    return (
        <div className="mb-7 relative bg-gray-900 rounded-md max-w-80 lg:max-w-screen-sm shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-gray-300 text-sm font-mono px-4 py-2">
                {params.element.language.toUpperCase()}
            </div>
            <pre className="text-left px-4 py-4 text-sm overflow-x-auto">
                <code ref={codeRef} className={`text-gray-200 whitespace-pre-wrap  language-${language}`}>
                  {code}
                </code>
            </pre>
        </div>
    );
};