import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function TestDashboard() {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">My Requests</h2>}
        >
            <Head title="Support Tickets" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

                    {/* Title */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">Support Tickets</h1>
                        <p className="text-gray-500">
                            Track and manage your submitted service requests for Barangay Central.
                        </p>
                    </div>

                    {/* Top Controls */}
                    <div className="flex items-center justify-between bg-white p-4 shadow-sm rounded-lg mb-4">

                        <div className="flex items-center gap-4 w-full">

                            {/* Search */}
                            <input
                                type="text"
                                placeholder="Search by Ticket ID or Subject..."
                                className="border rounded-lg px-4 py-2 w-1/3"
                            />

                            {/* Filters */}
                            <div className="flex gap-2">
                                <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-md">
                                    All
                                </button>

                                <button className="px-3 py-1 text-sm bg-gray-100 rounded-md">
                                    Active
                                </button>

                                <button className="px-3 py-1 text-sm bg-gray-100 rounded-md">
                                    Completed
                                </button>
                            </div>
                        </div>

                        {/* New Request Button */}
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 whitespace-nowrap">
                            + Submit New Request
                        </button>
                    </div>

                    {/* Ticket Table */}
                    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="px-6 py-3">Ticket ID</th>
                                    <th className="px-6 py-3">Subject</th>
                                    <th className="px-6 py-3">Date Submitted</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3">Action</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y">

                                <tr>
                                    <td className="px-6 py-4 text-blue-600">#BRG-2024-001</td>
                                    <td className="px-6 py-4">Street Light Repair</td>
                                    <td className="px-6 py-4">Oct 24, 2023</td>

                                    <td className="px-6 py-4">
                                        <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">
                                            In Progress
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-blue-600 cursor-pointer">
                                        View Details
                                    </td>
                                </tr>

                                <tr>
                                    <td className="px-6 py-4 text-blue-600">#BRG-2024-005</td>
                                    <td className="px-6 py-4">Garbage Collection Inquiry</td>
                                    <td className="px-6 py-4">Oct 22, 2023</td>

                                    <td className="px-6 py-4">
                                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                                            Resolved
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-blue-600 cursor-pointer">
                                        View Details
                                    </td>
                                </tr>

                                <tr>
                                    <td className="px-6 py-4 text-blue-600">#BRG-2024-012</td>
                                    <td className="px-6 py-4">Pothole Filling Request</td>
                                    <td className="px-6 py-4">Oct 20, 2023</td>

                                    <td className="px-6 py-4">
                                        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                                            Pending
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-blue-600 cursor-pointer">
                                        View Details
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                        {/* Pagination */}
                        <div className="flex justify-between items-center p-4 text-sm text-gray-500">
                            <span>Showing 1 to 5 of 12 entries</span>

                            <div className="flex gap-2">
                                <button className="px-3 py-1 border rounded">Previous</button>
                                <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
                                <button className="px-3 py-1 border rounded">2</button>
                                <button className="px-3 py-1 border rounded">Next</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}