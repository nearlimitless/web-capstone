import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
             header={
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                    Dashboard
                </h2>

                <Link
                    href={route('requestform')}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 whitespace-nowrap"
                >
                    + Submit New Request
                </Link>
            </div>
        }
        >
            <Head title="Dashboard" />

            <div className="py-10">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-6">

                    {/* Welcome Banner */}
                    <div className="bg-blue-600 text-white p-6 rounded-lg shadow">
                        <h1 className="text-xl font-semibold">
                            Welcome back, Aaron!
                        </h1>

                        <p className="text-blue-100 mt-2 text-sm max-w-xl">
                            Manage your local government service requests, view
                            latest barangay announcements, and track your
                            active tickets all in one place.
                        </p>
                    </div>


                    {/* Ticket Stats */}
                    <div className="grid grid-cols-3 gap-6">

                        <div className="bg-white p-5 rounded-lg shadow">
                            <p className="text-sm text-gray-500">
                                Pending Tickets
                            </p>

                            <h2 className="text-2xl font-bold mt-2">
                                02
                            </h2>

                            <p className="text-xs text-gray-400 mt-1">
                                Needs attention
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow">
                            <p className="text-sm text-gray-500">
                                In Progress
                            </p>

                            <h2 className="text-2xl font-bold mt-2">
                                01
                            </h2>

                            <p className="text-xs text-green-500 mt-1">
                                +1 this week
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow">
                            <p className="text-sm text-gray-500">
                                Resolved
                            </p>

                            <h2 className="text-2xl font-bold mt-2">
                                15
                            </h2>

                            <p className="text-xs text-green-500 mt-1">
                                +10% total
                            </p>
                        </div>

                    </div>


                    {/* Active Requests */}
                    <div className="bg-white rounded-lg shadow">

                        <div className="flex justify-between items-center p-5 border-b">
                            <h3 className="font-semibold text-gray-700">
                                Active Requests
                            </h3>

                            <button className="text-sm text-blue-600">
                                View all
                            </button>
                        </div>

                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-gray-500">
                                <tr>
                                    <th className="px-6 py-3">Request ID</th>
                                    <th className="px-6 py-3">Subject</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3">Last Update</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y">

                                <tr>
                                    <td className="px-6 py-4 text-blue-600">
                                        #BRGY-1024
                                    </td>

                                    <td className="px-6 py-4">
                                        <p className="font-medium">
                                            Street Light Repair
                                        </p>

                                        <p className="text-xs text-gray-400">
                                            Purok 1, San Vicente, Apalit
                                        </p>
                                    </td>

                                    <td className="px-6 py-4">
                                        <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
                                            Pending
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-gray-500">
                                        2 hours ago
                                    </td>
                                </tr>

                                <tr>
                                    <td className="px-6 py-4 text-blue-600">
                                        #BRGY-1015
                                    </td>

                                    <td className="px-6 py-4">
                                        <p className="font-medium">
                                            Garbage Collection
                                        </p>

                                        <p className="text-xs text-gray-400">
                                            Purok 2, San Vicente, Apalit
                                        </p>
                                    </td>

                                    <td className="px-6 py-4">
                                        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                                            In Progress
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-gray-500">
                                        Yesterday
                                    </td>
                                </tr>

                                <tr>
                                    <td className="px-6 py-4 text-blue-600">
                                        #BRGY-1008
                                    </td>

                                    <td className="px-6 py-4">
                                        <p className="font-medium">
                                            Clearance Request
                                        </p>

                                        <p className="text-xs text-gray-400">
                                            Purok 3, San Vicente, Apalit
                                        </p>
                                    </td>

                                    <td className="px-6 py-4">
                                        <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                                            Resolved
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-gray-500">
                                        3 days ago
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </div>


                    {/* Bottom Section */}
                    <div className="grid grid-cols-2 gap-6">


                        {/* Announcements */}
                        <div className="bg-white rounded-lg shadow p-5">

                            <h3 className="font-semibold text-gray-700 mb-4">
                                Latest Announcements
                            </h3>

                            <div className="space-y-4">

                                <div>
                                    <p className="text-xs text-blue-500 font-semibold">
                                        UPCOMING EVENT
                                    </p>

                                    <p className="font-medium">
                                        Community Cleanup Drive
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        Join us this Saturday for our monthly
                                        barangay cleaning initiative.
                                    </p>
                                </div>


                                <div>
                                    <p className="text-xs text-gray-400 font-semibold">
                                        HEALTH ADVISORY
                                    </p>

                                    <p className="font-medium">
                                        Dengue Prevention Seminar
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        The health office will conduct a
                                        seminar on preventing dengue during
                                        the rainy season.
                                    </p>
                                </div>

                            </div>

                        </div>


                        {/* Help Section */}
                        <div className="bg-gray-50 rounded-lg shadow p-6 text-center">

                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                ?
                            </div>

                            <h3 className="font-semibold">
                                Need immediate assistance?
                            </h3>

                            <p className="text-sm text-gray-500 mt-2">
                                If you have an emergency or need help with
                                the portal, our support team is available
                                24/7.
                            </p>

                            <div className="flex justify-center gap-3 mt-4">

                                <button className="px-4 py-2 border rounded-md text-sm">
                                    View FAQs
                                </button>

                                <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
                                    Contact Admin
                                </button>

                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </AuthenticatedLayout>
    );
}