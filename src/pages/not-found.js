import { useEffect } from "react";

export default function NotFound(){

    useEffect(() => {
        document.title = 'Not Found';
    },[]);

    return (
        <div className="flex justify-center h-screen bg-gray-100">
            <div className="m-auto max-w-screen-lg">
                <p className="text-center text-2xl text-gray-500">Not Found</p>
            </div>
        </div>
    );
}