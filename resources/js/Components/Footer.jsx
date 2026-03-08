export default function Footer() {
    return (
        <footer className="bg-white border-t mt-16">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

                {/* Left */}
                <div className="flex items-center gap-3">
                    <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-md">
                        🏛
                    </div>

                    <div>
                        <p className="font-medium text-gray-700">
                            Barangay Connect
                        </p>

                        <p className="text-xs text-gray-500">
                            © 2024 Barangay Official Portal. All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className="flex gap-8 mt-5 md:mt-0 text-sm">
                    <button className="hover:text-gray-700">
                        Privacy Policy
                    </button>

                    <button className="hover:text-gray-700">
                        Terms of Service
                    </button>

                    <button className="hover:text-gray-700">
                        Contact Support
                    </button>
                </div>

            </div>
        </footer>
    );
}