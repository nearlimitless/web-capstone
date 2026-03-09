import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function TicketView() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500">
                            Tickets &gt; Ticket #BRGY-2023-0892
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800">
                            Street Light Repair: Purok 7
                        </h2>

                        <p className="text-sm text-gray-500">
                            Submitted by Maria Santos • Aug 24, 2023
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button className="bg-blue-600 text-white px-4 h-10 rounded-md text-sm hover:bg-blue-700">
                            Update Status
                        </button>

                        <button className="border px-4 h-10 rounded-md text-sm hover:bg-gray-50">
                            Print Report
                        </button>
                    </div>
                </div>
            }
        >
            <Head title="Ticket Details" />

            <div className="py-10">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-3 gap-6">

                    {/* LEFT CONTENT */}
                    <div className="col-span-2 space-y-6">

                        {/* STATUS TRACKER */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex justify-between items-center">

                                <div className="flex-1 text-center">
                                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto">
                                        ✓
                                    </div>
                                    <p className="text-xs mt-2 font-semibold">CREATED</p>
                                    <p className="text-xs text-gray-400">Aug 24, 10:00 AM</p>
                                </div>

                                <div className="flex-1 text-center">
                                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto">
                                        👤
                                    </div>
                                    <p className="text-xs mt-2 font-semibold">ASSIGNED</p>
                                    <p className="text-xs text-gray-400">Aug 24, 2:30 PM</p>
                                </div>

                                <div className="flex-1 text-center">
                                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto">
                                        ⚡
                                    </div>
                                    <p className="text-xs mt-2 font-semibold text-blue-600">
                                        IN PROGRESS
                                    </p>
                                    <p className="text-xs text-gray-400">Aug 25, 9:00 AM</p>
                                </div>

                                <div className="flex-1 text-center opacity-40">
                                    <div className="w-10 h-10 border rounded-full flex items-center justify-center mx-auto">
                                        ✓
                                    </div>
                                    <p className="text-xs mt-2 font-semibold">RESOLVED</p>
                                    <p className="text-xs text-gray-400">Pending</p>
                                </div>

                            </div>
                        </div>

                        {/* ISSUE DESCRIPTION */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="font-semibold text-gray-700 mb-3">
                                Issue Description
                            </h3>

                            <p className="text-sm text-gray-600 leading-relaxed">
                                The street light near the entrance of Purok 7 (near the
                                community garden) has been flickering for three days and
                                completely went out last night. This area is quite dark at
                                night, causing security concerns for residents returning
                                home late from work.
                            </p>

                            {/* Images */}
                            <div className="flex gap-4 mt-4">

                                <div className="w-32 h-20 bg-gray-200 rounded-md"></div>
                                <div className="w-32 h-20 bg-gray-200 rounded-md"></div>

                                <div className="w-32 h-20 border-2 border-dashed rounded-md flex items-center justify-center text-gray-400">
                                    +
                                </div>

                            </div>
                        </div>

                        {/* DISCUSSION */}
                        <div className="bg-white rounded-lg shadow p-6">

                            <h3 className="font-semibold text-gray-700 mb-4">
                                Updates & Discussion
                            </h3>

                            {/* Resident Message */}
                            <div className="flex gap-3 mb-4">

                                <div className="w-8 h-8 rounded-full bg-gray-200"></div>

                                <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-600 max-w-xl">
                                    Please prioritize this as many elderly residents walk
                                    here at night.
                                </div>

                            </div>

                            {/* Admin Message */}
                            <div className="flex justify-end">

                                <div className="bg-blue-600 text-white p-3 rounded-lg text-sm max-w-xl">
                                    Noted, Maria. Our team is scheduled to inspect the
                                    wiring tomorrow morning. We will update you once the
                                    parts are replaced.
                                </div>

                            </div>

                            {/* Reply */}
                            <div className="mt-5">
                                <input
                                    type="text"
                                    placeholder="Add an update or reply..."
                                    className="w-full border rounded-md px-4 py-2 text-sm"
                                />
                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="space-y-6">

                        {/* METADATA */}
                        <div className="bg-white rounded-lg shadow p-5">

                            <h3 className="text-xs font-semibold text-gray-500 mb-4">
                                TICKET METADATA
                            </h3>

                            <div className="space-y-3 text-sm">

                                <div>
                                    <p className="text-gray-400 text-xs">Ticket ID</p>
                                    <p className="font-medium">
                                        #BRGY-2023-0892
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-400 text-xs">Date Filed</p>
                                    <p>Aug 24, 2023</p>
                                </div>

                                <div>
                                    <p className="text-gray-400 text-xs">Priority</p>
                                    <p className="text-red-500 font-medium">
                                        High Priority
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-400 text-xs">Assigned To</p>
                                    <p>Engr. Ramos</p>
                                </div>

                                <div>
                                    <p className="text-gray-400 text-xs">Category</p>
                                    <p>Infrastructure</p>
                                </div>

                            </div>

                        </div>

                        {/* MAP */}
                        <div className="bg-white rounded-lg shadow p-5">

                            <h3 className="text-xs font-semibold text-gray-500 mb-3">
                                LOCATION
                            </h3>

                            <div className="w-full h-40 bg-gray-200 rounded-md"></div>

                        </div>

                        {/* CONTACT */}
                        <div className="bg-white rounded-lg shadow p-5">

                            <h3 className="text-xs font-semibold text-blue-600 mb-3">
                                RESIDENT CONTACT
                            </h3>

                            <p className="font-semibold">
                                Maria Santos
                            </p>

                            <p className="text-sm text-gray-500">
                                +63 912 345 6789
                            </p>

                            <p className="text-sm text-gray-500">
                                m.santos@email.com
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}