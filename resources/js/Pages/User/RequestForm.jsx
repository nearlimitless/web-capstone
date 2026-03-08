import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function SubmitRequest() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800">
                    Submit New Request
                </h2>
            }
        >
            <Head title="Submit Request" />

            <div className="py-10">
                <div className="mx-auto max-w-3xl sm:px-6 lg:px-8">

                    {/* Form Card */}
                    <div className="bg-white shadow rounded-lg p-6">

                        <p className="text-sm text-gray-500 mb-6">
                            Your report helps us serve the community better. Please provide as much detail as possible.
                        </p>

                        {/* Request Category */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Request Category
                            </label>

                            <div className="grid grid-cols-2 gap-4">
                                <button className="border-2 border-blue-600 p-4 rounded-lg text-left">
                                    <p className="font-semibold">
                                        Complaint
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Report an issue or violation
                                    </p>
                                </button>

                                <button className="border p-4 rounded-lg text-left">
                                    <p className="font-semibold">
                                        Service Request
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Request maintenance or assistance
                                    </p>
                                </button>
                            </div>
                        </div>

                        {/* Type & Priority */}
                        <div className="grid grid-cols-2 gap-4 mb-6">

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Type of Issue
                                </label>

                                <select className="w-full border rounded-md px-3 py-2 text-sm">
                                    <option>Select issue type</option>
                                    <option>Garbage Collection</option>
                                    <option>Street Light Repair</option>
                                    <option>Road Damage</option>
                                    <option>Barangay Clearance</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Priority Level
                                </label>

                                <div className="flex gap-2">
                                    <button className="px-4 py-2 border rounded-md text-sm">
                                        Low
                                    </button>

                                    <button className="px-4 py-2 border border-orange-400 text-orange-500 rounded-md text-sm">
                                        Medium
                                    </button>

                                    <button className="px-4 py-2 border rounded-md text-sm">
                                        High
                                    </button>
                                </div>
                            </div>

                        </div>

                        {/* Location */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Location
                            </label>

                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Street address, landmark, or specific spot"
                                    className="w-full border rounded-md px-3 py-2 text-sm"
                                />

                                <button className="border px-4 py-2 rounded-md text-sm">
                                    Detect
                                </button>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>

                            <textarea
                                rows="4"
                                placeholder="Describe the situation in detail..."
                                className="w-full border rounded-md px-3 py-2 text-sm"
                            />
                        </div>

                        {/* File Upload */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Attach Photos/Evidence
                            </label>

                            <div className="border-2 border-dashed rounded-lg p-6 text-center text-sm text-gray-500">
                                Click to upload or drag and drop
                                <br />
                                PNG, JPG or PDF up to 10MB
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700">
                                Submit Request
                            </button>

                            <button className="border px-6 py-2 rounded-md text-sm">
                                Cancel
                            </button>
                        </div>

                        <p className="text-xs text-green-600 mt-4">
                            Your data is protected and encrypted
                        </p>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}